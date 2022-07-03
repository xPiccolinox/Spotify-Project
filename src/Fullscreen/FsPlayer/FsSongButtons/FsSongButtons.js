import './FsSongButtons.css'
import db from './../../../data/db.json'

const FsSongButtons = (props) => {
  const fullscreenIcon = `/icons/player/icon_fullscreen_${props.fullscreened}.png`
  const like = '/icons/player/icon_like_' + db.songs[props.song].liked + '.png'
  
  return(
    <div id="fsSongButtons">
      <img id="fsSongLike" src={ like } alt="Icon_Like"/>
      <div id="fsSongButtonsRight">
        <img id="fsSongFullscreenImg" onClick={props.fullscreenChange} src={fullscreenIcon} alt="fsSongFullScreen.png" />
      </div>
    </div>
  )
}

export default FsSongButtons