import ClientsTea from '@/Components/ClientsTea/ClientsTea';
import HeroSection from '@/Components/HeroSection/HeroSection'
import OurServices from '@/Components/OurServices/OurServices';
import RaceLineSuccess from '@/Components/RaceLineSuccess/RaceLineSuccess';
import React from 'react'



export default async function HomePage() {

  return (
    <>
      <div className=''>
        <HeroSection  />
        <RaceLineSuccess  />
        <OurServices />
      </div>
  <ClientsTea />
    </>
  )
}
