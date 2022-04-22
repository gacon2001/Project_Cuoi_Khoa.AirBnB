
import React from 'react'
import SearchLocation from '../SearchLocation'
import NavbarHome from '../_components/NavbarHome'
import Carousel from './Carousel';
import Footer from './Footer';
import './_home.scss'

export default function Home() {
  return (
    <>
        <NavbarHome/>
        <SearchLocation/>
        <Carousel/>
        <Footer/>
    </>
  )
}
