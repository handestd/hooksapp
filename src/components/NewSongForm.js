import React, { useState } from 'react';

const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }

    return ( <form onSubmit={handleSubmit}>
        <label htmlFor="">Song name:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <input type="submit" value="add song"/>
    </form> );
}
 
export default NewSongForm;