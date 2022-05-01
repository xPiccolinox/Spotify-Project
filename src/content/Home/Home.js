import db from './../../data/db.json'
import './Home.css'
import PlaylistImage from '../components/PlaylistImage/PlaylistImage'

const Home = () => {
  const time = new Date().getHours()
  let greetingMessage = 'Good Afternoon'

  if (time >= 5 && time <= 11) greetingMessage = 'Good Morning'
  else if (time >= 11 && time <= 18) greetingMessage = 'Good Afternoon'
  else greetingMessage = 'Good Evening'

  return(
    <div id="home">
      <div id="greeting">
        <div className="text">{greetingMessage}</div>
        <div className="playlists">
          <PlaylistImage exactImage="./icons/content/icon_likedSongs" text="Liked Songs" />
          <PlaylistImage playlistId={0} />
          <PlaylistImage playlistId={1} />
          <PlaylistImage playlistId={2} />
          <PlaylistImage playlistId={3} />
          <PlaylistImage playlistId={4} />
        </div>
      </div>
    </div>
  )
}

export default Home