import React, { useState } from 'react'
import Banner from '../components/Banner'
import FeatureCard from '../components/FeatureCard'
import FeatureInfo from '../components/FeatureInfo'
import FeatureAbout from '../components/FeatureAbout'
import {IoClose} from 'react-icons/io5'
import ModalCard from '../components/ModalCard'

const Home = () => {
  const [isModalOpen, setIsModalOPen] =useState(false)
  const [isClicked , setIsClicked]= useState(false)
  const handleBookmark=()=>{
    setIsClicked(!isClicked)
  }
  const handleBackProject=()=>{
    setIsModalOPen(!isModalOpen)
  }
  const handleClose =()=>{
    setIsModalOPen(false)
  }

  const backOptions= [
    {
      id:1,
      title:"Pledge with no reward",
      desc:"Choose to support us without a reward simply if you believe in our project.As a backer, you will be signed up to receive products updates via email"
    },
    {
      id:2,
      title:"Bamboo Stand",
      amount: 25,
      desc:"Choose to support us without a reward simply if you believe in our project.As a backer, you will be signed up to receive products updates via email",
      spots:101
    },
    {
      id:3,
      title:"Black Edition Stand",
      amount: 75,
      desc:"Choose to support us without a reward simply if you believe in our project.As a backer, you will be signed up to receive products updates via email",
      spots:64
    },
    {
      id:4,
      title:"Mahogany Special Stand",
      amount: 200,
      desc:"Choose to support us without a reward simply if you believe in our project.As a backer, you will be signed up to receive products updates via email",
      spots:0
    },
  ]
  return (
    <div className='relative'>
      <Banner/>
      <div className='w-2/3 mx-auto space-y-6'>
      <FeatureCard handleBookmark={handleBookmark} handleBackProject={handleBackProject} isClicked={isClicked}/>
      <FeatureInfo/>
      <FeatureAbout/>
      </div>

      {isModalOpen && (
      <div>
        <div className=' absolute w-screen h-full top-0 right-0 bg-black  opacity-30'></div>
          <div className='fixed z-100 w-2/3 mx-[16.7%] bg-white top-[10%] py-8 rounded-md'>
            <IoClose size={30} onClick={handleClose} className='absolute top-2 right-2'/>
            <div className='w-4/5 mx-auto mb-4'>
            <h2 className='font-bold py-4 text-lg'>Back this Project</h2>
            <p className='text-gray-500'>Want to support us in bringing Mastercard Card Bamboo Monitor Riser out to the world?</p>
            </div>
            <div className='w-4/5 mx-auto grid gap-4'>
              {backOptions.map(item=>(
              <ModalCard title={item.title} desc={item.desc} amount={item.amount}  spots={item.spots} key={item.id}/>
                ))}
            </div>
          
          </div>
        </div>
        )}
    </div>
  )
}

export default Home