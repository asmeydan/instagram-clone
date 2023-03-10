import React from 'react'
import { useNavigate } from "react-router-dom";

const ProfilePosts = ({ profileType, setProfileType, posts }) => {
    const navigate = useNavigate();

  return (
    <div className=' flex flex-col items-center justify-center text-white'>
        <div className=' flex gap-[60px] max-w-full overflow-x-auto '>
            <div className={` h-[50px] flex justify-center items-center cursor-pointer ${profileType === "GÖNDERİLER" && " border-t border-white"}`} onClick={()=>setProfileType("GÖNDERİLER")}>GÖNDERİLER</div>
            <div className={` h-[50px] flex justify-center items-center cursor-pointer ${profileType === "KAYDEDİLENLER" && " border-t border-white"}`} onClick={()=>setProfileType("KAYDEDİLENLER")}>KAYDEDİLENLER</div>
            <div className={` h-[50px] flex justify-center items-center cursor-pointer ${profileType === "ETİKETLENENLER" && " border-t border-white"}`} onClick={()=>setProfileType("ETİKETLENENLER")}>ETİKETLENENLER</div>
        </div>

        {profileType === "GÖNDERİLER" && <div className={`min-h-[300px] w-full grid grid-cols-3 md:p-5 gap-1 md:gap-5 pb-20`}>
            {
                posts.filter(()=> {return 1}).reverse().map((e)=> (
                    <div key={e._id} onClick={()=> navigate(`/post/${e._id}`)} className="transition-all bg-black rounded hover:brightness-50 cursor-pointer flex justify-center items-center">
                        <img src={e.image} alt="img" />
                    </div>
                ))
            }
        </div>}
        {profileType === "KAYDEDİLENLER" && <div className={`min-h-[300px] w-full flex justify-center items-center`}>
            kaydedilenler
        </div>}
        {profileType === "ETİKETLENENLER" && <div className={`min-h-[300px] w-full flex justify-center items-center`}>
            etiketlenenler
        </div>}
    </div>
  )
}

export default ProfilePosts