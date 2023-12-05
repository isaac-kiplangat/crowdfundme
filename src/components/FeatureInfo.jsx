import React from 'react'

const FeatureInfo = () => {
  return (
    <div className=' bg-white rounded-md py-4'>
      <div className=' flex items-center  gap-8  py-4 w-4/5 mx-auto'>
        <div>
          <h2 className=' font-semibold text-black text-2xl'>$89,914.00</h2>
          <p className='text-sm text-gray-500 '>of $100000 backed</p>
        </div>
        <hr className="bg-gray-500 w-[1px] h-12 mx-8"/>
        <div>
        <h2 className=' font-semibold text-black text-2xl'>5,007</h2>
          <p className='text-sm text-gray-500 '>total backers</p>
        </div>
        <hr className="bg-gray-500 w-[1px] h-12 mx-8"/>
        <div>
        <h2 className=' font-semibold text-black text-2xl'>56</h2>
          <p className='text-sm text-gray-500 '>days left</p>
        </div>

      </div>
      <div className='w-4/5 mx-auto overflow-hidden h-2 my-4 flex flex-end rounded-full border border-[#147d79] bg-gray-200'>
        <span className=' bg-[#147b74] w-3/4 rounded-full p-1'></span>

      </div>

    </div>
  )
}

export default FeatureInfo