import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleUser, userPosts } from '../axios'
import Navbar from '../components/Navbar'
import UserPosts from '../components/UserPosts'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const { username } = useParams()
  const [ userDetail, setUserDetail ] = useState(null);
  const [profileType, setProfileType] = useState("GÖNDERİLER");
  const [posts, setPosts] = useState([]);
  const [ isFollowed, setIsFollowed] = useState(false)
  const { user } = useSelector((state) => state.user)
  const navigate = useNavigate();

  useEffect(()=> {
    if(user?.username === username) {
      navigate("/profile")
    }
    singleUser({username: username}).then((res)=> setUserDetail(res.data.user)).catch((err)=> console.log(err))
  }, [username, user, navigate])

  useEffect(()=> {
    userPosts({username: username}).then((res)=> setPosts(res.data)).catch((err)=> console.log(err))
  }, [username])
  
  return (
    <div className=" bg-zinc-900 min-h-screen md:pl-[70px] ">

      <div className=" h-[125px] md:h-[180px] md:pt-[30px] px-4 pt-4 pb-6 flex gap-6 md:gap-16 items-center">
        <div className=" w-[77px] h-[77px] md:w-[150px] md:h-[150px] bg-blue-400 rounded-full flex justify-center items-center ">
          foto
        </div>
        <div className=" flex flex-col justify-around h-full">
          <div className=" flex flex-col md:flex-row justify-center gap-4">
            <div className=" flex items-center gap-2 text-white">
              {userDetail?.username}
            </div>
            <div className=' flex gap-2'>
              <button onClick={()=> setIsFollowed(!isFollowed)} className={` h-8 px-4 rounded-lg font-medium ${ isFollowed ?"bg-white text-black" : "bg-sky-600 text-white"} `}>
                {isFollowed ?"Takiptesin" :"Takip Et"}
              </button>
              <button className=" h-8 px-4 bg-white rounded-lg font-medium ">
                Mesaj Gönder
              </button>
            </div>
          </div>
          <div className=" text-white hidden md:flex md:gap-10">
            <span>{posts.length} gönderi</span> <span>0 takipçi</span> <span>0 takip</span>
          </div>
          <div className=" text-white hidden md:block ">{userDetail?.fullname}</div>
        </div>
      </div>

      <div className=" text-white pl-4 pb-[21px] border-b border-zinc-700 md:hidden ">
        {userDetail?.fullname}
      </div>

      <div className=" text-white pb-[21px] border-b border-zinc-700 md:hidden h-[60px] w-full flex justify-around items-center py-3 ">
        <div className=" flex items-center justify-center flex-col">
          <div className=" font-medium">0</div>gönderi
        </div>
        <div className=" flex items-center justify-center flex-col">
          <div className=" font-medium">0</div>takipçi
        </div>
        <div className=" flex items-center justify-center flex-col">
          <div className=" font-medium">0</div>takip
        </div>
      </div>

      <span className=" hidden md:block h-px bg-zinc-700 w-full mt-10 "></span>

      <UserPosts user={userDetail} posts={posts} profileType={profileType} setProfileType={setProfileType} />
      <Navbar />
    </div>
  )
}

export default UserDetail