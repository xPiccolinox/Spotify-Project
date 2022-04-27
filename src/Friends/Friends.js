import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Friends.css'

const Navbar = () => {

  const [home, setHome] = useState(false)
  const [search, setSearch] = useState(false)
  const [library, setLibrary] = useState(false)

  const icon_home = `./icons/navbar/icon_home_${home}.png`
  const icon_search = `./icons/navbar/icon_search_${search}.png`
  const icon_library = `./icons/navbar/icon_library_${library}.png`

  return(
    <nav className="friends">
      <div className="links">
        {/* <Link to="/"><img src={icon_home} alt="Icon_Home" />Home</Link>
        <Link to="/"><img src={icon_search} alt="Icon_Search" />Search</Link>
        <Link to="/"><img src={icon_library}alt="Icon_Library" />Your Library</Link>
        <Link to="/"><img src="./icons/navbar/icon_createPlaylist.png" alt="Icon_CreatePlaylist" />Create Playlist</Link>
        <Link to="/"><img src="./icons/navbar/icon_likedSongs.png" alt="Icon_LikedSongs" />Liked Songs</Link>
        <Link to="/"><img src="./icons/navbar/icon_yourEpisodes.png" alt="Icon_YourEpisodes" />Your Episodes</Link> */}
      </div>
    </nav>
  )
}

export default Navbar