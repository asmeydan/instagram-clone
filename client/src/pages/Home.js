import React, { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { allPosts } from "../axios";
import { allPostsState } from "../store/reducers/post";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    allPosts().then((res) => dispatch(allPostsState(res.data)));
  }, [dispatch]);

  return (
    <div className=" bg-black min-h-screen md:pl-[70px] flex flex-col items-center text-white">
      <Header />

      {posts.filter((e)=> {
        return (user?.following.includes(e.username) || e.username === user?.username)
      }).reverse().map((e) => (
        <div
          key={e._id}
          className=" w-full flex flex-col items-center md:w-[460px] border-b border-zinc-700 pb-5 mb-5"
        >
          <div className=" h-12 w-full px-4 md:px-0 flex gap-4 items-center">
            <div className=" w-8 h-8 rounded-full bg-sky-600 flex justify-center items-center cursor-pointer" onClick={() => (navigate(`/user/${e.username}`))}>
              {e.username[0]}
            </div>
            <div onClick={() => (navigate(`/user/${e.username}`))} className="cursor-pointer">{e.username}</div>
          </div>

          <img alt="img" src={e.image} className=" w-full" />

          <div className=" w-full px-4 py-2 md:px-0">
            <div className=" flex justify-between w-full">
              <div className=" flex gap-3">
                <AiOutlineHeart size={30} />
                <FaRegComment size={30} />
                <FaRegPaperPlane size={30} />
              </div>
              <BsBookmark size={30} />
            </div>

            <div className=" pt-2 font-bold">
              {e.likes.length} beğenme
            </div>

            <div >
              <span className=" font-bold cursor-pointer" onClick={() => (navigate(`/user/${e.username}`))}>{e.username}</span> {e.description}
            </div>

            <div className=" text-zinc-400 mt-10 cursor-pointer" onClick={()=> navigate(`/post/${e._id}`)}>
              {e.comments.length} yorumun tümünü gör
            </div>
            
          </div>
        </div>
      ))}

      <Navbar />
    </div>
  );
};

export default Home;
