import React, { useState } from 'react'

const Subscription = ({fundInfo}) => {
  const {title, amount,spots, desc} = fundInfo
  const [isNull , setIsNull] =useState(false)

  // if (spots == 0){
  //   setIsNull(!null)
  // }
  // else {
  //   setIsNull(false)
  // }
  
  return (
    <div className='px-4 py-4 border border-gray-400 rounded-md'>
      <div className='py-2 flex justify-between items-center'>
        <h2 className='text-md font-semibold'>{title}</h2>
        <p className='text-sm font-medium text-[#147d79]'>Pledge ${amount} or more</p>
      </div>
      <p className=' text-md text-gray-500 mt-4 tracking-wider'>{desc}</p>
      <div className='py-4 flex justify-between items-center mt-4 mb-2'>
        <h2 className={`text-2xl gap-2 font-semibold ${isNull?'text-gray-500':'text-black'} flex items-center`}>{spots}<span className='text-sm font-light text-gray-500'>left</span></h2>
        <button className={`py-2 px-4 rounded-full bg-[#147d79] text-white text-sm font-medium`}>Select Reward</button>
      </div>
      
    </div>
  )
}

export default Subscription