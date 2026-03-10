// CardReview.jsx
import Image from "next/image";

export default function CardReview({ review }) {
  const avatar = review?.clientPhoto?.url;
  const logo = review?.companyLogo?.url;

  return (
    <div className="bg-[#1a1f2e] rounded-xl border-1 border-[#1D4058] p-2 mt-[2rem] shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        {avatar && (
          <Image
            src={avatar}
            alt={review?.clientPhoto?.alt || review.clientName}
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
        )}

        <div>
          <h1 className="text-white font-[700] text-[1.125rem]">
            {review.clientName}
          </h1>
          <p className="text-gray-300 text-sm">
            {review.clientRole} • {review.company}
          </p>
        </div>
      </div>

      <div className="pl-5">
        <p className="text-[#D9D9D9] font-[400] text-[0.9375rem] mb-4">
          {review.reviewText}
        </p>

        <div className="flex items-center gap-3">
          {logo && (
            <Image
              src={logo}
              alt={review?.companyLogo?.alt || `${review.company} logo`}
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-full"
            />
          )}

          <div className="border-l-1 border-white pl-3 flex flex-col">
            <span className="text-white text-sm font-medium">{review.rating}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`fa-solid fa-star ${
                    index < (review.rating ?? 0) ? "text-yellow-400" : "text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}