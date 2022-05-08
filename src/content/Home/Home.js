import './Home.css'
import PlaylistLongComponent from '../components/PlaylistLongComponent/PlaylistLongComponent'

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
          <PlaylistLongComponent playlistId={0} />
          <PlaylistLongComponent playlistId={1} />
          <PlaylistLongComponent playlistId={2} />
          <PlaylistLongComponent playlistId={3} />
          <PlaylistLongComponent playlistId={4} />
          <PlaylistLongComponent playlistId={5} />
        </div>
      </div>
    </div>
  )
}

export default Home