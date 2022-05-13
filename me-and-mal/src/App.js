import logo from './logo.svg';
import './Styles/Body.css'
import Navbar from './Components/Navbar.tsx'
import {useState} from "react";

function App() {
    const plist1 = {name: "New Playlist :-)", songTitles: [], songArtists: [], songNotes: []};
    const plist2 = {name: "2nd playlist", songTitles: [], songArtists: [], songNotes: []};
    const [playlists, setPlaylists] = useState([plist1, plist2]);

  return (
    <div className="App">
        <Navbar playlists={playlists} setPlaylists={setPlaylists}/>
    </div>
  );
}

export default App;
