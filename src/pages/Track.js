import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Service from '../api/Service';
import Avatar from '../components/Avatar';
import Navbar from '../components/Navbar';

const Track = () => {
    const token = localStorage.getItem('tokenAuthor');
    const param = useParams();
    const history = useNavigate();

    const service = Service;

    const [track, setTrack] = useState();
    const [artistsList, setArtistList] = useState([]);

    useEffect(() => {
        const getTrack = async () => {
            let track = await service.getTrack(token, param.id);
            setTrack(track.data);

            track.data.artists.map((art) => {
                getArtist(art.id);
            })

        }


        getTrack()
    }, [])

    const getArtist = async (artistIdentifiant) => {
        let artist = await service.getArtist(token, artistIdentifiant);
        setArtistList(artistsList => [...artistsList, artist.data]);
    }

    function convertMilli(millis){
        let mn = Math.floor(millis/60000)
        let sec = Math.floor(millis / 1000) % 60
        // return (mn === 0 ? '':'') + (mn === 1 ? '  minute ' : ' minutes ') + (sec < 10 ? '0' : '') + sec + (sec === 1 ? '  seconde' : ' secondes')
        return (mn === 0 ? '': (mn === 1 ? '  minute ' : mn + ' minutes ')) + (sec < 10 ? '0' : '') + sec + (sec === 1 ? '  seconde' : ' secondes')
    }

    // console.log(track)

    if (track && artistsList) {
        return (
            <div>
                <Navbar />
                <div className='pt-5 px-10'>
                    <button type="button" onClick={() => { history(-1) }} className="text-black bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Retour</button>
                    <h1 className='text-6xl font-bold pt-2'>Track.</h1>
                </div>
                <div className='p-10'>
                    <h3 className='text-xl font-medium pb-5'>Nom : {track.name}</h3>
                    <p className='text-xl pb-5'>Durée : {convertMilli(track.duration_ms)}</p>
                    <p className='text-xl pb-5'>{artistsList.length === 1 ? "Artiste présent sur ce track : " : "Artistes présents sur ce track :"}</p>
                    <div className='flex flex-wrap justify-between'>
                        {artistsList.map((artist, index) => {
                            return (
                                <div key={index} className='m-3 flex flex-col items-center'>
                                    <Avatar artist={artist} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
                    <div className="flex items-center">
                        <span className="text-3xl mr-4">Chargement des données...</span>
                        <svg className="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
                            <path className="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                    </div>
                </div>
            </>
        )
    }
};

export default Track;