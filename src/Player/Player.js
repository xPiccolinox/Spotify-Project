import { useState } from 'react'
import './Player.css'
import SongInfo from './SongInfo/SongInfo'
import SongAudio from './SongAudio/SongAudio'

const Player = () => {
  const [song, setSong] = useState(1)

  const changeSong = () => {
    setSong(song + 1)
    if (song >= 2) setSong(0)
    document.getElementById('audioPlayer').load()
  }

  return(
    <div className="player">
      <SongInfo changeSong={ changeSong } song={ song } />
      <SongAudio song={ song } />
    </div>
  )
}

export default Player