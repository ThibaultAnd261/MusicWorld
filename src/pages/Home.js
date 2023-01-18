import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Service from '../api/Service';

const Home = () => {

    // const token = localStorage.getItem('tokenAuthor')

    // const service = Service;
    // const [releaseList, setReleaseList] = useState();


    // useEffect(() => {
    //     let numRand = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    //     const loadNewRel = async () => {
    //         // console.log(numRand);
    //         let listRel = await service.release(token);
    //         // console.log(listRel.data.albums.items[numRand]);
    //         setReleaseList(listRel.data.albums.items[numRand]);
    //     }
    //     loadNewRel();
    // }, []);

    return (
        <>
            <Navbar />
            <HeroSection />

            <h1>home</h1>
        </>
    );
};

export default Home;