import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Player from './Player/Player'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">


        </div>
      </div>
      <Player />
    </Router>
  );
}

export default App;
