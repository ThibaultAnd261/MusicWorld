import React from 'react';

const Stars = (props) => {

    function displayStars() {
        let arr = [];
        for (let index = 0; index < 10; index++) {
            if (index < (Math.floor(props.popularity / 10))) {
                arr.push(<svg aria-hidden="true" className="w-5 h-5 text-green-600" key={index} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)
            } else {
                arr.push(<svg aria-hidden="true" className="w-5 h-5 text-black" key={index} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)
            }
        }
        return arr;
    }

    if (props) {
        return (
            <div className="flex flex-col md:flex-row py-2 md:items-center">
                <div className='flex'>
                    {displayStars()}
                </div>
                <p className="text-base md:ml-2">Une popularité classée à {props.popularity}/100</p>
            </div>
        );
    } else {
        <p>Chargement...</p>
    }
};

export default Stars;