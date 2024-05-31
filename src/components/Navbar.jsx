import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between text-white bg-slate-500' >
        <span className="font-bold text-xl mx-9">iTask</span>
      <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold'>Home</li>
        <li className='cursor-pointer hover:font-bold'>About</li>
        <li className='cursor-pointer hover:font-bold'>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
