import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './content/Home/Home'
import Search from './content/Search/Search'
import YourLibrary from './content/YourLibrary/YourLibrary'
import LikedSongs from './content/LikedSongs/LikedSongs'
import YourEpisodes from './content/YourEpisodes/YourEpisodes'
import Friends from './Friends/Friends'
import Player from './Player/Player'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/yourlibrary" element={<YourLibrary />} />
            <Route path="/likedsongs" element={<LikedSongs />} />
            <Route path="/yourepisodes" element={<YourEpisodes />} />
          </Routes>
        </div>
        <Friends />
        <Player />
      </div>
    </BrowserRouter>
  );
}

export default App;
