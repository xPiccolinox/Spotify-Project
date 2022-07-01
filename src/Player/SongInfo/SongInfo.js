import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './SongInfo.css'
import db from './../../data/db.json'

const SongInfo = ({ changeSong, song }) => {
  const [descWidth, setDescWidth] = useState(0)
  const [titleWidth, setTitleWidth] = useState(0)
  const [authorsWidth, setAuthorsWidth] = useState(0)
  const title = db.songs[song].title
  const authors = db.songs[song].authors
  const image = '/songs/images/' + db.songs[song].image + '.png'
  const like = '/icons/player/icon_like_' + db.songs[song].liked + '.png'

  const authorsList = authors.map((author, index) => {
    const comma = (index !== 0) ? <div>,&nbsp;</div> : ''
    return (
      <div key={index}>
        { comma }<Link to="">{author}</Link>
      </div>
    )
  })

  useEffect(() => {
    // "Authors" width fix + Animation if "Authors" is wider than "Desc"
    let authorsWidth = 16
    document.getElementById('authors').childNodes.forEach(child => {
      authorsWidth += parseInt(window.getComputedStyle(child).width)
    })
    document.getElementById('authors').style.width = `${authorsWidth}px`

    setDescWidth(parseInt(window.getComputedStyle(document.getElementById('desc')).width))
    setTitleWidth(parseInt(window.getComputedStyle(document.getElementById('title')).width))
    setAuthorsWidth(parseInt(window.getComputedStyle(document.getElementById('authors')).width))
  }, [authors])


  const titleOnMouseOver = () => {
    if (descWidth - titleWidth < 0) {
      document.getElementById('title').addEventListener('mouseenter', () => {
        document.getElementById('title').style.left = `${descWidth - titleWidth}px`
      })
      document.getElementById('title').addEventListener('mouseleave', () => {
        document.getElementById('title').style.left = '0px'
      })
    }
    else {
      document.getElementById('title').style.left = '0px'
    }
  }
  const authorsOnMouseOver = () => {
    if (descWidth - authorsWidth < 0) {
      document.getElementById('authors').addEventListener('mouseenter', () => {
        document.getElementById('authors').style.left = `${descWidth - authorsWidth}px`
      })
      document.getElementById('authors').addEventListener('mouseleave', () => {
        document.getElementById('authors').style.left = '0px'
      })
    }
    else {
      document.getElementById('authors').style.left = '0px'
    }
  }

  return (
    <div id="songInfo">
      <img id="song_image" src={ image } alt="Song_Image" onClick={changeSong} />
      <div id="desc">
        <div id="overlayLeft" />
        <div id="overlayRight" />
        <div id="title" onMouseOver={titleOnMouseOver}><Link to="">{ title }</Link></div><br />
        <div id="authors" onMouseOver={authorsOnMouseOver}>{ authorsList }</div>
      </div>
      <img id="song_like" src={ like } alt="Icon_Like"/>
    </div>
  )
}

export default SongInfo