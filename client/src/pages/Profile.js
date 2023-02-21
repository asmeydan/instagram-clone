import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import { useSelector } from "react-redux";
import { RiSettings3Fill } from "react-icons/ri";
import UserPosts from "../components/UserPosts";
import { userPosts } from "../axios";
import FollowersModal from "../components/FollowersModal"
import FollowingModal from "../components/FollowingModal"

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [profileType, setProfileType] = useState("GÖNDERİLER");
  const [posts, setPosts] = useState([]);
  const [ isFollowersModal, setIsFollowersModal] = useState(false)
  const [ isFollowingModal, setIsFollowingModal] = useState(false)

  useEffect(()=> {
    userPosts({username: user?.username}).then((res)=> setPosts(res.data)).catch((err)=> console.log(err))
  }, [user])

  return (
    <div className=" bg-zinc-900 min-h-screen md:pl-[70px] ">
      <ProfileHeader />

      <div className=" h-[125px] md:h-[180px] md:pt-[30px] px-4 pt-4 pb-6 flex gap-6 md:gap-16 items-center">
        <div className=" w-[77px] h-[77px] md:w-[150px] md:h-[150px] bg-blue-400 rounded-full flex justify-center items-center ">
          foto
        </div>
        <div className=" flex flex-col justify-around h-full">
          <div className=" flex flex-col md:flex-row justify-center gap-4">
            <div className=" flex items-center gap-2 text-white">
              {user?.username}
              <RiSettings3Fill />
            </div>
            <div>
              <button className=" hidden sm:block w-[250px] h-8 px-4 bg-white rounded-lg font-medium ">
                Profili düzenle
              </button>
            </div>
          </div>
          <div className=" text-white hidden md:flex md:gap-10">
            <span>{posts.length} gönderi</span> <span className=" cursor-pointer" onClick={()=> setIsFollowersModal(true)}>{user?.followers.length} takipçi</span> <span className=" cursor-pointer" onClick={()=> setIsFollowingModal(true)}>{user?.following.length} takip</span>
          </div>
          <div className=" text-white hidden md:block ">{user?.fullname}</div>
        </div>
      </div>

      <div className=" text-white pl-4 pb-[21px] border-b border-zinc-700 md:hidden ">
        {user?.fullname}
      </div>

      <div className=" text-white pb-[21px] border-b border-zinc-700 md:hidden h-[60px] w-full flex justify-around items-center py-3 ">
        <div className=" flex items-center justify-center flex-col">
          <div className=" font-medium">{posts.length}</div>gönderi
        </div>
        <div className=" flex items-center justify-center flex-col cursor-pointer" onClick={()=> setIsFollowersModal(true)}>
          <div className=" font-medium">{user?.followers.length}</div>takipçi
        </div>
        <div className=" flex items-center justify-center flex-col cursor-pointer" onClick={()=> setIsFollowingModal(true)}>
          <div className=" font-medium">{user?.following.length}</div>takip
        </div>
      </div>

      <span className=" hidden md:block h-px bg-zinc-700 w-full mt-10 "></span>

      <UserPosts posts={posts} profileType={profileType} setProfileType={setProfileType} />

      <Navbar />

      { isFollowersModal && <FollowersModal userFollowers={user?.followers} setIsFollowersModal={setIsFollowersModal} />}
      { isFollowingModal && <FollowingModal userFollowing={user?.following} setIsFollowingModal={setIsFollowingModal} />}
    </div>
  );
};

export default Profile;
