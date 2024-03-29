import './FsPlayer.css'
import db from '../../data/db.json'
import FsSongInfo from './FsSongInfo/FsSongInfo'
import FsSongBar from './FsSongBar/FsSongBar'
import FsSongButtons from './FsSongButtons/FsSongButtons'

const FsPlayer = (props) => {

  return(
    <div id="fsPlayer">
      <FsSongInfo song={props.song} />
      <FsSongBar audioPlayerDuration={props.audioPlayerDuration} audioPlayerCurrentTime={props.audioPlayerCurrentTime} onMouseDownSongBarsHandle={props.onMouseDownSongBarsHandle} onMouseUpSongBarsHandle={props.onMouseUpSongBarsHandle} songRangeProgressStill={props.songRangeProgressStill} />
      <FsSongButtons song={props.song} shuffled={props.shuffled} paused={props.paused} repeated={props.repeated} shuffle={props.shuffle} previousSong={props.previousSong} pause={props.pause} nextSong={props.nextSong} repeat={props.repeat} fullscreenChange={props.fullscreenChange} audioPlayerVolume={props.audioPlayerVolume} muffled={props.muffled} onChangeSongVolumeHandle={props.onChangeSongVolumeHandle} onClickSongVolumeButtonHandle={props.onClickSongVolumeButtonHandle} />
    </div>
  )
}

export default FsPlayer