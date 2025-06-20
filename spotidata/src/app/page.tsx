"use client"
import { useEffect, useState } from "react";
import GetMinutes from './components/getMinutes';
import GetDifferentSongs from './components/getDifferentSongs';
import SongCard from './components/songCard';
import UserPage from './components/userPage';
import { Start } from './components/buttonFill';
import GetPlays from "./components/getPlays";

/* COLORS 

SLATE 800
BLUE 300
YELLOW 400
PURPLE 500
TEAL 50
ROSE 300
*/




type Song = {
    _id: {
      $oid: string,
    },
    ts: string,
    ms_played: number,
    master_metadata_track_name: string,
    master_metadata_album_artist_name: string,
    master_metadata_album_album_name: string,
    episode_name: null,
    episode_show_name: null,
    reason_start: string,
    reason_end: string,
    shuffle: boolean,
    skipped: null
  }


export default function Home() {
  
                                                                  // criámos um array vazio, e uma função para modificar esse array
  const [songs, setSongs] = useState<Song[]>([]);

                                                                  // usámos o useEffect, que basicamente vai buscar (fetch) cada objeto do JSON
                                                                  // e, usando o setSongs, coloca essa musica dentro do array chamado songs
                                                                  // (Por outras palavras, colocámos cada objeto/musica dentro desse array)

  useEffect(() => {
    fetch("/history.json")
      .then((res) => res.json())
      .then((data: Song[]) => setSongs(data));
  }, []);

  console.log(songs);

  const user = {
    userName: "Carolina Olívia",
    bio: "Apaixonada por palavras, café forte e dias cinzentos. Escrevo para me encontrar e fotografo para não esquecer.",
    imgPath: "/welcomepage/ladyGagaPic.png"
  }

  return (
    //take out mt-50 to remove top
        <> 
        <div id="background" className="bg-teal-50 w-full h-full">
        <UserPage username={user.userName} bio={user.bio} imgPath={user.imgPath}/>
        <h2 className="mt-100 mb-10 ml-40 text-2xl font-medium text-slate-700">You've listened to a total of... {songs.length} songs.</h2>
       <Start desc={undefined} onStartClick={undefined}/>

        <GetPlays songs={songs} />
        <GetMinutes songs={songs} />
        <GetDifferentSongs songs={songs} />
        <SongCard/>
        </div>
        </>
        
                                                                  /*Coragem!! Vocês conseguem - Francisco */
  )
}


