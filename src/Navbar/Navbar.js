import { Link } from 'react-router-dom'
import './Navbar.css'
import icon_home from './icons/icon_home.png'
import icon_search from './icons/icon_search.png'
import icon_library from './icons/icon_library.png'
import icon_createPlaylist from './icons/icon_createPlaylist.png'
import icon_likedSongs from './icons/icon_likedSongs.png'
import icon_yourEpisodes from './icons/icon_yourEpisodes.png'

const Navbar = () => {

  return(
    <nav className="navbar">
      <div className="links">
        <Link to="/"><img src={icon_home} />Home</Link>
        <Link to="/"><img src={icon_search} />Search</Link>
        <Link to="/"><img src={icon_library} />Your Library</Link>
        <Link to="/"><img src={icon_createPlaylist} />Create Playlist</Link>
        <Link to="/"><img src={icon_likedSongs} />Likes Songs</Link>
        <Link to="/"><img src={icon_yourEpisodes} />Your Episodes</Link>
      </div>
    </nav>
  )
}

export default Navbar