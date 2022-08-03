import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import db from './data/db.json'
import Fullscreen from './Fullscreen/Fullscreen'
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
  const [fullscreened, setFullscreened] = useState(false)

  const [audioPlayerDuration, setAudioPlayerDuration] = useState(123)
  const [audioPlayerCurrentTime, setAudioPlayerCurrentTime] = useState(0)
  const [songRangeProgressStill, setSongRangeProgressStill] = useState(false)

  const [audioPlayerVolume, setAudioPlayerVolume] = useState(50)
  const [lastAudioPlayerVolume, setLastAudioPlayerVolume] = useState(50)
  const [muffled, setMuffled] = useState(false)

  let song = db.playlists[playlistId].songs[playlistSongIndex]
  let audio = `/songs/${song}.mp3`
  let audioPlayer = document.getElementById('audioPlayer')

  useEffect(() => {
    document.getElementById('audioPlayer').load()
    document.getElementById('audioPlayer').volume = audioPlayerVolume / 300
  }, [playlistSongIndex, playlistId])

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
    audioPlayer.onloadedmetadata = () => {
      setAudioPlayerDuration(audioPlayer.duration)
    }
    audioPlayer.ontimeupdate = () => {
      if (Math.floor(audioPlayer.currentTime) !== audioPlayerCurrentTime && songRangeProgressStill == false) {
        setAudioPlayerCurrentTime(Math.floor(audioPlayer.currentTime))
      }
    }
  })

  useEffect(() => {
    document.getElementById('audioPlayer').volume = audioPlayerVolume / 300
    console.log(document.getElementById('audioPlayer').volume)
  }, [audioPlayerVolume])

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

  const fullscreenChange = () => {
    setFullscreened(!fullscreened)
    if (fullscreened == false) {
      document.getElementById('fullscreen').style.zIndex = "2"
      document.getElementById('fullscreen').style.filter = "opacity(1)"
      setTimeout(() => {document.getElementById('fullscreenBackground').style.pointerEvents = "auto"}, 500)
    }
    else {
      setTimeout(() => {document.getElementById('fullscreen').style.zIndex = "-2"}, 500)
      document.getElementById('fullscreen').style.filter = "opacity(0)"
      document.getElementById('fullscreenBackground').style.pointerEvents = "none"
    }
  }
  const onChangeSongVolumeHandle = (e) => {
    setAudioPlayerVolume(e.target.value)
    setLastAudioPlayerVolume(e.target.value)
  }
  const onClickSongVolumeButtonHandle = () => {
    if (audioPlayerVolume === 0) setAudioPlayerVolume(lastAudioPlayerVolume)
    else setAudioPlayerVolume(0)
  }

  const onMouseDownSongBarsHandle = () => {
    setSongRangeProgressStill(true)
  }
  const onMouseUpSongBarsHandle = (e) => {
    setSongRangeProgressStill(false)
    audioPlayer.currentTime = e.target.value
  }

  return (
    <BrowserRouter>
      <div className="App">
        <audio id="audioPlayer">
          <source src={audio} />
        </audio>
        <Fullscreen fullscreenChange={fullscreenChange} playlistId={playlistId} playlistSongIndex={playlistSongIndex} nextSong={nextSong} previousSong={previousSong} shuffle={shuffle} pause={pause} repeat={repeat} shuffled={shuffled} paused={paused} repeated={repeated} fullscreened={fullscreened} audioPlayerDuration={audioPlayerDuration} audioPlayerCurrentTime={audioPlayerCurrentTime} onMouseDownSongBarsHandle={onMouseDownSongBarsHandle} onMouseUpSongBarsHandle={onMouseUpSongBarsHandle} songRangeProgressStill={songRangeProgressStill} audioPlayerVolume={audioPlayerVolume} muffled={muffled} onChangeSongVolumeHandle={onChangeSongVolumeHandle} onClickSongVolumeButtonHandle={onClickSongVolumeButtonHandle} />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/yourlibrary" element={<YourLibrary />} />
            <Route path="/playlist/:id" element={<Playlist changeSong={changeSong} playlistId={playlistId} playlistSongIndex={playlistSongIndex} pause={pause} paused={paused} />} />
            <Route path="/yourepisodes" element={<YourEpisodes />} />
          </Routes>
          <Topbar />
        </div>
        <Friends />
        <Player playlistId={playlistId} playlistSongIndex={playlistSongIndex} nextSong={nextSong} previousSong={previousSong} shuffle={shuffle} pause={pause} repeat={repeat} shuffled={shuffled} paused={paused} repeated={repeated} fullscreened={fullscreened} fullscreenChange={fullscreenChange} audioPlayerDuration={audioPlayerDuration} audioPlayerCurrentTime={audioPlayerCurrentTime} onMouseDownSongBarsHandle={onMouseDownSongBarsHandle} onMouseUpSongBarsHandle={onMouseUpSongBarsHandle} songRangeProgressStill={songRangeProgressStill} />
      </div>
    </BrowserRouter>
  );
}

export default App;
