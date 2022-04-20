import { useState } from 'react'
import './Player.css'
import db from './../data/db.json'
import SongInfo from './SongInfo/SongInfo'
import SongButtons from './SongButtons/SongButtons'
import SongBar from './SongBar/SongBar'
import SongSideButtons from './SongSideButtons/SongSideButtons'

const Player = () => {
  const [song, setSong] = useState(1)

  const nextSong = () => {
    setSong(song + 1)
    if (song >= db.songs.length - 1) setSong(0)
    document.getElementById('audioPlayer').load()
  }
  const previousSong = () => {
    setSong(song - 1)
    if (song <= 0) setSong(db.songs.length - 1)
    document.getElementById('audioPlayer').load()
  }

  return(
    <div className="player">
      <SongInfo song={ song } />
      <SongButtons nextSong={ nextSong } previousSong={ previousSong } />
      <SongBar song={ song } />
      <SongSideButtons />
    </div>
  )
}

export default Player