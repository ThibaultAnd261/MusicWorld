import './App.css';
import Navbar from './components/Navbar';
import Credentials from './Credentials';
import Service from './api/Service';
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from './pages/Browse';
import Home from './pages/Home';
import Search from './pages/Search';
import Comparison from './pages/Comparison';

function App() {

  const credits = Credentials();
  const service = Service;

  const [token, setToken] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    axios(credits.TOKEN_URL, {  // working
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(credits.CLIENT_ID + ':' + credits.CLIENT_SECRET)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(async tokenResponse => {
      setToken(tokenResponse.data.access_token);

      let listCate = await service.browse(tokenResponse.data.access_token);
      // console.log(listCate.data.categories.items);
      setCategories(listCate.data.categories.items);
      // console.log(categories);
    });

  }, [])

  return (
    // <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home title={"home page test"} />}></Route>
        <Route path='/trends' element={<Browse title={"trends page test"} />}></Route>
        <Route path='/search' element={<Search title={"search page test"} />}></Route>
        <Route path='/comparison' element={<Comparison title={"comparison page test"} />}></Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;