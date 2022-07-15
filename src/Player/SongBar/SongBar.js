import { useState, useEffect } from 'react'
import './SongBar.css'

const SongBar = (props) => {
  const [songRangeInputValue, setSongRangeInputValue] = useState(0)
  let songCurrentTime = '0:00'
  let songDurationTime = '0:00'

  if (Math.floor(songRangeInputValue % 60) < 10) songCurrentTime = `${Math.floor(songRangeInputValue / 60)}:0${Math.floor(songRangeInputValue % 60)}`
  else songCurrentTime = `${Math.floor(songRangeInputValue / 60)}:${Math.floor(songRangeInputValue % 60)}`
  if (Math.floor(props.audioPlayerDuration % 60) < 10) songDurationTime = `${Math.floor(props.audioPlayerDuration / 60)}:0${Math.floor(props.audioPlayerDuration % 60)}`
  else songDurationTime = `${Math.floor(props.audioPlayerDuration / 60)}:${Math.floor(props.audioPlayerDuration % 60)}`

  useEffect(() => {
    if (props.songRangeProgressStill == false) {
      document.getElementById('songRangeInput').value = props.audioPlayerCurrentTime
      document.getElementById('songRangeProgress').style.right = `${100 - props.audioPlayerCurrentTime / props.audioPlayerDuration * 100}%`
      document.getElementById('songRangeThumb').style.right = `${100 - props.audioPlayerCurrentTime / props.audioPlayerDuration * 100}%`
      setSongRangeInputValue(props.audioPlayerCurrentTime)
    }
  }, [props.audioPlayerCurrentTime])

  const onChangeHandle = (e) => {
    document.getElementById('songRangeProgress').style.right = `${100 - e.target.value / props.audioPlayerDuration * 100}%`
    document.getElementById('songRangeThumb').style.right = `${100 - e.target.value / props.audioPlayerDuration * 100}%`
    setSongRangeInputValue(e.target.value)
  }

  return (
    <div id="songBar">
        <div id="songCurrentTime">{songCurrentTime}</div>
        <div id="songRange">
          <input id="songRangeInput" type="range" min="0" max={props.audioPlayerDuration} onChange={onChangeHandle} onMouseDown={props.onMouseDownSongBarsHandle} onMouseUp={props.onMouseUpSongBarsHandle} />
          <div id="songRangeOverlay">
            <div id="songRangeProgress" />
          </div>
          <div id="songRangeThumb" />
        </div>
        <div id="songDurationTime">{songDurationTime}</div>
    </div>
  )
}

export default SongBar