import React from "react"
import Image from "next/image"

interface Props {
    username: string,
    bio: string,
    imgPath: string
}

export default function UserPage({username, bio, imgPath}: Props){
    
    
    return (
        <>
        
        <div id="banner" className="bg-linear-65 from-purple-500 to-yellow-400 h-30 pt-10">
            <div id="pfp" className="border-solid border-teal-50 border-4 bg-yellow-400 h-40 w-40 rounded-full">
                {/* <h2 className="p-10 text-8xl text-slate-800 rotate-100"> :) </h2> */}
                <Image src={imgPath} alt="test" width={100} height={100} className="h-40 w-40 rounded-full"/>
            </div>
            
            <h1 className="pt-0 pl-40 text-4xl text-slate-800">{username}</h1>
            <p className="pl-15 pt-5 w-full text-slate-800">{bio}</p>
        </div>
        
        </>
    )
}