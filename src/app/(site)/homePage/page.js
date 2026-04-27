import ClientsTea from '@/Components/ClientsTea/ClientsTea';
import ClientsTeaServer from '@/Components/ClientsTea/ClientsTeaServer'
import HeroSection from '@/Components/HeroSection/HeroSection'
import OurServices from '@/Components/OurServices/OurServices';
import OurServicesServer from '@/Components/OurServices/OurServicesServer'
import RaceLineSuccess from '@/Components/RaceLineSuccess/RaceLineSuccess';
import React from 'react'

async function getHomePageData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/globals/home-page`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function HomePage() {
  // const data = await getHomePageData();


    
  // const HeroData = data?.hero ?? {};
  // const ClientLogos = data?.clientLogos ?? [];
  // const RaceLineSuccessData = data?.raceLineSuccess ?? {};
  // const ClientsTea = data?.clientsTea ?? {};

  return (
    <>
      <div className=''>
        <HeroSection  />
        <RaceLineSuccess  />
        <OurServices />
        {/* <ServicesGridFigma /> */}
      </div>
  <ClientsTea />
    </>
  )
}
