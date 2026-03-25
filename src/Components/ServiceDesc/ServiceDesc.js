



import Image from "next/image";
import React from "react";
import CardServicePage from "../CardService/CardServicePage";
export default function ServiceDesc({ title, desc }) {
    return (
        <>
            <div className="py-[3.125rem] ">
                <p className="text-white text-center mx-auto text-[2.5rem] font-[600] w-[70%] font-semibold">
                    How Digital Marketing Accelerates Your Brand's Growth
                </p>
            </div>

            <div className="relative ">
                {/* Group 341 */}

                <Image
                    className="absolute -top-44 -left-15"
                    src="/OurServices/DigitalServices/Group 341.png"
                    alt="Avatar"
                    width={431}
                    height={284}
                />
                <Image
                    className="absolute -top-5 left-[33rem]"
                    src="/OurServices/DigitalServices/Group 340.png"
                    alt="Avatar"
                    width={681}
                    height={386}
                />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mx-20">
                    <CardServicePage />
                    <CardServicePage />
                    <CardServicePage />
                </div>
            </div>
        </>
    );
}