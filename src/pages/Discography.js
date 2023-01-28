import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Service from '../api/Service';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Discography = () => {
    const token = localStorage.getItem('tokenAuthor');
    const param = useParams();
    const service = Service;
    const history = useNavigate();

    const [artist, setArtist] = useState();
    const [artistAlb, setArtistAlb] = useState();
    const [artistSingle, setArtistSingle] = useState();
    const [artistAppartion, setArtistApparition] = useState();

    useEffect(() => {
        const getArtist = async () => {
            let artistRes = await service.getArtist(token, param.id);
            setArtist(artistRes.data);
        }
        const getArtistAlbums = async () => {
            let artistAlbum = await service.getArtistDiscography(token, param.id, "&include_groups=album");
            console.log(artistAlbum.data.items);
            setArtistAlb(artistAlbum.data.items);
        }
        const getArtistSingles = async () => {
            let artistSingle = await service.getArtistDiscography(token, param.id, "&include_groups=single");
            setArtistSingle(artistSingle.data.items);
        }
        const getArtistApparition = async () => {
            let artistAppartion = await service.getArtistDiscography(token, param.id, "&include_groups=appears_on");
            setArtistApparition(artistAppartion.data.items);
        }
        getArtist();
        getArtistAlbums();
        getArtistSingles();
        getArtistApparition();
    }, []);

    if (artist && artistAlb && artistSingle) {
        return (
            <>
                <Navbar />
                <div className='pt-5 px-10'>
                    <button type="button" onClick={() => { history(-1) }} className="text-black bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Retour</button>
                    <div className='flex items-center'>
                        <h1 className='text-6xl font-bold pt-2'>
                            Discographie | {artist.name}.
                        </h1>
                        <img className='w-32 h-32 rounded-full ml-4' src={artist.images[0].url} alt="" />
                    </div>
                </div>

                <div className='p-10'>
                    <h1 className='text-xl font-medium pb-2'>{artistAlb.length > 1 ? "Albums produits : ": "Album produit : "}</h1>
                    <div className='grid grid-cols-4'>
                        {artistAlb.map((album, key) => {
                            return (
                                <Card key={key} list={album} type={"Album"} />
                            )
                        })}
                    </div>
                </div>

                <div className='p-10'>
                    <h1 className='text-xl font-medium pb-2'>{artistSingle.length > 1 ? "Singles produits :": "Single produit :"}</h1>
                    <div className='grid grid-cols-4'>
                        {artistSingle.map((album, key) => {
                            return (
                                <Card key={key} list={album} type={"Single"} />
                            )
                        })}
                    </div>
                </div>

                <div className='p-10'>
                    <h1 className='text-xl font-medium pb-2'>{artistAppartion.length > 1 ? "Apparitions :": "Apparition :"}</h1>
                    <div className='grid grid-cols-4'>
                        {artistAppartion.map((album, key) => {
                            return (
                                <Card key={key} list={album} type={"Single"} />
                            )
                        })}
                    </div>
                </div>
            </>
        );
    } else {
        <p>Chargement..</p>
    }
};

export default Discography;