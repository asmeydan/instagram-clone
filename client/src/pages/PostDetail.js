import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetailFetch } from "../axios";
import { MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { _id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    postDetailFetch({ _id: _id })
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [_id]);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white md:pl-[100px] md:pr-5 pb-20">
      <div className=" h-11 w-full flex justify-between items-center px-4">
        <div>
          <MdArrowBackIosNew size={25} />
        </div>
        <h1>Fotoğraf</h1>
        <div></div>
      </div>

      <div className=" w-full bg-zinc-900 md:hidden">
        <div className=" h-[60px] wffull flex px-4 items-center gap-3">
          <div
            onClick={() => (navigate(`/user/${post?.username}`))}
            className=" w-[42px] h-[42px] overflow-hidden bg-blue-500 rounded-full flex items-center justify-center cursor-pointer "
          >
            {post?.username[0]}
          </div>
          <div
            onClick={() => (navigate(`/user/${post?.username}`))}
            className=" cursor-pointer"
          >
            {post?.username}
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col md:flex-row md:border md:border-zinc-700">
        <img alt="img" src={`${post?.image}`} className=" md:flex-1 md:w-1/3" />

        <div className=" flex flex-col gap-2  px-4 py-2 md:w-[330px]">
          
          <div className=" hidden h-[60px] wffull md:flex items-center gap-3 border-b border-zinc-700 w-full">
            <div
              onClick={() => (navigate(`/user/${post?.username}`))}
              className=" w-[42px] h-[42px] overflow-hidden bg-blue-500 rounded-full flex items-center justify-center cursor-pointer "
            >
              {post?.username[0]}
            </div>
            <div
              onClick={() => (navigate(`/user/${post?.username}`))}
              className=" cursor-pointer"
            >
              {post?.username}
            </div>
          </div>

          <div className=" hidden md:block flex-1 overflow-y-auto border-b border-zinc-700">
            yorumlar
          </div>

          <div className=" flex justify-between">
            <div className=" flex gap-3">
              <AiOutlineHeart size={30} />
              <FaRegComment size={30} />
              <FaRegPaperPlane size={30} />
            </div>
            <BsBookmark size={30} />
          </div>

          <div className=" mt-2">{post?.likes.length} beğenme</div>

          <div className=" hidden h-10 p-1 md:flex items-center border-t border-zinc-700">
            Yorum ekle
          </div>
          
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default PostDetail;
