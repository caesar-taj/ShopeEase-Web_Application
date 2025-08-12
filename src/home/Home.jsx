import React from 'react'
import Banner from './Banner'
import HomeCatagory from './HomeCatagory'
import CatagoryShowcase from './CatagoryShowcase'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'


const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCatagory/>
        <CatagoryShowcase/>
        <LocationSprade/>
        <AboutUs/>
        <AppSection/>
    </div>
  )
}

export default Home