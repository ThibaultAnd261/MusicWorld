import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Service from '../api/Service';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import TrackDiv from '../components/TrackDiv';
import Stars from '../components/Stars';
import Avatar from '../components/Avatar';

// TODO : Faire un tri sur les albums (enlever les doublons, les albums avec qu'une seule musique,...)

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
            console.log(artistRes.data);
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
            // console.log(artistsRel.data.artists);
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
                <div className='pt-5 px-10'>
                    <button type="button" onClick={() => { history(-1) }} className="text-black bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Retour</button>
                    <h1 className='text-6xl font-bold pt-2'>{artist.name}.</h1>
                </div>

                <div className='flex justify-between p-10'>
                    <div className='w-1/2'>
                        <img className='w-full' src={artist.images[0].url} alt="" />
                        <p className='text-lg py-2'>Genres : {artist.genres.map((genre, key) => {
                            return <span key={key} className='capitalize'>{genre}{key === (artist.genres.length) - 1 ? "" : " | "}</span>
                        })}</p>
                        <p className='text-lg py-2'>Nombre de followers : {(artist.followers.total).toLocaleString('fr-FR')}</p>
                        <Stars popularity={artist.popularity} />
                    </div>

                    <div className='w-1/2 pl-5'>
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
                        <div className='grid grid-cols-3'>
                            {artistAlb.filter(album =>
                                album.album_type === "album"
                            ).map((album, index) => {
                                return (
                                    <Card key={index} list={album} type="Album" />
                                )
                            })}
                        </div>
                        <h1 className='text-xl font-medium pb-2'>Artistes similaires :</h1>
                        <div className='grid grid-cols-3'>
                            {artistRel.slice(0,6).map((artist, index) => {
                                return (
                                    <div key={index} className='m-3 flex flex-col items-center'>
                                        <Avatar artist={artist} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        <p>Chargement...</p>
    }
};

export default Artist;