import { Link } from 'react-router-dom'
import './SongInfo.css'
import db from './../../data/db.json'

const SongInfo = ({ changeSong, song }) => {
  const title = db.songs[song].title
  const authors = db.songs[song].authors
  const image = './songs/song_' + db.songs[song].id + '/image.png'
  const like = './icons/player/icon_like_' + db.songs[song].liked + '.png'

  const authorsList = authors.map((author, index) => {
    const comma = (index !== 0) ? <div>,&nbsp;</div> : ''
    return (
      <div key={index}>
        { comma }
        <Link to="">{author}</Link>
      </div>
    )
  })

  return (
    <div className="songInfo">
      <img id="song_image" src={ image } alt="Song_Image" onClick={changeSong} />
      <div className="desc">
        <Link to="">{ title }</Link><br />
        <div>{ authorsList }</div>
      </div>
      <img id="song_like" src={ like } alt="Icon_Like"/>
    </div>
  )
}

export default SongInfo