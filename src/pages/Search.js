import React from 'react';
import Navbar from '../components/Navbar';

const Search = (props) => {
    console.log(props.token);
    return (
        <div>
            <Navbar />
            <h1>search page</h1>
        </div>
    );
};

export default Search;