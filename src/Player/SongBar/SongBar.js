import './SongBar.css'
import db from '../../data/db.json'

const SongBar = (props) => {
  const audio = './songs/song_' + db.songs[props.song].id + '/audio.mp3'
  const audioPlayer = document.getElementById('audioPlayer')

  const onChangeHandle = (e) => {
    const targetPercent = e.target.value / e.target.max * 100
    document.getElementById('songRangeThumb').style.marginLeft = 'calc(' + targetPercent + '% - ' + targetPercent * 10 / 100 + 'px)'
  }

  return (
    <div className="songBar">
      <audio id="audioPlayer" controls>
        <source src={audio} />
      </audio>
      <div className="songTime">
        <div id="songCurrentTime">0:00</div>
        <div id="songRange">
          <input id="songRangeProgress" type="range" min="0" max="300" onChange={onChangeHandle} />
          <div id="songRangeOverlay" />
          <div id="songRangeThumb" />
        </div>
        <div id="songDurationTime">0:00</div>
      </div>
    </div>
  )

  
}

export default SongBar