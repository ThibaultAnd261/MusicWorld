import './App.css';
import Navbar from './components/Navbar';
import Credentials from './Credentials';

function App() {
  const credits = Credentials();
  //console.log(credits.REACT_APP_ClientId);
  //console.log(process.env.REACT_APP_CLIENT_ID);
  console.log(credits)
  return (
    <Navbar />
  );
}

export default App;
