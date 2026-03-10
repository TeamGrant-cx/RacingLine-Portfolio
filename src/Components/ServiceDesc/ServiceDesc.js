



import Image from "next/image";
import React from "react";

export default function ServiceDesc({ title, desc }) {




    return (
        <>
            <div className="text-center bg--500 py-[3.125rem] w-[70%] mx-auto">
                <h1 className="text-primary text-[2rem]">
                    {title}
                </h1>
                <p className="text-white text-[1.25rem]">
                    {desc}

                </p>
            </div>
        </>
    );
}
