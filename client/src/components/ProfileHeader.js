import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { RiSettings3Fill } from 'react-icons/ri'
import { BsChevronDown } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const ProfileHeader = () => {
    const { user } = useSelector((state) => state.user)
    
  return (
    <div className=' h-[44px] w-full bg-zinc-900 text-white border-b border-zinc-700 px-4 flex justify-between items-center md:hidden'>
      <div className=' text-2xl font-semibold'>
        <RiSettings3Fill />
      </div>
      <div className=' flex items-center gap-2 font-semibold'>
        {user?.username}
        <BsChevronDown />
      </div>
      <div className=' flex justify-center items-center gap-4'>
        <AiOutlineUserAdd size={25} />
      </div>
    </div>
  )
}

export default ProfileHeader