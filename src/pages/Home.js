import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Service from '../api/Service';

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
                <HeroSection releaseList={releaseList}/>
                <h1>Bienvenue</h1>
            </>
        );
    } else {
        return (
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
        )
    }

};

export default Home;