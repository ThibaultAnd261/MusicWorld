import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Comparison = (props) => {
    console.log(props.token);
    return (
        <>
            <Navbar />
            <h1>Comparison</h1>
            <Footer />
        </>
    );
};

export default Comparison;