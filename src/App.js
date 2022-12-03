import './App.css';
import Navbar from './components/Navbar';
import Credentials from './Credentials';
import Service from './api/Service';
import { useEffect, useState } from "react";
import axios from "axios";

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
    <Navbar />
  );

}

export default App;