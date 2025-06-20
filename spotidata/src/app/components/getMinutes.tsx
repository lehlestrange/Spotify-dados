import React from 'react';

export default function GetMinutes(props: any) {
    let counter = 0;
    for (let i = 0; i < props.songs.length; i++) {
        counter += props.songs[i].ms_played;
    }   
        counter = Math.floor(counter/ 60000)
    return (
        <div>
            <p className="text-3xl font-medium ml-100 text-blue-300">{counter} minutes</p>
        </div>
    );
}