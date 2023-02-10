import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const Search = (props) => {
    return (
        <>
            <Navbar />
            <div className='bg-[#fffbf5]'>
                <SearchBar />
            </div>
        </>
    );
};

export default Search;