import './Fullscreen.css'
import db from './../data/db.json'
import FsPlayer from './FsPlayer/FsPlayer'

const Fullscreen = (props) => {
  return(
    <div id="fullscreen">
      {/* <div id="fullscreenBackground"  onClick={props.fullscreenChange}> */}
      <div id="fullscreenBackground">
        <FsPlayer playlistId={props.playlistId} playlistSongIndex={props.playlistSongIndex} nextSong={props.nextSong} previousSong={props.previousSong} shuffle={props.shuffle} pause={props.pause} repeat={props.repeat} shuffled={props.shuffled} paused={props.paused} repeated={props.repeated} fullscreened={props.fullscreened} />
      </div>
    </div>
  )
}

export default Fullscreen