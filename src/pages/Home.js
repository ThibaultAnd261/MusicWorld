import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Service from '../api/Service';
import Footer from '../components/Footer';

const Home = () => {
    const token = localStorage.getItem('tokenAuthor');

    const service = Service;
    const [releaseList, setReleaseList] = useState();

    useEffect(() => {
        let numRand = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
        const loadNewRel = async () => {
            let listRel = await service.release(token);
            setReleaseList(listRel.data.albums.items[numRand]);
        }
        loadNewRel();
    }, []);

    if (releaseList) {
        return (
            <>
                <Navbar />
                <HeroSection releaseList={releaseList} />
                <h1 className='text-6xl text-red-600 font-bold pt-2 text-center break-normal'>Projet en cours !!</h1>
                <div className='p-10'>
                    <div className='flex flex-col justify-center items-center my-5'>
                        <h1 className='text-5xl md:text-7xl font-bold pt-2 text-center break-normal'>Bienvenue sur MusicWorld !</h1>
                        <h1 className='text-2xl md:text-3xl pt-5 text-justify break-normal'>L'application qui vous donne des données sur le monde de la musique.</h1>
                    </div>
                    <div className='flex flex-col justify-center my-16'>
                        <div className='text-xl md:text-2xl py-5 text-justify break-normal flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            <span className='ml-2'>
                                Parcourez rapidement l'application.
                            </span>
                        </div>
                        <div className='text-xl md:text-2xl py-5 text-justify break-normal flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            <span className='ml-2'>
                                Obtenez des informations sur un album, un artiste,...
                            </span>
                        </div>
                        <div className='text-xl md:text-2xl py-5 text-justify break-normal flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <span className='ml-2'>
                                Faites vos recherches directement.
                            </span>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    } else {
        return (
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
        )
    }

};

export default Home;