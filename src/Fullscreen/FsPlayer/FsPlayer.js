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
      <FsSongButtons />
    </div>
  )
}

export default FsPlayer