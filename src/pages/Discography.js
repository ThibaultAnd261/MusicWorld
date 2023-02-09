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

    if (artist && artistAlb && artistSingle && artistAppartion) {
        return (
            <>
                <Navbar />
                <div className='bg-[#fffbf5]'>

                    <div className='pt-5 px-10'>
                        <button type="button" onClick={() => { history(-1) }} className="text-black bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Retour</button>
                        <div className='flex items-center'>
                            <h1 className='text-6xl font-bold pt-2'>
                                Discographie | {artist.name}.
                            </h1>
                            <img className='w-32 h-32 rounded-full ml-4' src={artist.images[0].url} alt="" />
                        </div>
                    </div>

                    <div className='bg-[#fffbf5] sticky z-50 top-14'>
                        <h1 className='text-xl font-medium px-10 py-5'>{artistAlb.length > 1 ? "Albums produits : " : "Album produit : "}</h1>
                    </div>
                    <div className='p-10'>
                        <div className={artistAlb.length === 0 ? "" : "grid grid-cols-4"}>
                            {artistAlb.length === 0 ? <p className='text-lg py-2 text-center'>Aucun album produit</p> : artistAlb.map((album, key) => {
                                return (
                                    <Card key={key} list={album} type={"Album"} />
                                )
                            })}
                        </div>
                    </div>

                    <div className='bg-[#fffbf5] sticky z-50 top-14'>
                        <h1 className='text-xl font-medium px-10 py-5'>{artistSingle.length > 1 ? "Singles produits :" : "Single produit :"}</h1>
                    </div>
                    <div className='p-10'>
                        <div className={artistSingle.length === 0 ? "" : "grid grid-cols-4"}>
                            {artistSingle.length === 0 ? <p className='text-lg py-2 text-center'>Aucun single produit</p> : artistSingle.map((album, key) => {
                                return (
                                    <Card key={key} list={album} type={"Single"} />
                                )
                            })}
                        </div>
                    </div>

                    <div className='bg-[#fffbf5] sticky z-50 top-14'>
                        <h1 className='text-xl font-medium px-10 py-5'>{artistAppartion.length > 1 ? "Apparitions :" : "Apparition :"}</h1>
                    </div>
                    <div className='p-10'>
                        <div className={artistAppartion.length === 0 ? "" : "grid grid-cols-4"}>
                            {artistAppartion.length === 0 ? <p className='text-lg py-2 text-center'>Aucun(e) featuring/apparition</p> : artistAppartion.map((album, key) => {
                                return (
                                    <Card key={key} list={album} type={"Single"} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
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
    }
};

export default Discography;