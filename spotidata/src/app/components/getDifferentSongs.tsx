import React from 'react';

export default function GetMinutes(props: any, )  {
    let counter= 0;
    let diffSongs = [...new Set(props.songs.map((song:any) => song.master_metadata_track_name && song.master_metadata_album_artist_name))];
   for (let i = 0; i < diffSongs.length; i++) {
    counter += 1;
}
return (
    <div>
        <p className="text-3xl font-light ml-44">{counter} songs</p>
    </div>
);
}