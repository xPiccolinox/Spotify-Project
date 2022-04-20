import { useState } from 'react'
import './SongButtons.css'

const SongButtons = ({ nextSong, previousSong }) => {
  const [shuffled, setShuffled] = useState(false)
  const songShuffle = `./icons/player/icon_shuffled_${shuffled}.png`
  const shuffle = () => {
    setShuffled(!shuffled)
  }

  const [paused, setPaused] = useState(false)
  const songPause = `./icons/player/icon_paused_${paused}.png`
  const pause = () => {
    setPaused(!paused)    
  }

  const [repeated, setRepeated] = useState(0)
  const songRepeat = `./icons/player/icon_repeated_${repeated}.png`
  const repeat = () => {
    setRepeated(repeated + 1)
    if (repeated >= 2) setRepeated(0)    
  }

  return (
    <div className="songButtons">
      <img id="songShuffle" onClick={shuffle} src={songShuffle}></img>
      <img id="songPrevious" onClick={previousSong} src="./icons/player/icon_previousSong.png"></img>
      <img id="songPause" onClick={pause} src={songPause}></img>
      <img id="songNext" onClick={nextSong} src="./icons/player/icon_nextSong.png"></img>
      <img id="songRepeat" onClick={repeat} src={songRepeat}></img>
    </div>
  )
}

export default SongButtons