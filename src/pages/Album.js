import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Service from '../api/Service';
import Navbar from '../components/Navbar';
import TrackDiv from '../components/TrackDiv';
import Stars from '../components/Stars';

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

    function displayStars() {
        let arr = [];
        for (let index = 0; index < 10; index++) {
            if (index < (Math.floor(popularity / 10))) {
                arr.push(<svg aria-hidden="true" className="w-5 h-5 text-green-600" key={index} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)
            } else {
                arr.push(<svg aria-hidden="true" className="w-5 h-5 text-black" key={index} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)
            }
        }
        return arr;
    }

    if (album) {
        return (
            <>
                <Navbar />
                <div className='bg-[#fffbf5]'>

                    <div className='pt-5 px-10'>
                        <button type="button" onClick={() => { history(-1) }} className="text-black bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Retour</button>
                        <h1 className='text-6xl font-bold pt-2'>Page Album.</h1>
                    </div>
                    <div className='flex justify-between p-10'>

                        <div className='w-1/2'>
                            <img className='w-full' src={album.images[0].url} alt="" />
                            <p className='text-2xl py-2'>{album.name} - {album.artists.map((artist, key) => {
                                return <span key={key}><b className='cursor-pointer hover:underline'><a href={"/artist/" + artistId[key]}>{artist.name}</a></b> </span>
                            })
                            }
                            </p>
                            <p className='text-lg py-2'>Label : {album.label}</p>
                            <p className='text-lg py-2'>Sortie : {dateRelease}</p>
                            <p className='text-lg py-2'>Total tracks : {trackList.length}</p>
                            <Stars popularity={popularity} />
                        </div>

                        <div className='w-1/2 pl-5'>
                            <h1 className='text-xl font-medium'>Liste des tracks :</h1>

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
            </>
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

export default Album;