import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Service from '../api/Service';
import Card from '../components/Card';

const Browse = () => {

    const token = localStorage.getItem('tokenAuthor');

    const service = Service;
    const [releaseList, setReleaseList] = useState();
    const [categorieList, setCategorieList] = useState();

    useEffect(() => {
        const loadNewRel = async () => {
            let listRel = await service.release(token);
            // console.log(listRel.data.albums.items);
            // console.log("new rel----");
            setReleaseList(listRel.data.albums.items)
        }

        const loadCate = async () => {
            let listCate = await service.categorie(token);
            // console.log(listCate.data.categories.items);
            // console.log("listCate----");
            setCategorieList(listCate.data.categories.items)
        }

        const loadFeat = async () => {
            let listFeat = await service.featuredPlay(token);
            // console.log(listFeat.data.playlists.items);
            // console.log("listFeat-----");
        }

        const loadReco = async () => {
            let listReco = await service.recommendations(token);
            // console.log(listReco);
        }

        loadNewRel();
        loadCate();
        loadFeat();
        loadReco();
    }, [])

    if (releaseList) {
        return (
            <>
                <Navbar />
                <h1>Browse Page</h1>
                <br />
                <h1>Voici la liste des nouvelles sorties Spotify</h1>

                <div className='grid grid-cols-4 p-8'>
                {/* <div className='flex flex-wrap justify-between p-8'> */}
                    {releaseList.map((elmtRelease, key) => {
                        return <Card key={key} list={elmtRelease} />
                    })}
                </div>

                <br />
                <h1>Voici des playlists Spotify </h1>
                {/* <Card /> */}
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