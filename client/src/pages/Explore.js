import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { allPosts } from '../axios'
import { allPostsState } from '../store/reducers/post'

const Explore = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch()

  useEffect(()=> {
    allPosts().then((res)=> dispatch(allPostsState(res.data)))
  }, [dispatch])

  return (
    <div className=" min-h-screen bg-zinc-900 md:pl-[70px] pt-8 text-white">
      <div>
        <input type="text" className=" w-full h-10 rounded-lg px-4 bg-zinc-700" placeholder="Ara" />
      </div>
      <div className=" grid grid-cols-3 pt-10 md:p-10 md:gap-5">
        {posts.map((e) => (
          <div key={e._id} onClick={()=> window.location = `/post/${e._id}`} className=" transition-all bg-black rounded hover:brightness-50 cursor-pointer flex justify-center items-center">
            <img src={e.image} alt="img" />
          </div>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Explore;
