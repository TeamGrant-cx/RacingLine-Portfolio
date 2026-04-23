import React from "react";

export default function BreadCrumb({
  title1 = "",
  title2 = "",
  title3 = "",
  title4 = "",
}) {


  return (
    <div className="container">


      <p className="text-white">
        <span className="text-[1rem] font-[600] font-semibold ">
          {title1 }
        </span>

        <span className="text-primary mx-3">
          /
        </span>
        <span className="text-[0.9rem] font-[600] font-semibold uppercase text-[#ABB1BA]">
          {title2}
        </span>

        {title3 && (
          <>
               <span className="text-primary mx-3">
          /
        </span>

        <span className="text-[0.9rem] font-[600] font-semibold uppercase text-[#ABB1BA]">
          {title3}
        </span>
          </>
        )}
   

      </p>
    </div>

  );
}
