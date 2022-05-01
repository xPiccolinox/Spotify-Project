import { useState, useEffect } from 'react'
import './Player.css'
import db from './../data/db.json'
import SongInfo from './SongInfo/SongInfo'
import SongButtons from './SongButtons/SongButtons'
import SongBar from './SongBar/SongBar'
import SongButtonsRight from './SongButtonsRight/SongButtonsRight'

const Player = () => {
  const [song, setSong] = useState(0)
    const [shuffled, setShuffled] = useState(false)
    const [paused, setPaused] = useState(true)
    const [repeated, setRepeated] = useState(0)
    let audioPlayer = document.getElementById('audioPlayer')
    
    useEffect(() => {
      audioPlayer = document.getElementById('audioPlayer')
      !paused ? audioPlayer.play() : audioPlayer.pause()      
      audioPlayer.onended = () => {
        if (repeated == 2) {
          audioPlayer.currentTime = 0
          audioPlayer.play()
        }
        else nextSong()
      }
    })
    const shuffle = () => {
      setShuffled(!shuffled)
    }
    const previousSong = () => {
      if (audioPlayer.currentTime >= 4) {
        audioPlayer.currentTime = 0
      }
      else {
        setSong(song - 1)
        setPaused(false)
        if (song <= 0) setSong(db.songs.length - 1)
        document.getElementById('audioPlayer').load()
      }
    }
    const pause = () => {
      setPaused(!paused)
      paused ? audioPlayer.play() : audioPlayer.pause()
    }
    const nextSong = () => {
      setSong(song + 1)
      setPaused(false)
      if (song >= db.songs.length - 1) {
        setSong(0)
        if (repeated == 0) setPaused(true)
      }
      document.getElementById('audioPlayer').load()
    }
    const repeat = () => {
      setRepeated(repeated + 1)
      if (repeated >= 2) setRepeated(0)    
    }

  return(
    <div className="player">
      <SongInfo song={song} />
      <SongButtons  shuffle={shuffle} previousSong={previousSong} pause={pause} nextSong={nextSong} repeat={repeat} props={[shuffled, paused, repeated]} />
      <SongBar song={song} />
      <SongButtonsRight />
    </div>
  )
}

export default Player