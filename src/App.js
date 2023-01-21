import './App.css';
import Credentials from './Credentials';
import Service from './api/Service';
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from './pages/Browse';
import Home from './pages/Home';
import Search from './pages/Search';
import Comparison from './pages/Comparison';

function App() {

  const credits = Credentials();

  useEffect(() => {

    axios(credits.TOKEN_URL, {  // working
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(credits.CLIENT_ID + ':' + credits.CLIENT_SECRET)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(async tokenResponse => {
      localStorage.setItem('tokenAuthor', tokenResponse.data.access_token);
    });
  }, [])

  return (
    // <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/trends' element={<Browse />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/comparison' element={<Comparison />}></Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;