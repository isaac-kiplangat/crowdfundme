import React from 'react'
import Subscription from './Subscription'

const FeatureAbout = () => {
  const options = [
    {
      title:"Bamboo Stand",
      amount: 25,
      desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list",
      spots: 110
    },
    {
      title:"Black Edition Stand",
      amount: 75,
      desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list",
      spots: 64
    },
    {
      title:"Mahogany Special Edition",
      amount: 200,
      desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list",
      spots: 0
    },
    
  ]
  return (
    <section className='py-8 bg-white rounded-md'>
      <div className='w-4/5 mx-auto'>
      <h2 className='font-semibold mt-8'>About this Project</h2>
      <p className='mt-4 text-md text-gray-500 leading-relaxed pr-4 trackig-wider'>The mastercraft bamboo Monitor Riser is a sturdy and stylish platform that elevates  your screen
       to a more comfortable viewing height. Placing your monitor at eye level has potential to improve your posture and make you more
       confortable while at work, helping you stay focused on the task at hand</p>
       <p className='mt-4 text-md text-gray-500 leading-relaxed pr-4 trackig-wider'>Featuring artisan craftmanship, the simplicity of the design creates extra space below your computer to all
         notepads , pens  and USB sticksto be stored under the stand.</p>
      </div>
      <div className='w-4/5 mx-auto mt-8 grid   gap-4'>
        {options.map((item, index)=>(
        <Subscription key={index} fundInfo={item}/>
        ))}
      </div>
    </section>
  )
}

export default FeatureAbout