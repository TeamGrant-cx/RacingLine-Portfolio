
  import OurServices from "./OurServices";

  export default async function OurServicesServer({ display = true }) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/services?depth=1&sort=gridLayout.order`,
      { cache: "no-store" }
    );

    if (!res.ok) return <OurServices display={display} services={[]} />;


    
    const json = await res.json();
    console.log("json",json);

    return <OurServices display={display}  />;
  }