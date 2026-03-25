"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () =>
        tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    pixelsPerSecond = (config.speed || 1) * 100,
    snap =
      config.snap === false
        ? (v) => v
        : gsap.utils.snap(config.snap || 1),
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(
        gsap.getProperty(el, "width", "px")
      ));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });

  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    ).fromTo(
      item,
      {
        xPercent: snap(
          ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
        ),
      },
      {
        xPercent: xPercents[i],
        duration:
          (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
        immediateRender: false,
      },
      distanceToLoop / pixelsPerSecond
    ).add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  tl.progress(1, true).progress(0, true);
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

export default function ScrollingLogos({ logos }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!logos || logos.length === 0) return;

    const container = containerRef.current;
    const items = gsap.utils.toArray(
      container.querySelectorAll(".logo-item")
    );
    if (items.length === 0) return;

    // Force each item to take equal width so they fill the entire container
    const itemWidth = container.offsetWidth / items.length;
    items.forEach((el) => {
      el.style.width = itemWidth + "px";
      el.style.flexShrink = "0";
    });

    const loop = horizontalLoop(items, {
      repeat: -1,
      speed: 1.5,
      paddingRight: 0,
    });

    const observer = Observer.create({
      target: containerRef.current,
      onChangeY(self) {
        let factor = 2.5;
        if (self.deltaY < 0) {
          factor *= -1;
        }
        gsap
          .timeline({ defaults: { ease: "none" } })
          .to(loop, {
            timeScale: factor * 2.5,
            duration: 0.2,
            overwrite: true,
          })
          .to(loop, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      },
    });

    return () => {
      loop.kill();
      observer.kill();
    };
  }, [logos]);

  if (!logos || logos.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="mt-5 h-[80px] rounded-[50px] flex items-center overflow-hidden"
    >
      {logos.map((img, i) => (
        <div
          key={i}
          className="logo-item h-full flex items-center justify-center px-3"
        >
          <Image
            src={img.logo?.url}
            alt={`client-logo-${i}`}
            width={150}
            height={70}
            className="w-auto h-[80px] object-contain"
          />
        </div>
      ))}
    </div>
  );
}
