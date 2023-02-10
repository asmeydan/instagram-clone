import React from 'react'

const ProfilePosts = ({ profileType, setProfileType }) => {
  return (
    <div className=' flex flex-col items-center justify-center text-white'>
        <div className=' flex gap-[60px] '>
            <div className={` h-[50px] flex justify-center items-center cursor-pointer ${profileType === "GÖNDERİLER" && " border-t border-white"}`} onClick={()=>setProfileType("GÖNDERİLER")}>GÖNDERİLER</div>
            <div className={` h-[50px] flex justify-center items-center cursor-pointer ${profileType === "KAYDEDİLENLER" && " border-t border-white"}`} onClick={()=>setProfileType("KAYDEDİLENLER")}>KAYDEDİLENLER</div>
            <div className={` h-[50px] flex justify-center items-center cursor-pointer ${profileType === "ETİKETLENENLER" && " border-t border-white"}`} onClick={()=>setProfileType("ETİKETLENENLER")}>ETİKETLENENLER</div>
        </div>

        {profileType === "GÖNDERİLER" && <div className={`min-h-[300px] w-full flex justify-center items-center`}>
            gönderiler
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