import './FsSongInfo.css'
import db from '../../../data/db.json'

const FsSongInfo = (props) => {
  const title = db.songs[props.song].title
  const authors = db.songs[props.song].authors
  const image = '/songs/images/' + db.songs[props.song].image + '.png'
  let authorsList

  if (authors.length == 1) {
    authorsList = <div className="author">{authors}</div>
  }
  else {
    authorsList = authors.map((author, index) => {
      if (index == authors.length - 1) return(<div className="fsAuthor" key={index}>{author}</div>)
      else return(<div className="fsAuthor" key={index}>{author},&nbsp;</div>)
    })
  }

  return (
    <div id="fsSongInfo">
      <img id="fsSongImage" src={ image } alt="fsSongImage" />
      <div id="fsSongDesc">
        <div id="fsTitle">{ title }</div>
        <div id="fsAuthors">{ authorsList }</div>
      </div>
    </div>
  )
}

export default FsSongInfo