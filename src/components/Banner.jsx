import React from 'react'
import Navbar from './Navbar'
import BannerImg from '../assets/image-hero-desktop.jpg'

const Banner = () => {
  return (
    <section style={{backgroundImage:`url(${BannerImg})`}} className='w-full h-[300px] bg-cover'>
      <Navbar/>
    </section>
  )
}

export default Banner