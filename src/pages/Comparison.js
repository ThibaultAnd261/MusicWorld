import React from 'react';
import Navbar from '../components/Navbar';

const Comparison = (props) => {
    console.log(props.token);
    return (
        <>
            <Navbar />
            <h1>COmparison</h1>
        </>
    );
};

export default Comparison;