import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Service from '../api/Service';
import Navbar from '../components/Navbar';
import TrackDiv from '../components/TrackDiv';
import Stars from '../components/Stars';
import Footer from '../components/Footer';

const Album = () => {
    const token = localStorage.getItem('tokenAuthor');
    const param = useParams();
    const history = useNavigate();

    const service = Service;

    const [album, setAlbum] = useState();
    const [trackList, setTrackList] = useState();
    const [popularity, setPopularity] = useState();
    const [dateRelease, setDateRelease] = useState();
    const [artistId, setArtistId] = useState([]); // permet de définir les id nécéssaires pour les principaux de l'album

    useEffect(() => {
        const getAlbum = async () => {
            let albumRes = await service.getAlbum(token, param.id);
            setAlbum(albumRes.data);
            setTrackList(albumRes.data.tracks.items);
            setPopularity(albumRes.data.popularity);
            albumRes.data.artists.map(artist => {
                setArtistId(artistId => [...artistId, artist.id]) // <=> push des elmts dans une array
            });

            const date = new Date(albumRes.data.release_date);
            setDateRelease(date.toLocaleDateString());
        }
        getAlbum();
    }, [])

    if (album) {
        return (
            <>
                <Navbar />
                <div className='bg-[#fffbf5]'>
                    <div className='pt-5 px-10'>
                        <button type="button" onClick={() => { history(-1) }} className="text-black bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Retour</button>
                        <h1 className='text-6xl font-bold pt-2'>Page Album.</h1>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between p-10'>
                        <div className='sm:w-1/2'>
                            <img className='w-full' src={album.images[0].url} alt="" />
                            <p className='text-lg md:text-xl py-2 text-justify'>{album.name} - {album.artists.map((artist, key) => {
                                return <span key={key}><b className='cursor-pointer hover:underline'><a href={"/artist/" + artistId[key]}>{artist.name}</a></b> </span>
                            })
                            }
                            </p>
                            <p className='text-lg md:text-xl py-2 text-justify'>Label : {album.label}</p>
                            <p className='text-lg md:text-xl py-2 text-justify'>Sortie : {dateRelease}</p>
                            <p className='text-lg md:text-xl py-2 text-justify'>Total tracks : {trackList.length}</p>
                            <Stars popularity={popularity} />
                        </div>

                        <div className='pt-10 sm:pt-0 sm:w-1/2 sm:pl-5'>
                            <h1 className='text-xl md:text-2xl font-medium'>Liste des tracks :</h1>

                            <div>{trackList.map((track, index) => {
                                return (
                                    <div className='p-2 my-4 shadow-inner shadow-green-600 hover:scale-105' key={index}>
                                        <TrackDiv track={track} nbTrack={true} />
                                    </div>
                                )
                            })}</div>

                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex flex-col items-center justify-center">
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
                    <div className='flex items-center'>
                        <span className="text-2xl my-4">(N'hésitez pas à recharger)</span>
                    </div>
                </div>
            </>
        )
    }
};

export default Album;