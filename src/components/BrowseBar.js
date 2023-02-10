import React from 'react';

const BrowseBar = (props) => {

    let defaultVal = Math.floor((props.limit)/2);

    return (
        <div className='bg-black p-5 sm:flex sm:items-center sm:justify-between sticky z-40 top-16'>
            <legend className='text-white text-lg sm:text-xl'> {props.feature == "NewRelease" ? "Les nouvelles sorties sur Spotify  " : "Playlists Spotify "}</legend>
            <div>
                <label className='text-white text-lg sm:text-xl pr-2' htmlFor="">Régler l'affichage : </label>
                <input type="number" min="0" max={props.limit} defaultValue={defaultVal} onChange={(e) => { props.func(e.target.value)}} className="h-8 bg-green-600 rounded-lg appearance-none cursor-pointer"></input>
            </div>

        </div>
    );
};

export default BrowseBar;