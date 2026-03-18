import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardService from "../CardService/CardService";
import styles from "./OurServices.module.css";

export default function OurServices({ display = true, services = [] }) {
  return (
    <div className="mb-[5rem]">
      {display && (
        <div className={`${styles.BarStyleH} text-white text-center font-[600] text-2xl md:text-3xl lg:text-[2.5rem] mt-8 md:mt-12 lg:mt-[3.125rem] mb-6 md:mb-8 lg:mb-[1.875rem]`}>
          <div className={styles.GlowConeDown} />
          <p>
            Explore Our
            <span className="PlayFair italic mx-5 font-[500]">
              Full Services
            </span>
            That Drive Your Brand&#39;s Performance
          </p>
        </div>
      )}

      <div className="grid grid-cols-4 gap-3 md:gap-[20px]">
        {services.map((service) => {
     

          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}

            >
              <CardService />
            </Link>
          );
        })}
      </div>
    </div>
  );
}









// import React from "react";
// import "@/Components/OurServices/OurServices.css";
// import Image from "next/image";
// import Link from "next/link";

// export default function OurServices({ display = true }) {
//   return (
//     <div className=" mb-[5rem]">
//       {display && (
//         <h1 className="text-center text-primary uppercase font-[700] text-2xl md:text-3xl lg:text-[2.25rem] mt-8 md:mt-12 lg:mt-[3.125rem] mb-6 md:mb-8 lg:mb-[1.875rem]">
//           Our Services
//         </h1>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-[20px]">
//         {/* Digital Marketing Services */}
//         <Link href={'/services/digitalMarketing'} className="bgImageOurServices1 md:row-span-2 md:col-span-1 lg:row-span-2 lg:col-span-4 relative min-h-[280px] md:min-h-[400px] ">
//           <div className="border-gradient-color flex flex-col justify-between h-full p-6 md:p-[1.875rem] group">
//             <div className="grid grid-cols-2">
//               <div>
//                 <h1 className="text-white font-[700] text-xl md:text-2xl lg:text-[2rem]">
//                   Digital Marketing Services
//                 </h1>
//               </div>
//               <div className="flex items-start justify-end text-white ">
//                 <Image
//                   className="-rotate-45  group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out "
//                   src="/OurServices/angle.png"
//                   alt="arrow"
//                   width={30}
//                   height={30}
//                 />
//               </div>
//             </div>
//             <div className="text-white text-base md:text-lg lg:text-[1.125rem] font-[400]">
//               <p>Social Media Management</p>
//               <p>Influencer Marketing</p>
//               <p>Paid Ads: Facebook, TikTok, LinkedIn, X (Twitter), Snapchat</p>
//             </div>
//           </div>
//         </Link>

//         {/* Website Development & Software Services */}
//         <Link href={'/services/softwareServices'} className="bgImageOurServices3 md:col-span-1 lg:col-span-8 relative min-h-[280px] md:min-h-[300px]">
//           <div className="border-gradient-color flex flex-col justify-between h-full p-6 md:p-[1.875rem] group">
//             <div className="grid grid-cols-2">
//               <div>
//                 <h1 className="text-white font-[700] text-xl md:text-2xl lg:text-[2rem]">
//                   Website Development <br /> & Software Services
//                 </h1>
//               </div>
//               <div className="flex items-start justify-end text-white">
//                 <Image
//                   className="-rotate-45 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out"
//                   src="/OurServices/angle.png"
//                   alt="arrow"
//                   width={30}
//                   height={30}
//                 />
//               </div>
//             </div>
//             <div className="text-white text-base md:text-lg lg:text-[1.125rem] font-[400]">
//               <p>UI/UX Design</p>
//               <p>Web Development & Maintenance</p>
//               <p>Mobile & Web Apps</p>
//               <p>Domain & Hosting Services</p>
//             </div>
//           </div>
//         </Link>

