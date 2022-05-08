import db from './../../../data/db.json'
import './PlaylistImage.css'

const PlaylistImage = (props) => {
  let playlistImageArray = []
  if (props.exactImage) {
    return (
      <div className="playlistImage">
        <img src={`${props.exactImage}`} />
      </div>
    )
  }
  else if (db.playlists[props.playlistId].image) {
    return (
      <div className="playlistImage">
        <img src={`${db.playlists[props.playlistId].image}`} />
      </div>
    )
  }
  else {
    for (let i = 0; i <= db.playlists[props.playlistId].songs.length - 1; i++) {
      let song = db.songs[db.playlists[props.playlistId].songs[i]].image
      if (playlistImageArray.length == 4 || song == undefined) break
      if (playlistImageArray[0] != song && playlistImageArray[1] != song && playlistImageArray[2] != song) playlistImageArray.push(song)
    }
    if (playlistImageArray.length == 4) {
      return (
      <div className="playlistImage">
        <div className="playlistImageGrid">
          <img src={`/songs/images/${playlistImageArray[0]}.png`} />
          <img src={`/songs/images/${playlistImageArray[1]}.png`} />
          <img src={`/songs/images/${playlistImageArray[2]}.png`} />
          <img src={`/songs/images/${playlistImageArray[3]}.png`} />
        </div>
      </div>
    )
      }
    else return (
      <div className="playlistImage">
        <img src={`/songs/images/${playlistImageArray[0]}.png`} />
      </div>
    )
  }
}

export default PlaylistImage