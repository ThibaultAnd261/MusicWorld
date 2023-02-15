import React from 'react';
import logo from '../assets/img/MusicWorld Logo.png';

const Footer = () => {
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-black">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0 flex items-center">
                    <img
                        className="block h-8 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <span
                        className="block text-xl font-medium w-auto text-green-600"
                    >
                        MusicWorld
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ressources</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="https://fr.reactjs.org/" className="hover:underline">React JS</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://developer.spotify.com/" className="hover:underline">API Spotify</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Suivez-moi</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="https://github.com/ThibaultAnd261" className="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/thibault-andriamasinoro/" className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023. All Rights Reserved.</span>
            </div>
        </footer>

    );
};

export default Footer;