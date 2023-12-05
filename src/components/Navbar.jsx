import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const Navlist =[
    {path:"/",link:"About"},
    {path:"/",link:"Discover"},
    {path:"/",link:"Get Started"},
    
  ]
  return (
<nav className='flex justify-between py-8 w-4/5 mx-auto bg-transparent items-center'>
  <div>
    <h2 className='text-white text-lg px-4 font-semibold'>crowdfund.me</h2>
  </div>
  <div className='w-1/4 flex justify-between items-center'>
    {Navlist.map((item,index)=>(
      <Link to={item.path} key={index} className='text-white text-sm'>{item.link}</Link>
    ))}

  </div>
</nav>  
)
}

export default Navbar