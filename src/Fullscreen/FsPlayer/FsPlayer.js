import './FsPlayer.css'
import db from '../../data/db.json'
import FsSongInfo from './FsSongInfo/FsSongInfo'
import FsSongBar from './FsSongBar/FsSongBar'
import FsSongButtons from './FsSongButtons/FsSongButtons'

const FsPlayer = (props) => {
  let song = db.playlists[props.playlistId].songs[props.playlistSongIndex]

  return(
    <div id="fsPlayer">
      <FsSongInfo song={song} />
      <FsSongBar />
      <FsSongButtons song={song} shuffled={props.shuffled} paused={props.paused} repeated={props.repeated} shuffle={props.shuffle} previousSong={props.previousSong} pause={props.pause} nextSong={props.nextSong} repeat={props.repeat} fullscreenChange={props.fullscreenChange} />
    </div>
  )
}

export default FsPlayer