import React from "react";


export default function SongCard(props:any) {

    return (
        <>
        <div className="" >
            <div className="bg-blue-200 border-" id="bar">
                <h3>{props.song.master_metadata_track_name}</h3>
                <p>{props.song.master_metadata_album_artist_name}<span>00:00</span></p>
                <img></img>
            </div>
        </div>
        </>
    )       
    }
