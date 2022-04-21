import { useState, useEffect } from 'react'
import './SongButtonsRight.css'

const SongButtonsRight = () => {
  const [queued, setQueued] = useState(false)
  const [volume, setVolume] = useState(2)
  const [fullscreened, setFullscreened] = useState(false)
  const volumeIcon = `icons/player/icon_volume_${volume}.png`
  let audioPlayer = document.getElementById('audioPlayer')
  let thumbPosition
  
  useEffect(() => {
    thumbPosition = document.getElementById('songVolumeProgress').value / document.getElementById('songVolumeProgress').max * 100
    document.getElementById('songVolumeThumb').style.marginLeft = 'calc(' + thumbPosition + '% - ' + thumbPosition * 10 / 100 + 'px)'
    audioPlayer = document.getElementById('audioPlayer')
    audioPlayer.volume = thumbPosition / 300
  })

  const volumeChange = () => {
    thumbPosition = document.getElementById('songVolumeProgress').value / document.getElementById('songVolumeProgress').max * 100
    document.getElementById('songVolumeThumb').style.marginLeft = 'calc(' + thumbPosition + '% - ' + thumbPosition * 10 / 100 + 'px)'
    audioPlayer.volume = thumbPosition / 300
    if (thumbPosition > 66) setVolume(3)
    else if (thumbPosition > 33) setVolume(2)
    else if (thumbPosition > 0) setVolume(1)
    else if (thumbPosition === 0) setVolume(0)
  }

  const queue = `icons/player/icon_queue_${queued}.png`
  const queueChange = () => {
    setQueued(!queued)
  }
  const fullscreen = `icons/player/icon_fullscreen_${fullscreened}.png`
  const fullscreenChange = () => {
    setFullscreened(!fullscreened)
  }

  return (
    <div className="songButtonsRight">
      <img id="songQueue" onClick={queueChange} src={queue} />
      <img id="songVolume" src={volumeIcon} />
      <div id="songVolumeBar">
        <input id="songVolumeProgress" type="range" min="0" max="100"  onChange={volumeChange} />
        <div id="songVolumeOverlay" />
        <div id="songVolumeThumb" />
      </div>
      <img id="songFullscreen" onClick={fullscreenChange} src={fullscreen} />
    </div>
  )
}

export default SongButtonsRight