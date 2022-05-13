import React, {Dispatch, SetStateAction} from 'react'
import '../Styles/Navbar.css'
import atMitski from '../Images/at-mistki.jpg';

type Playlist = {
    name: string,
    songTitles: Array<string>,
    songArtists: Array<string>,
    songNotes: Array<string>
}

function Navbar(props: {playlists: Array<Playlist>, setPlaylists: Dispatch<SetStateAction<Array<Playlist>>>}) {
    let playlistNames : Array<string> = []
    props.playlists.forEach(item => playlistNames.push(item.name));

    return (
        <header>
            <div className="primary_header">
                <div className="title">Beatrice and <br/>Mallory's Mixtapes</div>
                <div><img id="mitski_photo" src={atMitski}/></div>
            </div>
            <nav className="secondary_header" id="menu">
                {playlistNames.map(item =>
                    <div>{item}</div>
                )}
            </nav>
        </header>
    )
}

export default Navbar;