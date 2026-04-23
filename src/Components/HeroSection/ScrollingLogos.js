import Image from "next/image";
import styles from "./ScrollingLogos.module.css";

export default function ScrollingLogos({ logos, speed = 20 }) {
  if (!logos || logos.length === 0) return null;

  const items = [...logos, ...logos];

  return (
    <div className="mt-5 h-[80px] rounded-[50px] flex items-center overflow-hidden ">
      <div
        className={styles.track}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((img, i) => {
          const src = typeof img === "string" ? img : img?.logo?.url;
          const isClone = i >= logos.length;
          return (
            <div
              key={i}
              className={styles.item}
              aria-hidden={isClone || undefined}
            >
              <Image
                src={src}
                alt={`client-logo-${i % logos.length}`}
                width={150}
                height={70}
                className="w-auto h-[80px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
