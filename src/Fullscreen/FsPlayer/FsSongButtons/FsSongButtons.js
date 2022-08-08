import './FsSongButtons.css'
import { useEffect } from 'react'
import db from './../../../data/db.json'

const FsSongButtons = (props) => {
  let volumeIconState = 3

  if (props.audioPlayerVolume >= 66) volumeIconState = 3
  else if (props.audioPlayerVolume >= 33) volumeIconState = 2
  else if (props.audioPlayerVolume > 0) volumeIconState = 1
  else if (props.audioPlayerVolume == 0) volumeIconState = 0

  const like = '/icons/player/icon_like_' + db.songs[props.song].liked + '.png'
  const songShuffle = `/icons/player/icon_shuffled_${props.shuffled}.png`
  const songPause = `/icons/player/icon_paused_${props.paused}.png`
  const songRepeat = `/icons/player/icon_repeated_${props.repeated}.png`
  const fullscreenIcon = `/icons/player/icon_fullscreen_true.png`
  const volumeIcon = `/icons/player/icon_volume_${volumeIconState}.png`

  useEffect(() => {
    document.getElementById('fsSongVolumeProgress').style.right = `${100 - props.audioPlayerVolume}%`
    document.getElementById('fsSongVolumeThumb').style.right = `${100 - props.audioPlayerVolume}%`
  })

  return(
    <div id="fsSongButtons">
      <img id="fsSongLike" src={ like } alt="Icon_Like"/>
      <div id="fsSongButtonsMiddle">
        <img id="fsSongShuffle" onClick={props.shuffle} src={songShuffle}></img>
        <img id="fsSongPrevious" onClick={props.previousSong} src="/icons/player/icon_previousSong.png"></img>
        <img id="fsSongPause" onClick={props.pause} src={songPause}></img>
        <img id="fsSongNext" onClick={props.nextSong} src="/icons/player/icon_nextSong.png"></img>
        <img id="fsSongRepeat" onClick={props.repeat} src={songRepeat}></img>
      </div>
      <div id="fsSongButtonsRight">
       <img id="fsSongVolumeButton" src={volumeIcon} onClick={props.onClickSongVolumeButtonHandle}/>
        <div id="fsSongVolume">
          <input id="fsSongVolumeInput" type="range" min="0" max="100" onChange={props.onChangeSongVolumeHandle} />
          <div id="fsSongVolumeOverlay">
            <div id="fsSongVolumeProgress" />
          </div>
          <div id="fsSongVolumeThumb" />
        </div>
        <img id="fsSongFullscreenImg" onClick={props.fullscreenChange} src={fullscreenIcon} alt="fsSongFullScreen.png" />
      </div>
    </div>
  )
}

export default FsSongButtons


// audioPlayerVolume={props.audioPlayerVolume}
// muffled={props.muffled}
// onMouseDownSongVolumeHandle={props.onMouseDownSongVolumeHandle}
// onClickSongVolumeButtonHandle={props.onClickSongVolumeButtonHandle}