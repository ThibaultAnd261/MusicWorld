import React from 'react';

const BrowseBar = (props) => {

    let defaultVal = Math.floor((props.limit)/2);

    return (
        <div className='bg-black p-[20px] flex items-center justify-between'>
            <legend className='text-white text-lg'> {props.feature == "NewRelease" ? "Les nouvelles sorties sur Spotify : " : "Jsp"}</legend>
            <div>
                <label className='text-white text-lg pr-[5px]' htmlFor="">Régler l'affichage : </label>
                <input type="number" min="0" max={props.limit} defaultValue={defaultVal} onChange={(e) => { props.func(e.target.value)}} className="h-8 bg-green-600 rounded-lg appearance-none cursor-pointer"></input>
            </div>

        </div>
    );
};

export default BrowseBar;