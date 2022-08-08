import './SongButtonsRight.css'
import { useEffect } from 'react'
import db from './../../data/db.json'


const SongButtonsRight = (props) => {
  // const [queued, setQueued] = useState(false)
  // const [volume, setVolume] = useState(2)
  // const [previousVolume, setPreviousVolume] = useState(50)
  // const queueIcon = `/icons/player/icon_queue_${queued}.png`
  // const volumeIcon = `/icons/player/icon_volume_${volume}.png`
  // const fullscreenIcon = `/icons/player/icon_fullscreen_false.png`
  // let audioPlayer = document.getElementById('audioPlayer')
  // let thumbPosition
  
  // useEffect(() => {
  //   thumbPosition = document.getElementById('songVolumeProgress').value / document.getElementById('songVolumeProgress').max * 100
  //   document.getElementById('songVolumeThumb').style.marginLeft = 'calc(' + thumbPosition + '% - ' + thumbPosition * 10 / 100 + 'px)'
  //   audioPlayer = document.getElementById('audioPlayer')
  //   // audioPlayer.volume = thumbPosition / 300
  // })

  // const volumeChange = () => {
  //   thumbPosition = document.getElementById('songVolumeProgress').value / document.getElementById('songVolumeProgress').max * 100
  //   document.getElementById('songVolumeThumb').style.marginLeft = 'calc(' + thumbPosition + '% - ' + thumbPosition * 10 / 100 + 'px)'
  //   // audioPlayer.volume = thumbPosition / 300
  //   if (thumbPosition > 66) setVolume(3)
  //   else if (thumbPosition > 33) setVolume(2)
  //   else if (thumbPosition > 0) setVolume(1)
  //   else if (thumbPosition === 0) setVolume(0)
  // }
  // const previousVolumeChange = () => {
  //   thumbPosition = document.getElementById('songVolumeProgress').value / document.getElementById('songVolumeProgress').max * 100
  //   if (thumbPosition != 0) setPreviousVolume(thumbPosition)
  // }
  // const muteChange = () => {
  //   if (thumbPosition != 0) {
  //     thumbPosition = 0
  //     setVolume(0)
  //   }
  //   else {
  //     thumbPosition = previousVolume
  //     if (thumbPosition > 66) setVolume(3)
  //     else if (thumbPosition > 33) setVolume(2)
  //     else if (thumbPosition > 0) setVolume(1)
  //   }
  //   document.getElementById('songVolumeProgress').value = thumbPosition
  //   document.getElementById('songVolumeThumb').style.marginLeft = 'calc(' + thumbPosition + '% - ' + thumbPosition * 10 / 100 + 'px)'
  // }
  // const queueChange = () => {
  //   setQueued(!queued)
  // }

  // return (
  //   <div className="songButtonsRight">
  //     <img id="songQueue" onClick={queueChange} src={queueIcon} />
  //     <img id="songVolume" onClick={muteChange} src={volumeIcon} />
  //     <div id="songVolumeBar">
  //       <input id="songVolumeProgress" type="range" min="0" max="100"  onChange={volumeChange} onClick={previousVolumeChange} />
  //       <div id="songVolumeOverlay" />
  //       <div id="songVolumeThumb" />
  //     </div>
  //     <img id="songFullscreen" onClick={props.fullscreenChange} src={fullscreenIcon} />
  //   </div>
  // )

  let volumeIconState = 3

  if (props.audioPlayerVolume >= 66) volumeIconState = 3
  else if (props.audioPlayerVolume >= 33) volumeIconState = 2
  else if (props.audioPlayerVolume > 0) volumeIconState = 1
  else if (props.audioPlayerVolume == 0) volumeIconState = 0

  const fullscreenIcon = `/icons/player/icon_fullscreen_true.png`
  const volumeIcon = `/icons/player/icon_volume_${volumeIconState}.png`

  useEffect(() => {
    document.getElementById('songVolumeProgress').style.right = `${100 - props.audioPlayerVolume}%`
    document.getElementById('songVolumeThumb').style.right = `${100 - props.audioPlayerVolume}%`
  })

  return (
    <div id="songButtonsRight">
      <img id="songVolumeButton" src={volumeIcon} onClick={props.onClickSongVolumeButtonHandle}/>
        <div id="songVolume">
          <input id="songVolumeInput" type="range" min="0" max="100" onChange={props.onChangeSongVolumeHandle} />
          <div id="songVolumeOverlay">
            <div id="songVolumeProgress" />
          </div>
          <div id="songVolumeThumb" />
        </div>
      <img id="songFullscreenImg" onClick={props.fullscreenChange} src={fullscreenIcon} alt="songFullScreen.png" />
    </div>
  )
}

export default SongButtonsRight