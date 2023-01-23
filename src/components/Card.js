import React from 'react';

const Card = (props) => {
    let list = props.list;

    if (props.type == "Album") {
        return (
            <div className='flex flex-col items-center bg-green-600 m-[5px] p-[10px] rounded-lg hover:scale-105 '>
                <img className="w-[150px] animate__animated animate__fadeInRight animate__delay-.5s" src={list.images[0].url} alt="" />
                <h1 className='w-[150px] h-[20px] text-center truncate hover:text-clip'>{list.name}</h1>
                <p className='w-[150px] text-center'>{(list.artists.length > 1 ? "Artistes" : "Artiste")} : {list.artists.map((artist, key) => {
                    return <span key={key}><b>{artist.name}</b>{key == (list.artists.length) - 1 ? "" : ", "}</span>
                })}</p>
                <h3>{list.type}</h3>
            </div>
        );
    }
    else {
        return (
            // <div>Test</div>
            <div className='flex flex-col items-center bg-green-600 m-[5px] p-[10px] rounded-lg hover:scale-105 '>
                <img src={list.images[0].url} alt="" />
                <h1 className='w-[150px] h-[20px] text-center truncate hover:text-clip'>{list.name}</h1>
                <p className='w-[150px] text-center'><b>{list.owner.display_name}</b></p>
                <p className='w-[150px] text-center mt-[10px]'>{list.description}</p>
            </div>
        )
    }

};

export default Card;