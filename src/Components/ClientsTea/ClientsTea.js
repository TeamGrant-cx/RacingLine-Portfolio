

import React from "react";

import CardReview from "../CardReview/CardReview";




export default function ClientsTea({ data, reviews }) {





  return (
    <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-2 min-h-[600px]">
      <div className="flex items-center justify-center">
        <div className="">
          <h1 className="text-primary font-[700] text-[2.25rem]">
            {data?.heading ?? "Client's Tea!!"}
          </h1>
          <p className="text-white font-[400] text-[1.25rem] w-[75%]">
            {data?.description ?? `Grab a cup, sit back, and sip on what our clients have to say. These
            stories highlight the wins, the surprises, and the magic that
            happens when we collaborate.`}
          </p>
        </div>
      </div>

      <div className="p-5 flex items-center justify-center">
        <div className="h-[450px] overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-[8rem] bg-gradient-to-b from-[#000000] to-transparent pointer-events-none z-10" />

          <div className="h-full overflow-y-auto scrollbar-hide">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4  ">
              <div className="flex flex-col">
                {reviews?.filter((_, i) => i % 2 === 0)
                  .map((review) => (
                    <CardReview key={review.id} review={review} />
                  ))}

              </div>

              <div className="flex flex-col mt-10">
                {reviews?.filter((_, i) => i % 2 === 1)
                  .map((review) => (
                    <CardReview key={review.id} review={review} />
                  ))}

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}