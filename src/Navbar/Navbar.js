import { useState } from 'react'
import { Link } from 'react-router-dom'
import db from './../data/db.json'
import './Navbar.css'

const Navbar = () => {

  const [home, setHome] = useState(false)
  const [search, setSearch] = useState(false)
  const [library, setLibrary] = useState(false)

  const icon_home = `/icons/navbar/icon_home_${home}.png`
  const icon_search = `/icons/navbar/icon_search_${search}.png`
  const icon_library = `/icons/navbar/icon_library_${library}.png`

  const playlists = db.playlists
  const playlistsList = playlists.map((playlist, index) => {
    if (index > 0) {
      return <Link to={`/playlist/${playlist.id}`} key={index}>{playlist.name}</Link>
    }
  })

  return(
    <nav id="navbar">
      <div id="links">
        <Link to="/"><img src={icon_home} alt="Icon_Home" />Home</Link>
        <Link to="/search"><img src={icon_search} alt="Icon_Search" />Search</Link>
        <Link to="/yourlibrary"><img src={icon_library}alt="Icon_Library" />Your Library</Link>
        <Link to="/"><img src="/icons/navbar/icon_createPlaylist.png" alt="Icon_CreatePlaylist" />Create Playlist</Link>
        <Link to="/playlist/0"><img src="/icons/navbar/icon_likedSongs.png" alt="Icon_LikedSongs" />Liked Songs</Link>
        <Link to="/yourepisodes"><img src="/icons/navbar/icon_yourEpisodes.png" alt="Icon_YourEpisodes" />Your Episodes</Link>
      </div>
      <hr />
      <div id="playlists">
        {playlistsList}
      </div>
    </nav>
  )
}

export default Navbar