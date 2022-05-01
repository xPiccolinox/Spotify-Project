import { useNavigate } from 'react-router-dom'
import './Topbar.css'

const Topbar = () => {
  const navigate = useNavigate()

  return(
    <div id="topbar">
      <img src="./icons/topbar/goBack.png" onClick={() => {navigate(-1)}} />
      <img src="./icons/topbar/goForward.png" onClick={() => {navigate(1)}} />
    </div>
  )
}

export default Topbar