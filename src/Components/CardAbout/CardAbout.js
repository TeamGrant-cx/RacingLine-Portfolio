const CardAbout = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-end p-[1.875rem] rounded-[1.25rem] bg-white/25 border-[0.9375rem] border-white/10 min-h-[20rem]">
      <div className="flex flex-col items-start gap-[1rem] w-full">
        <p className="capitalize font-bold text-white text-[1.5rem] leading-normal">
          {title}
        </p>
        <p className="font-normal text-[#e4e4e7] text-[1.25rem] leading-normal w-full min-h-[5.625rem]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardAbout;