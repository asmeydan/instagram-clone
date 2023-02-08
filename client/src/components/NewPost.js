import React from 'react'
import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/reducers/modal';


const NewPost = () => {
  const dispatch = useDispatch()
  
  return (
    <div className=' fixed top-0 bottom-0 right-0 left-0 bg-white/20 flex justify-center items-center text-white '>
        <div className=' w-[348px] h-[390px] bg-zinc-800 opacity-100 rounded-2xl'>
            <div className=' h-[42px] w-full flex justify-center items-center border-b border-zinc-600 font-medium '>
                Yeni gönderi oluştur
            </div>
        </div>
        <div onClick={()=> dispatch(closeModal())} className=' w-[34px] h-[34px] fixed right-4 top-4 text-2xl rounded-full backdrop-opacity-60 backdrop-invert bg-white/30 flex justify-center items-center cursor-pointer '>
          <GrClose className=' text-white ' />
        </div>
    </div>
  )
}

export default NewPost