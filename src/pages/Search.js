import React, { useEffect, useState } from 'react';
import Service from '../api/Service';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Avatar from '../components/Avatar';

const Search = () => {
    const token = localStorage.getItem('tokenAuthor');
    const service = Service;

    const [resultSearch, setResultSearch] = useState("");

    const search = async (q,type) => {
        if (q === "") {
            setResultSearch("");
        } else {
            let searchRes = await service.search(token, q, "artist");
            console.log(searchRes.data.artists.items);
            setResultSearch(searchRes.data.artists.items);
        }
    }

    return (
        <>
            <Navbar />
            <div className='bg-[#fffbf5]'>
                <SearchBar func={search} />
                <div className='pt-5 px-10'>
                    <h1 className='text-2xl md:text-3xl py-5 text-center break-normal font-semibold underline'>Artistes trouvés :</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-4'>
                        {resultSearch ? resultSearch.map((res, key) => {
                            return (
                                <div key={key} className='m-3 flex flex-col items-center'>
                                    <Avatar key={key} artist={res} />
                                </div>
                            )
                        }) : <p>Insère une requete</p>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Search;