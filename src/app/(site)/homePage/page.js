import ClientsTeaServer from '@/Components/ClientsTea/ClientsTeaServer'
import HeroSection from '@/Components/HeroSection/HeroSection'
import HowWeWork from '@/Components/HowWeWork/HowWeWork'
import OurServicesServer from '@/Components/OurServices/OurServicesServer'
import React from 'react'

async function getHomePageData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/globals/home-page`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function HomePage() {
  const data = await getHomePageData();


    
  const HeroData = data?.hero ?? {};
  const ClientLogos = data?.clientLogos ?? [];
  const HowWeWorkData = data?.howWeWork ?? {};
  const ClientsTea = data?.clientsTea ?? {};

  return (
    <>
      <div className=''>
        <HeroSection HeroData={HeroData} ClientLogos={ClientLogos} />
        <HowWeWork data={HowWeWorkData} />
        <OurServicesServer />
      </div>
      <ClientsTeaServer data={ClientsTea} />
    </>
  )
}
