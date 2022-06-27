import { useParams, Link } from 'react-router-dom'
import db from '../../data/db.json'
import './Playlist.css'
import PlaylistImage from '../components/PlaylistImage/PlaylistImage'

const Playlist = ({ changeSong, playlistId, playlistSongIndex, pause, paused }) => {
  const { id } = useParams()
  let playlistType
  let playlistAuthor
  let playlistAuthorImage
  let playlistSongsCount = db.playlists[id].songs.length
  let playlistPlayImage = <img src="/icons/content/icon_paused_true.png" onClick={() => changeSong(id, 0)} />
  let playlistPlayImageSrc = `/icons/content/icon_paused_${paused}.png`
  if (playlistId == id) {
    playlistPlayImage = <img src={playlistPlayImageSrc} onClick={() => pause()} />
  }
  let songsList = db.playlists[id].songs.map((song, index) => {
    let songDuration
    let songsAuthors = db.songs[db.playlists[id].songs[index]].authors.map((author, index) => {
      const comma = (index !== 0) ? <div>,&nbsp;</div> : ''
      return (
        <div key={index}>
          { comma }<Link to="/">{author}</Link>
        </div>
      )
    })
    let idOutput
    let imageOutput = `/icons/content/icon_songPaused_true.png`
    let playPauseButton = <img src={imageOutput} alt="play/pause.png" onClick={() => changeSong(id, index)} />
    if (playlistId == id && playlistSongIndex == index){
      idOutput = "currentSong"
      imageOutput = `/icons/content/icon_songPaused_${paused}.png`
      playPauseButton = <img src={imageOutput} alt="play/pause.png" onClick={() => pause()}/>
    }
    let indexOutput = index + 1
    if (playlistId == id && playlistSongIndex == index && paused == false)  {
      indexOutput = (
      <div id="currentSongAnimation">
        <div id="currentSongAnimation1"></div>
        <div id="currentSongAnimation2"></div>
        <div id="currentSongAnimation3"></div>
        <div id="currentSongAnimation4"></div>
      </div>
      )
    }

    if (Math.floor(db.songs[db.playlists[id].songs[index]].duration % 60) < 10) songDuration = `${Math.floor(db.songs[db.playlists[id].songs[index]].duration / 60)}:0${Math.floor(db.songs[db.playlists[id].songs[index]].duration % 60)}`
    else songDuration = `${Math.floor(db.songs[db.playlists[id].songs[index]].duration / 60)}:${Math.floor(db.songs[db.playlists[id].songs[index]].duration % 60)}`

    return (
      <div key={index} className="song" id={idOutput} onDoubleClick={() => changeSong(id, index)}>
        <div className="songIndex">
          {playPauseButton}
          {indexOutput}
        </div>
        <div className="songInfo">
          <img src={`/songs/images/${db.songs[db.playlists[id].songs[index]].image}.png`} />
          <div className="songTitleAuthors">
            <div className="songTitle">{db.songs[db.playlists[id].songs[index]].title}</div>
            <div className="songAuthors">
              {songsAuthors}
            </div>
          </div>
        </div>
        <div className="songDuration">
          {songDuration}
        </div>
      </div>
    )
  })

  if (db.playlists[id].userId >= 0) {
    if (id == 0) playlistType = 'PLAYLIST'
    else playlistType = 'PUBLIC PLAYLIST'
    playlistAuthor = db.users[db.playlists[id].userId].name
    playlistAuthorImage = db.users[db.playlists[id].userId].image
  }
  else if (db.playlists[id].artistName) {
    playlistType = 'PLAYLIST'
    playlistAuthor = db.playlists[id].artistName
  }

  return(
    <div id="playlist">
      <div id="desc">
        <PlaylistImage playlistId={id}/>
        <div id="playlistInfo">
          <div id="playlistType">{playlistType}</div>
          <div id="playlistTitle">{db.playlists[id].name}</div>
          <div id="playlistDetails">
            {playlistAuthorImage != undefined && <img src={playlistAuthorImage} />}
            <div>{playlistAuthor}</div>
            <div>-</div>
            <div>{playlistSongsCount} songs</div>
          </div>
        </div>
      </div>
      <div id="playlistNavbar">
        {playlistPlayImage}
      </div>
      <div id="songsList">
        <div className="song">
          <div className="songIndex">#</div>
          <div className="songInfo">TITLE</div>
          <div className="songDuration">DURATION</div>
        </div>
        {songsList}
      </div>
      <div id="gradientBackground" />
    </div>
  )
}

export default Playlist