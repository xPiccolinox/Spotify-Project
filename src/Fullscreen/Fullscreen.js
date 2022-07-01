import './Fullscreen.css'
import db from './../data/db.json'
import Player from '../Player/Player'

const Fullscreen = (props) => {
  return(
    <div id="fullscreen">
      <div id="fullscreenBackground"  onClick={props.fullscreenChange}>
        <Player playlistId={props.playlistId} playlistSongIndex={props.playlistSongIndex} nextSong={props.nextSong} previousSong={props.previousSong} shuffle={props.shuffle} pause={props.pause} repeat={props.repeat} shuffled={props.shuffled} paused={props.paused} repeated={props.repeated} fullscreened={props.fullscreened} />
      </div>
    </div>
  )
}

export default Fullscreen