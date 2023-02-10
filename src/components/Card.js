import React from 'react';

const Card = (props) => {
    let list = props.list;
    
    if (list) {
        if (props.type === "Album" || props.type === "Single") {
            return (
                <div className='flex flex-col items-center bg-green-600 p-2 mr-3 my-3 rounded-lg hover:scale-105 relative'>
                    <img className="w-full animate__animated animate__fadeInRight animate__delay-.5s" src={list.images[0].url} alt="" />
                    <h1 className='w-full h-8 text-center truncate hover:text-clip md:text-xl'>{list.name}</h1>
                    <p className='w-full text-center md:text-xl'>{(list.artists.length > 1 ? "Artistes" : "Artiste")} : {list.artists.map((artist, key) => {
                        return <span key={key}><b className='cursor-pointer hover:underline'><a href={"/artist/" + artist.id}>{artist.name}</a></b>{key === (list.artists.length) - 1 ? "" : ", "}</span>
                    })}</p>
                    <h3 className='mt-3 mb-20 capitalize md:text-xl'>{list.album_type}</h3>
                    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-2">
                        <a href={"/album/" + list.id} className='text-sm md:text-xl'>
                            Plus d'informations
                        </a>
                    </button>
                </div>
            );
        }
        else if(props.type === "Playlist"){
            return (
                <div className='flex flex-col items-center bg-green-600 p-2 mr-3 my-3 rounded-lg hover:scale-105 relative'>
                    <img src={list.images[0].url} alt="" />
                    <h1 className='w-full h-8 text-center truncate hover:text-clip'>{list.name}</h1>
                    <p className='w-full text-center'><b>{list.owner.display_name}</b></p>
                    <p className='w-full truncate text-center break-words mt-3 mb-20'>{list.description}</p>
                    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-2">
                        <a href="" className='text-sm'>
                            Plus d'informations
                        </a>
                    </button>
                </div>
            )
        }
    } else {
        return <p>Chargement...</p>
    }

};

export default Card;