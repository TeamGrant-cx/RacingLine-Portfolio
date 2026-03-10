// "use client";
// import { useRef } from "react";
// import Lottie from "lottie-react";

// export default function CardServiceLottie({
//   animationData,
//   title,
//   description,
// }) {
//   const lottieRef = useRef(null);

//   const handleMouseEnter = () => {
//     if (lottieRef.current) {
//       lottieRef.current.setDirection(1); // Forward
//       lottieRef.current.play();
//     }
//   };

//   const handleMouseLeave = () => {
//     if (lottieRef.current) {
//       lottieRef.current.setDirection(-1); // Reverse
//       lottieRef.current.play();
//     }
//   };

//   return (
//     <div
//       className="relative group rounded-20 border-gradient-color overflow-hidden aspect-[410/450] flex flex-col bg-[#0a0a0a]"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="flex-1 w-full overflow-hidden flex items-center justify-center px-5 py-1">
//         <Lottie
//           lottieRef={lottieRef}
//           animationData={animationData}
//           loop={false}
//           autoplay={false}
//           className="w-full h-full"
//         />
//       </div>

//       <div className="h-[100px] flex flex-col justify-center items-start px-[1.5rem] py-[1rem] gap-2">
//         <h2 className="text-primary text-[1rem] uppercase font-medium">
//           {title}
//         </h2>
//         <p className="text-white/70 text-[0.85rem] leading-tight">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }



"use client";
import { useRef } from "react";
import Lottie from "lottie-react";

export default function CardServiceLottie({
  animationData,
  title,
  description,
}) {
  const lottieRef = useRef(null);

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0);
    }
  };

  return (
    <div
      className="relative group rounded-20 border-gradient-color overflow-hidden aspect-[410/450] flex flex-col bg-[#0a0a0a]"
      onMouseEnter={handleMouseEnter}
    >
      {/* Media Section */}
      <div className="flex-1 w-full overflow-hidden flex items-center justify-center px-5 py-1">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          className="w-full h-full"
        />
      </div>

      {/* Content Section - Fixed height */}
      <div className="h-[100px] flex flex-col justify-center items-start px-[1.5rem] py-[1rem] gap-2">
        <h2 className="text-primary text-[1rem] uppercase font-medium">
          {title}
        </h2>
        <p className="text-white/70 text-[0.85rem] leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
}
