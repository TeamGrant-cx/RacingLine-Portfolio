



import styles from '@/Components/CardService/CardServices.module.css'

export default function CardService() {
  const cards = [
    {
      title: "Digital Marketing",
      services: [
        "social media management",
        "Influencer marketing",
        "Paid Ads",
        "SEO/SEM",
        "Content Marketing",
      ],
    },

  ];

  return (
    <div className="">
      {cards.map((card) => (
        <div
          key={card.title}
          className="group bg-[#F4F6F8] hover:bg-[#E0E6EB] rounded-[1.25rem] py-[1.25rem] px-[1.875rem]"
        >
          <p className="text-[#002B4D] text-[1.5rem] font-bold mb-">
            {card.title}
          </p>

          <div className="flex flex-col">
            {card.services.map((item) => (
              <p
                key={item}
                className="text-[#5C6770] text-[1rem] py-2 mb-2 border-b border-[#E8E8E8]"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button className={`group/btn relative overflow-hidden flex items-center gap-2 bg-[#77BD74] text-white py-2 px-4 rounded-[50px] ${styles['dot-btn']} `}>
              <span className="relative z-10">See More</span>
              <span className="relative z-10 flex items-center justify-center border-2 border-white rounded-full w-6 h-6">
                <i className="fa-solid fa-arrow-right rotate-45 group-hover:-rotate-45 transition-transform duration-300 text-white text-xs " ></i>
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}