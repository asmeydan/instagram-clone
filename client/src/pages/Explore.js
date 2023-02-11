import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const Explore = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className=" min-h-screen bg-zinc-900 md:pl-[70px] pt-8 text-white">
      <div>
        <input type="text" className=" w-full h-10 rounded-lg px-4 bg-zinc-700" placeholder="Ara" />
      </div>
      <div className=" grid grid-cols-3 pt-10 md:p-10 md:gap-5">
        {posts.map((e) => (
          <div key={e._id} className=" transition-all bg-black rounded hover:brightness-50 cursor-pointer flex justify-center items-center">
            <img src={e.image} alt="img" />
          </div>
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Explore;
