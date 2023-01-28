import React from 'react';

const Card = (props) => {
    let list = props.list;

    if (list) {
        if (props.type === "Album") {
            return (
                <div className='flex flex-col items-center bg-green-600 m-3 p-3 rounded-lg hover:scale-105 relative'>
                    <img className="w-full animate__animated animate__fadeInRight animate__delay-.5s" src={list.images[0].url} alt="" />
                    <h1 className='w-full h-8 text-center truncate hover:text-clip'>{list.name}</h1>
                    <p className='w-full text-center'>{(list.artists.length > 1 ? "Artistes" : "Artiste")} : {list.artists.map((artist, key) => {
                        return <span key={key}><b>{artist.name}</b>{key === (list.artists.length) - 1 ? "" : ", "}</span>
                    })}</p>
                    <h3 className='mt-3 mb-20 capitalize'>{list.album_type}</h3>
                    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full absolute bottom-2">
                        <a href={"/album/" + list.id} className='text-sm'>
                            Plus d'informations
                        </a>
                    </button>
                </div>
            );
        }
        else if(props.type === "Playlist"){
            return (
                <div className='flex flex-col items-center bg-green-600 m-[5px] p-[10px] rounded-lg hover:scale-105 relative'>
                    <img src={list.images[0].url} alt="" />
                    <h1 className='w-[150px] h-[20px] text-center truncate hover:text-clip'>{list.name}</h1>
                    <p className='w-[150px] text-center'><b>{list.owner.display_name}</b></p>
                    <p className='w-[150px] text-center mt-[10px] mb-[40px]'>{list.description}</p>
                    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-2">
                        Plus d'informations
                    </button>
                </div>
            )
        }
    } else {
        return <p>Chargement...</p>
    }

};

export default Card;