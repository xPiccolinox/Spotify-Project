import { useState } from 'react'
import './SongButtons.css'

const SongButtons = ({ shuffle, previousSong, pause, nextSong, repeat, props }) => {

  const songShuffle = `./icons/player/icon_shuffled_${props[0]}.png`
  const songPause = `./icons/player/icon_paused_${props[1]}.png`
  const songRepeat = `./icons/player/icon_repeated_${props[2]}.png`

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