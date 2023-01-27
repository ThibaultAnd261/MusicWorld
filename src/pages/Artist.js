import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Service from '../api/Service';
import Navbar from '../components/Navbar';

const Artist = () => {
    const token = localStorage.getItem('tokenAuthor');
    const param = useParams();
    const service = Service;
    const history = useNavigate();


    const [artist, setArtist] = useState();

    useEffect(() => {
        const getArtist = async () => {
            let artistRes = await service.getArtist(token, param.id);
            setArtist(artistRes.data);
            console.log(artistRes.data);
        }
        getArtist()
    }, [])

    if (artist) {
        return (
            <>
                <Navbar />
                <div className='pt-5 px-10'>
                    <button type="button" onClick={() => { history(-1) }} className="text-black bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Retour</button>
                </div>

                <div className='flex justify-between p-10'>
                    <div className='w-1/2'>
                        <img className='w-full' src={artist.images[0].url} alt="" />
                        <p className='text-lg py-2'>Artiste : <b>{artist.name}</b></p>
                        <p className='text-lg py-2'>Genres : {artist.genres.map((genre, key) => {
                            return <span key={key} className='capitalize'>{genre}{key == (artist.genres.length) - 1 ? "" : " | "}</span>
                        })}</p>
                        <p className='text-lg py-2'>Nombre de followers : {(artist.followers.total).toLocaleString('fr-FR ')}</p>
                    </div>

                    <div className='w-1/2 pl-4'>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                    </div>
                </div>
            </>
        );
    } else {
        <p>Chargement...</p>
    }
};

export default Artist;