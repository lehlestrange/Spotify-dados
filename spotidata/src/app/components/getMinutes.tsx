import React from 'react';

export default function GetMinutes(props: any) {
    let counter = 0;
    for (let i = 0; i < props.songs.length; i++) {
        counter += props.songs[i].ms_played;
    }   
        counter = Math.floor(counter/ 60000);
    return (
        <div>
            <p>{counter} minutes</p>
        </div>
    );
}