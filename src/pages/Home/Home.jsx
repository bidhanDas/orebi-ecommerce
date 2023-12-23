import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Info from '../../components/Info/Info'
import Ads from '../../components/Ads/Ads'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import Bestsellers from '../../components/Bestsellers/Bestsellers'
import Ads2 from '../../components/Ads2/Ads2'
import SpecialOffers from '../../components/SpecialOffers/SpecialOffers'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Header></Header>

    <Banner></Banner>
    <Info></Info>
    <Ads></Ads>
    <NewArrivals></NewArrivals>
    <Bestsellers></Bestsellers>
    <Ads2></Ads2>
    <SpecialOffers></SpecialOffers>

    <Footer></Footer>
    </>
  )
}

export default Home