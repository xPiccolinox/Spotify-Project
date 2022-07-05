import './FsPlayer.css'
import db from '../../data/db.json'
import FsSongInfo from './FsSongInfo/FsSongInfo'
import FsSongBar from './FsSongBar/FsSongBar'
import FsSongButtons from './FsSongButtons/FsSongButtons'

const FsPlayer = (props) => {

  return(
    <div id="fsPlayer">
      <FsSongInfo song={props.song} />
      <FsSongBar />
      <FsSongButtons song={props.song} shuffled={props.shuffled} paused={props.paused} repeated={props.repeated} shuffle={props.shuffle} previousSong={props.previousSong} pause={props.pause} nextSong={props.nextSong} repeat={props.repeat} fullscreenChange={props.fullscreenChange} />
    </div>
  )
}

export default FsPlayer