import { Link } from 'react-router-dom'
import db from './../../../data/db.json'
import './PlaylistLongComponent.css'
import PlaylistImage from '../PlaylistImage/PlaylistImage'

const PlaylistLongComponent = (props) => {
  let path = '/'
  if (props.exactPath) path = props.exactPath
  else path = `/playlist/${props.playlistId}`

  return (
    <Link to={path}>
      <div className="playlistLongComponent">
        {!props.exactImage && <PlaylistImage playlistId={props.playlistId}/>}
        {props.exactImage && <PlaylistImage exactImage={props.exactImage} playlistId={props.playlistId} />}
        {!props.text && db.playlists[props.playlistId].name}
        {props.text && props.text}
      </div>
    </Link>
  )
}

export default PlaylistLongComponent