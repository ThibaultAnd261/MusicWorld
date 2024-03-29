import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Service from '../api/Service';
import Card from '../components/Card';
import BrowseBar from '../components/BrowseBar';
import Footer from '../components/Footer';

const Browse = () => {

    const token = localStorage.getItem('tokenAuthor');

    const service = Service;
    const [releaseList, setReleaseList] = useState();
    const [categorieList, setCategorieList] = useState();
    const [featPlayList, setFeaturedPlaylist] = useState();

    const [rangeValue1, setRangeValue1] = useState(16); // rangeValue pour la première bar
    const [rangeValue2, setRangeValue2] = useState(4); // rangeValue pour la deuxième bar

    const [length1, setFirstLength] = useState();
    const [length2, setSecondLength] = useState();

    useEffect(() => {
        const loadNewRel = async () => {
            let listRel = await service.release(token);
            setFirstLength(listRel.data.albums.items.length);
            setReleaseList(listRel.data.albums.items);
        }

        const loadCate = async () => {
            let listCate = await service.categorie(token);
            setCategorieList(listCate.data.categories.items)
        }

        const loadFeat = async () => {
            let listFeat = await service.featuredPlay(token);
            setFeaturedPlaylist(listFeat.data.playlists.items);
            setSecondLength(listFeat.data.playlists.items.length);
        }

        const loadReco = async () => {
            let listReco = await service.recommendations(token);
        }

        loadNewRel();
        loadCate();
        loadFeat();
        loadReco();
    }, [])

    const rangeFct1 = (rangeVl) => {
        setRangeValue1(rangeVl);
    }

    const rangeFct2 = (rangeVl) => {
        setRangeValue2(rangeVl);
    }


    if (releaseList) {
        return (
            <>
                <Navbar />

                <BrowseBar feature={"NewRelease"} defaultVal={12} func={rangeFct1} limit={length1} />

                <div className='grid grid-cols-2 sm:grid-cols-4 p-8 sm:p-16'>
                    {releaseList ? releaseList.slice(0, rangeValue1).map((elmtRelease, key) => {
                        return <Card key={key} list={elmtRelease} type="Album" />
                    }) : "Chargement..."}
                </div>
                <BrowseBar feature={"FeaturedPlay"} defaultVal={4} func={rangeFct2} limit={length2} />
                <div className='grid grid-cols-2 sm:grid-cols-4 p-8 sm:p-16'>
                    {featPlayList ? featPlayList.slice(0, rangeValue2).map((playlist, key) => {
                        return <Card key={key} list={playlist} type="Playlist" />
                    }) : "Chargement..."}
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

export default Browse;