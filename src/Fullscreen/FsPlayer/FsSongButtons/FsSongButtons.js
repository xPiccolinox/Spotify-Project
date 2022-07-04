import './FsSongButtons.css'
import db from './../../../data/db.json'

const FsSongButtons = (props) => {
  const like = '/icons/player/icon_like_' + db.songs[props.song].liked + '.png'
  const songShuffle = `/icons/player/icon_shuffled_${props.shuffled}.png`
  const songPause = `/icons/player/icon_paused_${props.paused}.png`
  const songRepeat = `/icons/player/icon_repeated_${props.repeated}.png`
  const fullscreenIcon = `/icons/player/icon_fullscreen_true.png`

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
        <img id="fsSongFullscreenImg" onClick={props.fullscreenChange} src={fullscreenIcon} alt="fsSongFullScreen.png" />
      </div>
    </div>
  )
}

export default FsSongButtons