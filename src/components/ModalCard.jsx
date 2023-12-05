import React, { useState } from 'react'

const ModalCard = ({title,desc, amount, spots}) => {
  const [isNull , setIsNull] =useState(false)
  return (
  <div className='border border-gray-400 rounded-md p-4 flex flex-row gap-4'>
  <div className='w-12 '>
    <input type="checkbox" name="checkbox" id="checkbox" className='bg-[#147d79]' />
  </div>
  <div className=''>
    <div className='flex justify-between'> 
      <div className='flex gap-4'>
      <h2>{title}</h2>
      <p>{isNull?'': `pledge $${amount} or more`}</p>
      </div>
      <p>{spots}</p>
       
    </div>
    <p>{desc}</p>

  </div>
  </div>  
)
}

export default ModalCard