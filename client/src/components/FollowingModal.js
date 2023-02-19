import React from "react";
import { useNavigate } from "react-router-dom";
import { CgClose } from 'react-icons/cg';

const FollowingModal = ({ userFollowing, setIsFollowingModal}) => {
  const navigate = useNavigate()
  
  return (
    <div className=" fixed top-0 left-0 h-screen w-screen bg-black/50 text-white flex justify-center items-center">
      <div className=" w-[300px] h-[440px] bg-zinc-800 rounded-xl md:w-[440px] overflow-hidden  ">
        <div className=" h-10 flex justify-between items-center border-b border-zinc-700 px-4 ">
          <div></div>
          Takip Ettikleri
          <div onClick={()=>setIsFollowingModal(false)} className=" cursor-pointer">
            <CgClose size={25} />
          </div>
        </div>

        <div className="h-[400px] overflow-y-auto">
          {userFollowing.map((e) => (
            <div
              key={e}
              className=" w-full flex justify-between items-center h-[60px] px-4"
            >
              <div className=" flex items-center gap-3 cursor-pointer" onClick={() => navigate(`/user/${e}`)}>
                <div
                  className=" w-10 h-10 rounded-full bg-sky-600 flex justify-center items-center " >
                  {e[0]}
                </div>
                {e}
              </div>
              <button className="w-16 h-8 bg-white text-black rounded-lg">
                Çıkar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FollowingModal