import React from 'react';

const Card = (props) => {

    let list = props.list;
    // console.log(list);
    return (
        <div className='flex flex-col items-center'>
            <img className="w-[150px] animate__animated animate__fadeInRight animate__delay-.5s" src={list.images[0].url } alt="" />
            <h1 className='w-[150px] h-[20px] text-center truncate hover:text-clip'>{list.name}</h1>
            <p className='w-[150px] text-center'>{(list.artists.length > 1 ? "Artistes" : "Artiste")} : {list.artists.map((artist, key)=>{
                return <span key={key}>{artist.name}{key == (list.artists.length)-1 ? "" : ", "}</span>
            })}</p>
            <h3>{list.type}</h3>
        </div>
    );

};

export default Card;