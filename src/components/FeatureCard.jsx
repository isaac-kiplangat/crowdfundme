import React, { useState } from 'react'
import FundLogo from  '../assets/logo-mastercraft.svg'
import {FaBookmark} from 'react-icons/fa'

const FeatureCard = ({handleBookmark, isClicked, handleBackProject}) => {
  
  return (
    <div className=' mt-[-10%]  rounded-md bg-white py-4 '>
      <div className='w-12 h-12 mx-auto -translate-y-[75%]'>
        <img src={FundLogo} alt="fund logo" className='object-cover' />
      </div>
      <div className=''>
        <h2 className='text-lg font-bold  text-center'>Mastercard Bamboo Monitor Riser</h2>
        <p className='text-gray-500 text-center text-sm py-2'>A beautiful  & handcrafted monitor stand to
         reduce neck and eye strain</p>
         <div className='flex justify-between w-4/5 mx-auto my-8'>
          <button onClick={handleBackProject} className='px-6 py-3 text-sm font-medium bg-[#147b74] text-white rounded-full'>Back this project</button>
          <div onClick={handleBookmark} className='bg-gray-300 rounded-full flex items-center '>
            <FaBookmark size={40} className={`text-gray-300 p-3 rounded-full ${isClicked ? 'bg-[#147d79]':'bg-black' }`}/>
             <span className={`px-3 ${isClicked?'text-[#147d79]':'text-gray-500'} font-medium`}>{isClicked? 'Bookmarked':'Bookmark'}</span>            
          </div>
         </div>
      </div>
      

    </div>
  )
}

export default FeatureCard