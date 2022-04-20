import { useState } from 'react'
import './SongSideButtons.css'

const SongSideButtons = () => {
  const onChangeHandle = (e) => {
    const targetPercent = e.target.value / e.target.max * 100
    document.getElementById('songVolumeThumb').style.marginLeft = 'calc(' + targetPercent + '% - ' + targetPercent * 10 / 100 + 'px)'
  }

  const [queued, setQueued] = useState(false)
  const queue = `icons/player/icon_queue_${queued}.png`
  const queueChange = () => {
    setQueued(!queued)
  }

  const [fullscreened, setFullscreened] = useState(false)
  const fullscreen = `icons/player/icon_fullscreen_${fullscreened}.png`
  const fullscreenChange = () => {
    setFullscreened(!fullscreened)
  }

  return (
    <div className="songSideButtons">
      <img id="songQueue" onClick={queueChange} src={queue} />
      <img id="songVolume" src="icons/player/icon_volume_3.png" />
      <div id="songVolumeBar">
        <input id="songVolumeProgress" type="range" min="0" max="300" onChange={onChangeHandle} />
        <div id="songVolumeOverlay" />
        <div id="songVolumeThumb" />
      </div>
      <img id="songFullscreen" onClick={fullscreenChange} src={fullscreen} />
    </div>
  )
}

export default SongSideButtons