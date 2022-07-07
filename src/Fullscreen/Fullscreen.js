import './Fullscreen.css'
import { useEffect } from 'react'
import db from './../data/db.json'
import FsPlayer from './FsPlayer/FsPlayer'

const Fullscreen = (props) => {
  let song = db.playlists[props.playlistId].songs[props.playlistSongIndex]
  let fsBackground = '/songs/backgrounds/' + db.songs[song].image + '.png'

  return(
    <div id="fullscreen">
      <img id="fullscreenBackgroundImg" src={fsBackground} />
      <div id="fullscreenBackground">
        <FsPlayer song={song} nextSong={props.nextSong} previousSong={props.previousSong} shuffle={props.shuffle} pause={props.pause} repeat={props.repeat} shuffled={props.shuffled} paused={props.paused} repeated={props.repeated} fullscreened={props.fullscreened} fullscreenChange={props.fullscreenChange} />
      </div>
    </div>
  )
}

export default Fullscreen