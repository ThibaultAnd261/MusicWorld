import React from 'react';
import Navbar from '../components/Navbar';

const Browse = (props) => {
    console.log(props.token);
    return (
        <>
            <Navbar />
            <h1>Browse Page</h1>
            {/* <h1>{props.token}</h1> */}
        </>
    );
};

export default Browse;