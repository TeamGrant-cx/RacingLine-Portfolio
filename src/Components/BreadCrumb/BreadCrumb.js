import React from "react";

export default function BreadCrumb({
  title1 = "",
  title2 = "",
  title3 = "",
  title4 = "",
}) {
  const words = title1.trim().split(/\s+/);

  const formattedTitle =
    words.length >= 4 ? (
      <>
        {words.slice(0, 2).join(" ")} <br />
        {words.slice(2).join(" ")}
      </>
    ) : (
      title1
    );

  return (
    <div className=" container mx-auto px- md:px- lg:px-">

    <div className="border-gradient-color flex flex-col justify-center items-center py-[3.125rem] container mx-auto px-6 md:px-12 lg:px-24">
      <h1 className="text-primary text-[2rem] md:text-[3rem] text-center leading-tight">
        {formattedTitle}
      </h1>

      <h2 className="text-white text-[0.813rem] md:text-[0.938rem] font-[400] flex items-center gap-2 flex-wrap justify-center">
        {title2}
        <span className="inline-block bg-primary w-[8px] h-[8px] rounded-tl-[0.25rem] rounded-br-[0.25rem]" />
        {title3}
        {title4 && (
          <>
            <span className="inline-block bg-primary w-[8px] h-[8px] rounded-tl-[0.25rem] rounded-br-[0.25rem]" />
            {title4}
          </>
        )}
      </h2>
    </div>

    </div>

  );
}
