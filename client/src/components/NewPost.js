import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../store/reducers/modal';
import { addPost } from "../axios";
import { useNavigate } from "react-router-dom";


const NewPost = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const [postData, setPostData] = useState({
    image: "",
    description: ""
  })
  const navigate = useNavigate();
  
  return (
    <div className=' fixed top-0 bottom-0 right-0 left-0 bg-white/20 flex justify-center items-center text-white '>
        <div className=' w-[348px] h-[390px] bg-zinc-800 opacity-100 rounded-2xl overflow-hidden'>
            <div className=' h-[42px] w-full flex justify-center items-center border-b border-zinc-600 font-medium '>
                Yeni gönderi oluştur
            </div>
            <form className='h-full flex flex-col justify-center items-center gap-4 ' onSubmit={(e)=> {
              addPost({...postData, username: user.username}).then((res)=> {
                dispatch(closeModal())
                navigate("/")
              }).catch((err)=>{console.log(err)})
              e.preventDefault()
            }}>
              <input type="text" placeholder='resim' className='px-4 py-1 rounded-lg bg-zinc-600 placeholder-white' onChange={(e)=> {setPostData({...postData, image: e.target.value})}} />
              <input type="text" placeholder='açıklama' className='px-4 py-1 rounded-lg bg-zinc-600 placeholder-white' onChange={(e)=> {setPostData({...postData, description: e.target.value})}} />
              <button className='bg-white px-4 py-1 text-black rounded-lg font-medium' type='submit'>Paylaş</button>
            </form>
        </div>
        <div onClick={()=> dispatch(closeModal())} className=' w-[34px] h-[34px] fixed right-4 top-4 text-2xl rounded-full backdrop-opacity-60 backdrop-invert bg-white/30 flex justify-center items-center cursor-pointer '>
          <GrClose className=' text-white ' />
        </div>
    </div>
  )
}

export default NewPost