//         {/* Artificial Intelligence Services */}
//         <Link href={'/services/ai'} className="bgImageOurServices4 md:col-span-1 lg:col-span-4 relative min-h-[280px] md:min-h-[300px]">
//           <div className="border-gradient-color flex flex-col justify-between h-full p-6 md:p-[1.875rem] group">
//             <div className="grid grid-cols-2">
//               <div>
//                 <h1 className="text-white font-[700] text-xl md:text-2xl lg:text-[2rem]">
//                   Artificial Intelligence (AI) Services
//                 </h1>
//               </div>
//               <div className="flex items-start justify-end text-white">
//                 <Image
//                   className="-rotate-45 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out"
//                   src="/OurServices/angle.png"
//                   alt="arrow"
//                   width={30}
//                   height={30}
//                 />
//               </div>
//             </div>
//             <div className="text-white text-base md:text-lg lg:text-[1.125rem] font-[400]">
//               <p>
//                 Workflow & Marketing Automation Customer & Sales Funnel
//                 Automation Retrieval Augmented Generation Custom AI Training
//               </p>
//             </div>
//           </div>
//         </Link>

//         {/* Offline Marketing Services */}
//         <Link href={'/services/offlineMarketing'} className="bgImageOurServices5 md:col-span-2 lg:col-span-4 relative min-h-[280px] md:min-h-[300px]">
//           <div className="border-gradient-color flex flex-col justify-between h-full p-6 md:p-[1.875rem] group">
//             <div className="grid grid-cols-2">
//               <div>
//                 <h1 className="text-white font-[700] text-xl md:text-2xl lg:text-[2rem]">
//                   Offline Marketing Services{" "}
//                 </h1>
//               </div>
//               <div className="flex items-start justify-end text-white">
//                 <Image
//                   className="-rotate-45 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out"
//                   src="/OurServices/angle.png"
//                   alt="arrow"
//                   width={30}
//                   height={30}
//                 />
//               </div>
//             </div>
//             <div className="text-white text-base md:text-lg lg:text-[1.125rem] font-[400]">
//               <p>Graphic & 3D Design</p>
//               <p>Product Packaging & Printing</p>
//               <p>Customized Giveaways & Trophies</p>
//               <p>Booth & Signage Design</p>
//             </div>
//           </div>
//         </Link>

//         {/* Media Production Services */}
//         <Link href={'/services/mediaProduction'} className="bgImageOurServices6 md:col-span-2 lg:col-span-8 relative min-h-[280px] md:min-h-[300px]">
//           <div className="border-gradient-color flex flex-col justify-between h-full p-6 md:p-[1.875rem] group">
//             <div className="grid grid-cols-2">
//               <div>
//                 <h1 className="text-white font-[700] text-xl md:text-2xl lg:text-[2rem]">
//                   Media Production Services
//                 </h1>
//               </div>
//               <div className="flex items-start justify-end text-white">
//                 <Image
//                   className="-rotate-45 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out"
//                   src="/OurServices/angle.png"
//                   alt="arrow"
//                   width={30}
//                   height={30}
//                 />
//               </div>
//             </div>
//             <div className="text-white text-base md:text-lg lg:text-[1.125rem] font-[400]">
//               <p> Videography and documentation.</p>
//               <p>Event and product photography.</p>
//               <p>Post-production (edit, colour, retouch).</p>
//               <p>Live streaming.</p>
//             </div>
//           </div>
//         </Link>

//         {/* Event Management Services */}
//         <Link href={'/services/eventManagement'} className="bgImageOurServices7 md:col-span-2 lg:col-span-4 relative min-h-[280px] md:min-h-[300px]">
//           <div className="border-gradient-color flex flex-col justify-between h-full p-6 md:p-[1.875rem] group">
//             <div className="grid grid-cols-2">
//               <div>
//                 <h1 className="text-white font-[700] text-xl md:text-2xl lg:text-[2rem]">
//                   Event Management Services{" "}
//                 </h1>
//               </div>
//               <div className="flex items-start justify-end text-white">
//                 <Image
//                   className="-rotate-45 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out"
//                   src="/OurServices/angle.png"
//                   alt="arrow"
//                   width={30}
//                   height={30}
//                 />
//               </div>
//             </div>
//             <div className="text-white text-base md:text-lg lg:text-[1.125rem] font-[400]">
//               <p>Full Event Management</p>
//               <p>Audio/Video Production & LED Screens</p>
//               <p>Live Translation & Catering</p>
//               <p>Registration & Ushering Services</p>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }
