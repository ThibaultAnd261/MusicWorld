import React from 'react';

const TrackDiv = (props) => {
    if (props) {
        return (
            <div className='p-2 my-4 shadow-inner shadow-green-600 hover:scale-105' key={props.key}>
                <span className='text-lg'>{props.track.track_number} : </span>
                <span className='text-lg'><a href={"/track/" + props.track.id} className='cursor-pointer hover:underline'>"{props.track.name}"</a>, </span>
                {props.track.artists.map((artist, key2) => {
                    return <span className='text-lg' key={key2}><b className='cursor-pointer hover:underline'><a href={"/artist/" + artist.id}>{artist.name}</a></b>
                        {key2 == (props.track.artists.length) - 1 ? "" : " / "}
                    </span>
                })}
                <br />
            </div>
        );
    } else {
        <p>Chargement</p>
    }
};

export default TrackDiv;