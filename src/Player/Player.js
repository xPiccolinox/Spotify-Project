import './Player.css'
import db from './../data/db.json'
import SongInfo from './SongInfo/SongInfo'
import SongButtons from './SongButtons/SongButtons'
import SongBar from './SongBar/SongBar'
import SongButtonsRight from './SongButtonsRight/SongButtonsRight'

const Player = (props) => {  
  let song = db.playlists[props.playlistId].songs[props.playlistSongIndex]

  return(
    <div className="player">
      <SongInfo song={song} />
      <SongButtons  shuffle={props.shuffle} previousSong={props.previousSong} pause={props.pause} nextSong={props.nextSong} repeat={props.repeat} props={[props.shuffled, props.paused, props.repeated]} />
      <SongBar song={song} playlistSongIndex={props.playlistSongIndex} playlistId={props.playlistId}/>
      <SongButtonsRight />
    </div>
  )
}

export default Player