import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const Header = () => {
  return (
    <div className=' h-[60px] w-full bg-black text-white border-b border-zinc-700 px-4 flex justify-between items-center md:hidden'>
      <div className=' text-2xl font-semibold'>
        Instagram
      </div>
      <div className=' hidden sm:flex justify-center items-center gap-4'>
        <input type="text" className=' bg-zinc-700 rounded-md h-9 w-[270px] px-4' placeholder='Ara' />
        <div className=' text-3xl'>
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  )
}

export default Header