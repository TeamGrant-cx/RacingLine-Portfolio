import { notFound } from "next/navigation";
import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import ServiceDesc from "@/Components/ServiceDesc/ServiceDesc";
import ServiceDetails from "@/Components/ServiceDetails/ServiceDetails";
import CardServiceLottie from "@/Components/CardService/CardServiceLottie";
import CardServiceImage from "@/Components/CardService/CardServiceImage";
import CardServiceImageHalf from "@/Components/CardService/CardServiceImageHalf";
import CardServiceVideo from "@/Components/CardService/CardServiceVideo";
import ProjectShowcaseDigital from "@/Components/ProjectShowcaseDigital/ProjectShowcaseDigital";

async function getServiceBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/services?where[slug][equals]=${slug}&depth=2`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  const json = await res.json();
  
  return json.docs?.[0] ?? null;
}

function getProjectShowcase(project) {
  if (!project) return null;

  switch (project.showcaseLayout) {
    case "digital":
      return <ProjectShowcaseDigital project={project} />;
  
    default:
      return <ProjectShowcaseDigital project={project} />;
  }
}

function renderCard(card, index) {
  switch (card.cardType) {
    case "lottie":
      return card.animationData ? (
        <CardServiceLottie
          key={index}
          animationData={card.animationData}
          title={card.title}
          description={card.description}
        />
      ) : null;
    case "image":
      return (
        <CardServiceImage
          key={index}
          defaultImage={card.defaultImage?.sizes?.card?.url || card.defaultImage?.url}
          hoverImage={card.hoverImage?.sizes?.card?.url || card.hoverImage?.url}
          title={card.title}
          description={card.description}
        />
      );
    case "imageHalf":
      return (
        <CardServiceImageHalf
          key={index}
          image={card.defaultImage?.sizes?.card?.url || card.defaultImage?.url}
          title={card.title}
          description={card.description}
        />
      );
    case "video":
      return (
        <CardServiceVideo
          key={index}
          video={card.videoFile?.url}
          poster={card.defaultImage?.url}
          title={card.title}
          description={card.description}
        />
      );
    default:
      return null;
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return notFound();

  // Fetch Lottie JSON files server-side (CardServiceLottie expects a JSON object, not a URL)
  const cards = await Promise.all(
    (service.subServiceCards ?? []).map(async (card) => {
      if (card.cardType === "lottie" && card.lottieFile?.url) {
        const lottieUrl = card.lottieFile.url.startsWith("http")
          ? card.lottieFile.url
          : `${process.env.NEXT_PUBLIC_SITE_URL}${card.lottieFile.url}`;
        try {
          const res = await fetch(lottieUrl, { cache: "no-store" });
          const animationData = await res.json();
          return { ...card, animationData };
        } catch {
          return { ...card, animationData: null };
        }
      }
      return card;
    })
  );

  // Transform serviceDetails: CMS stores items as [{text}], component expects [string]
  const serviceDetailsList = (service.serviceDetails ?? []).map((section) => ({
    title: section.title,
    items: (section.items ?? []).map((item) => item.text),
  }));

  return (
    <div>
      <BreadCrumb
        title1={service.title || "Service"}
        title2="Home"
        title3="Our Services"
        title4={service.title || "Service"}
      />
      <div className="container mx-auto bg--500">
        <div className="mx-[rem]">
          <ServiceDesc
            title={service.pageHeading || service.title || ""}
            desc={service.pageDescription || ""}
          />

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[2.5rem] px-[rem]">
            {cards.map((card, index) => (
              <div key={card.id || index} className="">
                {renderCard(card, index)}
              </div>
            ))}
          </div>

    
        </div>

        {(service.projectShowcase ?? [])
          .filter((project) => typeof project === "object" && project !== null)
          .map((project, i) => (
            <div key={project.id || i}>
              {getProjectShowcase(project)}
            </div>
          ))}
      </div>
    </div>
  );
}
