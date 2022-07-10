import { useState, useEffect } from 'react'
import './SongBar.css'
import db from '../../data/db.json'

const SongBar = (props) => {
  const song = db.songs[props.song].id
  let songCurrentTime = '0:00'
  let songDurationTime = '0:00'
  let thumbPosition

  if (Math.floor(props.audioPlayerCurrentTime % 60) < 10) songCurrentTime = `${Math.floor(props.audioPlayerCurrentTime / 60)}:0${Math.floor(props.audioPlayerCurrentTime % 60)}`
  else songCurrentTime = `${Math.floor(props.audioPlayerCurrentTime / 60)}:${Math.floor(props.audioPlayerCurrentTime % 60)}`
  if (Math.floor(props.audioPlayerDuration % 60) < 10) songDurationTime = `${Math.floor(props.audioPlayerDuration / 60)}:0${Math.floor(props.audioPlayerDuration % 60)}`
  else songDurationTime = `${Math.floor(props.audioPlayerDuration / 60)}:${Math.floor(props.audioPlayerDuration % 60)}`

  useEffect(() => {
    let audioPlayer = document.getElementById('audioPlayer')
    thumbPosition = document.getElementById('songRangeProgress').value / document.getElementById('songRangeProgress').max * 100
    document.getElementById('songRangeThumb').style.marginLeft = 'calc(' + thumbPosition + '% - ' + thumbPosition * 10 / 100 + 'px)'
    // audioPlayer.onloadedmetadata = () => {
    //   setAudioPlayerDuration(audioPlayer.duration)
    // }
    // audioPlayer.ontimeupdate = () => {
    //   if (Math.floor(audioPlayer.currentTime) !== props.audioPlayerCurrentTime && songRangeProgressStill == false) {
    //     setAudioPlayerCurrentTime(Math.floor(audioPlayer.currentTime))
    //   }
    // }
    // if (songRangeProgressStill == false) {
    //   document.getElementById('songRangeProgress').value = props.audioPlayerCurrentTime
    // }
  })

  const onChangeHandle = () => {
    // let audioPlayer = document.getElementById('audioPlayer')
    // document.getElementById('songRangeProgress').addEventListener('mousedown', () => {
    //   setSongRangeProgressStill(true)
    // })
    // document.getElementById('songRangeProgress').addEventListener('mouseup', () => {
    //   setSongRangeProgressStill(false)
    //   audioPlayer.currentTime = document.getElementById('songRangeProgress').value
    // })
    // thumbPosition = document.getElementById('songRangeProgress').value / document.getElementById('songRangeProgress').max * 100
    // document.getElementById('songRangeThumb').style.marginLeft = 'calc(' + thumbPosition + '% - ' + thumbPosition * 10 / 100 + 'px)'
    // setAudioPlayerCurrentTime(document.getElementById('songRangeProgress').value)
  }


  return (
    <div className="songBar">
      <div className="songTime">
        <div id="songCurrentTime">{songCurrentTime}</div>
        <div id="songRange">
          <input id="songRangeProgress" type="range" min="0" max={props.audioPlayerDuration} onChange={onChangeHandle} onMouseDown={props.onMouseDownSongBarsHandle} onMouseUp={props.onMouseUpSongBarsHandle}/>
          <div id="songRangeOverlay" />
          <div id="songRangeThumb" />
        </div>
        <div id="songDurationTime">{songDurationTime}</div>
      </div>
    </div>
  )

  
}

export default SongBar