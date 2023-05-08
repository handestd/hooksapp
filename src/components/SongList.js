import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';
const SongList = () => {

    const addSong = (title)=> {
        setSongs([...songs,{title:title, id:uuidv4()}]);
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
        <NewSongForm addSong={addSong} />
    </div>);
}

export default SongList;