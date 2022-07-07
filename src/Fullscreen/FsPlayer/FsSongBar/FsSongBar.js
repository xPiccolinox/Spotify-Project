import './FsSongBar.css'
import { useState } from 'react'
import db from '../../../data/db.json'

const FsSongBar = (props) => {
  const [audioPlayerDuration, setAudioPlayerDuration] = useState(0)
  const [audioPlayerCurrentTime, setAudioPlayerCurrentTime] = useState(0)
  const [songRangeProgressStill, setSongRangeProgressStill] = useState(false)
  const audio = `/songs/${props.song}.mp3`
  let songCurrentTime = '0:00'
  let songDurationTime = '0:00'
  let thumbPosition

  const onChangeHandle = () => {
    let audioPlayer = document.getElementById('audioPlayer')
    document.getElementById('fsSongRangeProgress').addEventListener('mousedown', () => {
      setSongRangeProgressStill(true)
    })
    document.getElementById('fsSongRangeProgress').addEventListener('mouseup', () => {
      setSongRangeProgressStill(false)
      audioPlayer.currentTime = document.getElementById('fsSongRangeProgress').value
    })
    thumbPosition = document.getElementById('fsSongRangeProgress').value / document.getElementById('fsSongRangeProgress').max * 100
    document.getElementById('fsSongRangeThumb').style.marginLeft = 'calc(' + thumbPosition + '% - ' + thumbPosition * 10 / 100 + 'px)'
    setAudioPlayerCurrentTime(document.getElementById('fsSongRangeProgress').value)
  }

  return(
    <div id="fsSongBar">
        <div id="fsSongCurrentTime">{songCurrentTime}</div>
        <div id="fsSongRange">
          <input id="fsSongRangeProgress" type="range" min="0" max={audioPlayerDuration} onChange={onChangeHandle} />
          <div id="fsSongRangeOverlay" />
          <div id="fsSongRangeThumb" />
        </div>
        <div id="fsSongDurationTime">{songDurationTime}</div>
    </div>
  )
}

export default FsSongBar