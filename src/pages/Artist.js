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
            <div>
                <Navbar />
                <div className='pt-5 px-10'>
                    <button type="button" onClick={() => { history(-1) }} className="text-black bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Retour</button>
                </div>
                <img className='w-[350px]' src={artist.images[0].url} alt="" />
                <p>Artiste : {artist.name}</p>
                <p>Nombre de followers : {artist.followers.total}</p>
            </div>
        );
    } else {
        <p>Chargement...</p>
    }
};

export default Artist;