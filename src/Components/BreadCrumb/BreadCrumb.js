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
    <div className="container">


      <p className="text-white">
        <span className="text-[1rem] font-[600] font-semibold ">
          Home
        </span>

        <span className="text-primary mx-3">
          /
        </span>
        <span className="text-[0.9rem] font-[600] font-semibold uppercase text-[#ABB1BA]">
          Our Services
        </span>
        <span className="text-primary mx-3">
          /
        </span>

        <span className="text-[0.9rem] font-[600] font-semibold uppercase text-[#ABB1BA]">
          Digital Marketing
        </span>

      </p>
    </div>

  );
}
