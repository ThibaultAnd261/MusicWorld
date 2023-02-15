import React, { useEffect, useState } from 'react';
import Service from '../api/Service';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const Search = () => {
    const token = localStorage.getItem('tokenAuthor');
    const service = Service;

    const [resultSearch,setResultSearch]=useState();

    const search = async(q) => {
        let searchRes = await service.search(token,q);
        setResultSearch(searchRes.data.artists.items);
        console.log(searchRes.data.artists.items);
    }
    
    function displayItems(){
        if(resultSearch === undefined){
            return <p>Insérez une requête</p>
        } else {
            resultSearch.map((res)=>{
                return <p>{res.name}</p>
            })
        }
    }

    return (
        <>
            <Navbar />
            <div className='bg-[#fffbf5]'>
                <SearchBar func={search}/>
                {displayItems()}
            </div>
            <Footer />
        </>
    );
};

export default Search;