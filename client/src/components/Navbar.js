import React from "react";
import { AiFillHome } from 'react-icons/ai';
import { MdExplore, MdOutlineAddBox } from 'react-icons/md';
import { BiMoviePlay } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';
import { FaTelegramPlane, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { openModal } from "../store/reducers/modal"
import { logoutState } from "../store/reducers/user"

const Navbar = () => {
  const dispatch = useDispatch()
  
  return (
    <div className=" h-[50px] w-full bg-black text-white fixed bottom-0 flex justify-center md:flex-col md:left-0  md:w-[70px] md:h-full md:px-3 gap-40 md:py-5 text-2xl border-t border-zinc-700 md:border-r md:border-zinc-700">
      <div className=" flex justify-evenly w-full md:flex-col flex-1 items-center">
        <Link to="/" ><AiFillHome /></Link>
        <Link to="/" ><MdExplore /></Link>
        <Link to="/" ><BiMoviePlay /></Link>
        <div className=" cursor-pointer" onClick={()=> dispatch(openModal())}><MdOutlineAddBox /></div>
        <Link to="/"><FaTelegramPlane /></Link>
        <Link to="/profile"><FaUser /></Link>
        <div className=" bg-red-600/60 rounded-full cursor-pointer" onClick={()=> {
          dispatch(logoutState())
          window.location = "/"
        }}><RiCloseLine /></div>
      </div>
      <div className=" hidden md:block">
        <div className=" h-6 w-6 relative">
          <span className=" w-full h-1 bg-zinc-200 absolute top-0 rounded-lg" />
          <span className=" w-full h-1 bg-zinc-200 absolute top-2 rounded-lg" />
          <span className=" w-full h-1 bg-zinc-200 absolute top-4 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
