import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Navbar = () => {
  return (
    <div className='p-5 md:p-10 flex justify-between'>
      <div className="flex items-center gap-3">
        <Image src={logo} width={40} height={40} className='object-contain' alt='logo' />
        <h1 className='font-light text-3xl'>Short-ly</h1>
      </div>
    </div>
  )
}

export default Navbar