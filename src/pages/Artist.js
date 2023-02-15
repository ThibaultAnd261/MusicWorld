import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Service from '../api/Service';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import TrackDiv from '../components/TrackDiv';
import Stars from '../components/Stars';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

const Artist = () => {
    const token = localStorage.getItem('tokenAuthor');
    const param = useParams();
    const service = Service;
    const history = useNavigate();


    const [artist, setArtist] = useState();
    const [artistTT, setArtistTT] = useState();
    const [artistAlb, setArtistAlb] = useState();
    const [artistRel, setArtistRelated] = useState();

    useEffect(() => {
        const getArtist = async () => {
            let artistRes = await service.getArtist(token, param.id);
            setArtist(artistRes.data);
        }
        const getArtistTT = async () => {
            let artistTT = await service.getArtistTopTracks(token, param.id);
            setArtistTT(artistTT.data.tracks);
        }
        const getArtistAlbums = async () => {
            let artistAlbums = await service.getArtistAlbums(token, param.id);
            setArtistAlb(artistAlbums.data.items);
        }
        const getArtistsRelated = async () => {
            let artistsRel = await service.getArtistRelatedArtists(token, param.id);
            setArtistRelated(artistsRel.data.artists);
        }

        getArtist();
        getArtistTT();
        getArtistAlbums();
        getArtistsRelated();
    }, [])

    if (artist && artistTT && artistAlb && artistRel) {
        return (
            <>
                <Navbar />
                <div className='bg-[#fffbf5]'>

                    <div className='pt-5 px-10'>
                        <button type="button" onClick={() => { history(-1) }} className="text-black bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Retour</button>
                        <h1 className='text-6xl font-bold pt-2'>{artist.name}.</h1>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between p-10'>
                        <div className='md:w-1/2'>
                            <img className='w-full' src={artist.images[0].url} alt="" />
                            <p className='text-lg py-2'>Genres : {artist.genres.map((genre, key) => {
                                return <span key={key} className='capitalize'>{genre}{key === (artist.genres.length) - 1 ? "" : " | "}</span>
                            })}</p>
                            <p className='text-lg py-2'>Nombre de followers : {(artist.followers.total).toLocaleString('fr-FR')}</p>
                            <Stars popularity={artist.popularity} />
                            <a href={"/artist/" + artist.id + "/discography"} className='w-full'>
                                <button type='button' className="text-black bg-green-600 w-full font-medium rounded-lg text-lg px-6 py-2.5 text-center my-10">
                                    Afficher la discographie
                                </button>
                            </a>

                        </div>

                        <div className='md:w-1/2 md:pl-5'>
                            <h1 className='text-xl font-medium pb-2'>Top Tracks :</h1>
                            <div>{artistTT.map((track, index) => {
                                return (
                                    <div className='p-2 my-4 shadow-inner shadow-green-600 hover:scale-105' key={index}>
                                        <TrackDiv track={track} />
                                    </div>
                                )
                            })}
                            </div>
                            <h1 className='text-xl font-medium pb-2'>Albums :</h1>
                            <div className='grid grid-cols-2 lg:grid-cols-3'>
                                {artistAlb.filter(album => 
                                    album.album_group === "album"
                                ).map((album, index) => {
                                    return (
                                        <Card key={index} list={album} type="Album" />
                                    )
                                })}
                            </div>
                            <h1 className='text-xl font-medium pb-2'>Artistes similaires :</h1>
                            <div className='grid grid-cols-2 sm:grid-cols-3'>
                                {artistRel.slice(0, 6).map((artist, index) => {
                                    return (
                                        <div key={index} className='m-3 flex flex-col items-center'>
                                            <Avatar artist={artist} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    } else {
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
    }
};

export default Artist;