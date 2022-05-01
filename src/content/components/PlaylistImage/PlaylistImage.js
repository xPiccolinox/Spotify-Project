import { Link } from 'react-router-dom'
import db from './../../..//data/db.json'
import './PlaylistImage.css'

const PlaylistImage = (props) => {
  let playlistImageArray = []
  let path = './'
  if (!props.exactImage) {
    for (let i = 0; i <= db.playlists[props.playlistId].songs.length - 1; i++) {
      let song = db.songs[db.playlists[props.playlistId].songs[i]].image
      if (playlistImageArray.length == 4 || song == undefined) break
      if (playlistImageArray[0] != song && playlistImageArray[1] != song && playlistImageArray[2] != song) playlistImageArray.push(song)
    }
  }
  if (props.exactPath) {

  }


  if (playlistImageArray.length < 4) {
    return(
      <Link to={path}>
        <div className="playlistLongComponent">
          {!props.exactImage && <img src={`./songs/images/${playlistImageArray[0]}.png`} />}
          {props.exactImage && <img src={`${props.exactImage}.png`} />}
          {!props.text && db.playlists[props.playlistId].name}
          {props.text && props.text}
        </div>
      </Link>
      )
  }
  else {
    return(
      <Link to={path}>
        <div className="playlistLongComponent">
          <div className="playlistImage">
            <img src={`./songs/images/${playlistImageArray[0]}.png`} />
            <img src={`./songs/images/${playlistImageArray[1]}.png`} />
            <img src={`./songs/images/${playlistImageArray[2]}.png`} />
            <img src={`./songs/images/${playlistImageArray[3]}.png`} />
          </div>
          {!props.text && db.playlists[props.playlistId].name}
          {props.text && props.text}
        </div>
      </Link>
    )
  }
}

export default PlaylistImage