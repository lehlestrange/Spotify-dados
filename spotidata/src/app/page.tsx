"use client"
import Head from 'next/head'
import { useEffect, useState } from "react";
import GetPlays from './components/getPlays';
import GetMinutes from './components/getMinutes';

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

  return (
        <>
        <h2>You've listened to a total of...</h2>
        <GetPlays songs={songs} />
        <GetMinutes songs={songs} />
        </>
        /*Coragem!! Vocês conseguem - Francisco */
  )
}

