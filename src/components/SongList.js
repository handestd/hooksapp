import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const SongList = () => {

    const addSong = ()=> {
        setSongs([...songs,{title:'vcl', id:uuidv4()}]);
    }

    const [songs,setSongs] = useState([
        { title: 'almost home 2', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wildl darkness', id: 3 }
    ]);
    return (<div className="song-list">
        <ul>
            {songs.map(song => {
                return (<li key={song.id}>{song.title}</li>);
            })}
        </ul>
        <button onClick={addSong}>Add a song</button>
    </div>);
}

export default SongList;