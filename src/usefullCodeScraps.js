  // const [playlistId, setPlaylistId] = useState(props.playlist)
  // const [queue, setQueue] = useState(db.playlists[playlistId].songs)
  // const [queuePosition, setQueuePosition] = useState(props.playlistSongIndex)
  // const [song, setSong] = useState(queue[queuePosition])
  // const [shuffled, setShuffled] = useState(false)
  // const [paused, setPaused] = useState(true)
  // const [repeated, setRepeated] = useState(0)
  // let audioPlayer = document.getElementById('audioPlayer')

  // useEffect(() => {
  //   setSong(queue[queuePosition])
  //   setQueuePosition(props.playlistSongIndex)
  //   setQueue(db.playlists[playlistId].songs)
  //   setPlaylistId(props.playlist)
  //   document.getElementById('audioPlayer').load()
  // }, [props])

  // useEffect(() => {
  //   audioPlayer = document.getElementById('audioPlayer')
  //   !paused ? audioPlayer.play() : audioPlayer.pause()      
  //   audioPlayer.onended = () => {
  //     if (repeated == 2) {
  //       audioPlayer.currentTime = 0
  //       audioPlayer.play()
  //     }
  //     else nextSong()
  //   }
  // })

  // // let playlistId = props.playlist
  // // let queue = db.playlists[playlistId].songs
  // // let queuePosition = props.playlistSongIndex
  // // let song = queue[queuePosition]

  // // const previousSong = () => {
  // //   if (audioPlayer.currentTime >= 4) {
  // //     audioPlayer.currentTime = 0
  // //   }
  // //   else {
  // //     setPaused(false)
  // //     if (queuePosition <= 0) queuePosition = queue.length - 1
  // //     else queuePosition -= 1
  // //     document.getElementById('audioPlayer').load()
  // //   }
  // // }
  // // const nextSong = () => {
  // //   queuePosition += 1
  // //   // console.log(queuePosition)
  // //   // console.log(queue.length)
  // //   setPaused(false)
  // //   // if (song >= db.songs.length - 1) {
  // //   //   setSong(0)
  // //   //   if (repeated == 0) setPaused(true)
  // //   // }
  // //   if (queuePosition >= queue.length - 1) {
  // //     queuePosition = 0
  // //   }
  // //   document.getElementById('audioPlayer').load()
  // // }

  // const previousSong = () => {
  //   if (audioPlayer.currentTime >= 4) {
  //     audioPlayer.currentTime = 0
  //   }
  //   else {
  //     setSong(song - 1)
  //     setPaused(false)
  //     if (song <= 0) setSong(db.songs.length - 1)
  //     document.getElementById('audioPlayer').load()
  //   }
  // }
  // const nextSong = () => {
  //   setSong(queue[queuePosition + 1])
  //   setQueuePosition(queuePosition + 1)
  //   // console.log(queuePosition)
  //   // console.log(queue.length)
  //   setPaused(false)
  //   // if (song >= db.songs.length - 1) {
  //   //   setSong(0)
  //   //   if (repeated == 0) setPaused(true)
  //   // }
  //   if (queuePosition >= queue.length - 1) {
  //     setSong(queue[0])
  //     setQueuePosition(0)
  //   }
  //   document.getElementById('audioPlayer').load()
  // }

  // const shuffle = () => {
  //   setShuffled(!shuffled)
  // }
  // const pause = () => {
  //   setPaused(!paused)
  //   paused ? audioPlayer.play() : audioPlayer.pause()
  // }
  // const repeat = () => {
  //   setRepeated(repeated + 1)
  //   if (repeated >= 2) setRepeated(0)    
  // }