import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Service from '../api/Service';
import Navbar from '../components/Navbar';

const Album = () => {
    const token = localStorage.getItem('tokenAuthor');
    const param = useParams();
    // console.log(param);

    const service = Service;
    // console.log(service);

    const [album, setAlbum] = useState();
    const [trackList, setTrackList] = useState();

    useEffect(() => {
        const getAlbum = async () => {
            let albumRes = await service.getAlbum(token, param.id);
            // console.log(albumRes.data.name);
            console.log(albumRes.data);
            setAlbum(albumRes.data);
            setTrackList(albumRes.data.tracks.items);
            console.log(albumRes.data.tracks.items);
        }
        getAlbum();
    }, [])

    if (album) {
        return (
            <>
                <Navbar />
                <div className='flex justify-between p-10'>
                    <div className='w-1/2'>
                        <img className='w-full' src={album.images[0].url} alt="" />
                        <p className='text-lg py-2'>{album.name} - {album.artists.map((artist, key) => {
                            return <span key={key}><b>{artist.name}</b> </span>
                        })
                        }
                        </p>
                        <p className='text-lg py-2'>Label : {album.label}</p>
                        <p className='text-lg py-2'>Sortie : {album.release_date}</p>
                        <p className='text-lg py-2'>Total tracks : {trackList.length}</p>
                    </div>

                    <div className='w-1/2 pl-4'>
                        <p className='text-lg'>Liste des tracks :</p>

                        <div>{trackList.map((track, key) => {
                            return (
                                <div className='py-2' key={key}>
                                    <span className='text-lg'>{track.track_number} : </span>
                                    <span className='text-lg'>"{track.name}", </span>
                                    {track.artists.map((artist, key2) => {
                                        return <span className='text-lg' key={key2}><b>{artist.name}</b>
                                            {key2 == (track.artists.length) - 1 ? "" : " / "}
                                        </span>
                                    })}
                                    <br />
                                </div>
                            )
                        })}</div>

                    </div>
                </div>

            </>
        );
    } else {
        return (
            <>
                <h1>Chargement</h1>
            </>
        )
    }
};

export default Album;