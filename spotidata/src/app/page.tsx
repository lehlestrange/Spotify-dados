// pages/index.js
import Head from 'next/head'
import { useEffect, useState } from "react";
import Order from './order';

function app() {
    return <div style ={{
        backgroundImag: url("welcomePage.png")
    }}>

const map_songs= new Map();

type spotifySong= {
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


export default function Home(props) {

  
  //create useState for song

  const [Song, setSong] = useState<spotifySong[]>([])

  useEffect(() => {
    fetch('history.json')
    .then(response => response.json())
    .then ((json) => setSong(json))
  }, [])
 
  return (
    
  )
}
