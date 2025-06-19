import React from "react"

export default function UserPage(props:any){
    
    
    return (
        <>
        
        <div id="banner" className="bg-linear-65 from-purple-500 to-yellow-400 h-30 pt-10">
            <div id="pfp" className="border-solid border-teal-50 border-4 bg-yellow-400 h-40 w-40 rounded-full">
                <h2 className="p-10 text-8xl text-slate-800 rotate-100"> :) </h2>
                <h1 className="pt-0 pl-40 text-4xl text-slate-800">Username</h1>
                <p className="pt-15 pl-40 text-xl text-slate-800">Here you can write your bio...</p>
            </div>
        </div>
        
        </>
    )
}