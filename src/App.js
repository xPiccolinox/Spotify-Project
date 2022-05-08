import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import db from './data/db.json'
import Navbar from './Navbar/Navbar'
import Topbar from './Topbar/Topbar'
import Home from './content/Home/Home'
import Search from './content/Search/Search'
import YourLibrary from './content/YourLibrary/YourLibrary'
import Playlist from './content/Playlist/Playlist'
import YourEpisodes from './content/YourEpisodes/YourEpisodes'
import Friends from './Friends/Friends'
import Player from './Player/Player'

function App() {
  const [playlistId, setPlaylistId] = useState(0)
  const [playlistSongIndex, setPlaylistSongIndex] = useState(0)

  const [shuffled, setShuffled] = useState(false)
  const [paused, setPaused] = useState(true)
  const [repeated, setRepeated] = useState(0)
  let audioPlayer = document.getElementById('audioPlayer')

  useEffect(() => {
    audioPlayer = document.getElementById('audioPlayer')
    !paused ? audioPlayer.play() : audioPlayer.pause()      
    audioPlayer.onended = () => {
      if (repeated == 2) {
        audioPlayer.currentTime = 0
        audioPlayer.play()
      }
      else nextSong()
    }
  })

  const changeSong = (id, index) => {
    setPlaylistId(id)
    setPlaylistSongIndex(index)
    setPaused(false)
  }
  const nextSong = () => {
    setPlaylistSongIndex(playlistSongIndex + 1)
    setPaused(false)
      if (playlistSongIndex >= db.playlists[playlistId].songs.length - 1) {
        setPlaylistSongIndex(0)
        if (repeated == 0) setPaused(true)
      }
    }
  const previousSong = () => {
    if (audioPlayer.currentTime >= 4) {
      audioPlayer.currentTime = 0
    }
    else {
      setPlaylistSongIndex(playlistSongIndex - 1)
      setPaused(false)
      if (playlistSongIndex <= 0) setPlaylistSongIndex(db.playlists[playlistId].songs.length - 1)
    }
  }

  const shuffle = () => {
    setShuffled(!shuffled)
  }
  const pause = () => {
    setPaused(!paused)
    paused ? document.getElementById('audioPlayer').play() : document.getElementById('audioPlayer').pause()
  }
  const repeat = () => {
    setRepeated(repeated + 1)
    if (repeated >= 2) setRepeated(0)    
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/yourlibrary" element={<YourLibrary />} />
            <Route path="/playlist/:id" element={<Playlist changeSong={changeSong}/>} />
            <Route path="/yourepisodes" element={<YourEpisodes />} />
          </Routes>
          <Topbar />
        </div>
        <Friends />
        <Player playlistId={playlistId} playlistSongIndex={playlistSongIndex} nextSong={nextSong} previousSong={previousSong} shuffle={shuffle} pause={pause} repeat={repeat} shuffled={shuffled} paused={paused} repeated={repeated} />
      </div>
    </BrowserRouter>
  );
}

export default App;
