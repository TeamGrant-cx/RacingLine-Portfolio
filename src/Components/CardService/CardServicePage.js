



import Image from "next/image";
import React from "react";

export default function CardServicePage({ title, desc }) {




    return (
        <>


            <div className="border border-10 border-[#FFFFFF1A] rounded-[1.25rem] bg-[#FFFFFF40] px-10 py-10 ">
                <div className="flex justify-end  m-[30px]">
                    <Image
                        src="/OurServices/DigitalServices/card icon.png"
                        alt="Avatar"
                        width={92}
                        height={80}
                    />


                </div>
                <div className="text-white text-left mb-[30px]">
                    <p className="font-[700] font-bold text-[1.3rem] my-2">More Qualified Leads</p>
                    <p className="font-[400]  text-[1.25rem]">Your brand appears where customers are actively searching and browsing.</p>


                </div>

            </div>
        </>
    );
}
