import React from 'react';

const Avatar = (props) => {

    if(props){
        return (
            <>
                <img src={props.artist.images[0].url} className='w-36 h-36 rounded-full' alt="" />
                <b className='text-lg cursor-pointer hover:underline text-center'><a href={"/artist/" + props.artist.id}>{props.artist.name}</a></b>
            </>
        );
    } else {
        <p>Chargement..</p>
    }
};

export default Avatar;