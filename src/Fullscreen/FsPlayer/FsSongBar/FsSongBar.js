import './FsSongBar.css'
import { useState, useEffect } from 'react'
import db from '../../../data/db.json'

const FsSongBar = (props) => {
  const [songRangeInputValue, setSongRangeInputValue] = useState(0)
  let songCurrentTime = '0:00'
  let songDurationTime = '0:00'

  if (Math.floor(songRangeInputValue % 60) < 10) songCurrentTime = `${Math.floor(songRangeInputValue / 60)}:0${Math.floor(songRangeInputValue % 60)}`
  else songCurrentTime = `${Math.floor(songRangeInputValue / 60)}:${Math.floor(songRangeInputValue % 60)}`
  if (Math.floor(props.audioPlayerDuration % 60) < 10) songDurationTime = `${Math.floor(props.audioPlayerDuration / 60)}:0${Math.floor(props.audioPlayerDuration % 60)}`
  else songDurationTime = `${Math.floor(props.audioPlayerDuration / 60)}:${Math.floor(props.audioPlayerDuration % 60)}`

  useEffect(() => {
    if (props.songRangeProgressStill == false) {
      document.getElementById('fsSongRangeInput').value = props.audioPlayerCurrentTime
      document.getElementById('fsSongRangeProgress').style.right = `${100 - props.audioPlayerCurrentTime / props.audioPlayerDuration * 100}%`
      document.getElementById('fsSongRangeThumb').style.right = `${100 - props.audioPlayerCurrentTime * 100}%`
    }
  }, [props.audioPlayerCurrentTime])

  const onChangeHandle = (e) => {
    document.getElementById('fsSongRangeProgress').style.right = `${100 - e.target.value / props.audioPlayerDuration * 100}%`
    document.getElementById('fsSongRangeThumb').style.right = `${100 - e.target.value / props.audioPlayerDuration * 100}%`
    setSongRangeInputValue(e.target.value)
  }

  return(
    <div id="fsSongBar">
        <div id="fsSongCurrentTime">{songCurrentTime}</div>
        <div id="fsSongRange">
          <input id="fsSongRangeInput" type="range" min="0" max={props.audioPlayerDuration} onChange={onChangeHandle} onMouseDown={props.onMouseDownSongBarsHandle} onMouseUp={props.onMouseUpSongBarsHandle} />
          <div id="fsSongRangeOverlay">
            <div id="fsSongRangeProgress" />
          </div>
          <div id="fsSongRangeThumb" />
        </div>
        <div id="fsSongDurationTime">{songDurationTime}</div>
    </div>
  )
}

export default FsSongBar


// /* songRange */
// #fsSongRange {
//   background-color: orange;
//   /* display: flex; */
//   width: calc(90% - 160px);
//   height: 16px;
//   transform: translateY(-1px);
//   flex-shrink: 0;
// }
// /* songRangeThumb */
// #fsSongRangeThumb {
//   background-color: #ffffff;
//   position: relative;
//   float: left;
//   width: 10px;
//   height: 10px;
//   bottom: 21px;
//   margin-left: 0%;
//   border-radius: 7px;
//   filter: opacity(0);
//   transform: translateX(0%);
//   pointer-events: none;
// }
// #fsSongRangeProgress:hover ~ #fsSongRangeThumb {
//   filter: opacity(1);
// }
// /* songRangeOverlay */
// #fsSongRangeOverlay {
//   position: relative;
//   width: calc(100% - 8px);
//   height: 4px;
//   /* bottom: 10px; */
//   border-radius: 10px;
//   border: 4px solid #181818;
//   /* pointer-events: none; */
// }
// /* songRangeProgress */
// #fsSongRangeProgress {
//   position: relative;
//   float: left;
//   appearance: none;
//   background-color: #454545;
//   width: calc(100% - 4px);
//   height: 4px;
//   bottom: -2px;
//   border-width: 4px 4px 4px 0px;
//   border-style: solid;
//   border-color: #181818;
//   border-radius: 20px;
//   overflow: hidden;
// }
// #fsSongRangeProgress::-webkit-slider-thumb {
//   appearance: none;
//   background-color: #cccccc;
//   border-radius: 6px;
//   width: 4px;
//   height: 4px;
//   box-shadow: -1002px 0px 0px 1000px #cccccc
// }
// #fsSongRangeProgress:hover::-webkit-slider-thumb {
//   background-color: #1eb955;
//   box-shadow: -1002px 0px 0px 1000px #1eb955
// }



// #fsSongRange #fsSongRangeOverlay {
//   /* background-color: blue; */
//   display: flex;
//   align-items: center;
//   width: calc(100% - 4px);
//   height: 4px;
//   border-radius: 4px;
//   overflow: hidden;
// }
// #fsSongRange #fsSongRangeOverlay #fsSongRangeProgress {
//   flex-shrink: 0;
//   width: calc(100%);
//   height: 4px;
//   border-radius: 4px;
//   transform: translateX(-4px);
//   overflow: hidden;
//   box-sizing: content-box;
//   appearance: none;
// }
// #fsSongRange #fsSongRangeOverlay #fsSongRangeProgress::-webkit-slider-thumb {
//   background-color: #cccccc;
//   border-radius: 50%;
//   width: 4px;
//   height: 4px;
//   box-shadow: -1002px 0px 0px 1000px #cccccc;
//   appearance: none;
// }
// #fsSongRange #fsSongRangeOverlay #fsSongRangeProgress:hover::-webkit-slider-thumb {
//   background-color: #1eb95500;
//   box-shadow: -1002px 0px 0px 1000px #1eb955;
// }