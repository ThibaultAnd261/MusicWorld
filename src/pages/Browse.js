import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Service from '../api/Service';
import Card from '../components/Card';
import BrowseBar from '../components/BrowseBar';

const Browse = () => {

    const token = localStorage.getItem('tokenAuthor');

    const service = Service;
    const [releaseList, setReleaseList] = useState();
    const [categorieList, setCategorieList] = useState();
    const [featPlayList, setFeaturedPlaylist] = useState();

    const [rangeValue1, setRangeValue1] = useState(10); // rangeValue pour la première bar
    const [rangeValue2, setRangeValue2] = useState(4); // rangeValue pour la première bar

    const [length1, setFirstLength] = useState();
    const [length2, setSecondLength] = useState();

    useEffect(() => {
        const loadNewRel = async () => {
            let listRel = await service.release(token);
            // console.log(listRel.data.albums.items.length);
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

                <BrowseBar feature={"NewRelease"} func={rangeFct1} limit={length1}/>

                <div className='grid grid-cols-4 p-8'>
                    {releaseList.slice(0, rangeValue1).map((elmtRelease, key) => {
                        return <Card key={key} list={elmtRelease} type="Album"/>
                    })}
                </div>
                <BrowseBar feature={"FeaturedPlay"} func={rangeFct2} limit={length2}/>
                <div className='grid grid-cols-4 p-8'>
                    {featPlayList.slice(0, rangeValue2).map((playlist,key) => {
                        return <Card key={key} list={playlist} type="Playlist"/>
                    })}
                </div>
                <br />
            </>
        );
    } else {
        return (
            <>
                <p>Chargement....</p>
            </>
        )
    }
};

export default Browse;