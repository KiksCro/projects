import { useState, useEffect } from 'react';
import Search from './components/Search';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_OPTIONS = {
  method:'GET',
  headers: {
    accept: 'application/json'
  }

}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [setLoading, setIsLoading] = useState('');

  const fetchAnime = async () => {
    try {

    } catch {

    }
  }
  useEffect(() => {

  }, []);

 

  return (
    <main>

      <div className='pattern'>
        <div className='wrapper'>
          <header>
            <img className='max-h-sm max-w-70  rounded-xl' src="./anime-hero.jpg" alt="Hero Banner" />
            <h1>Find <span className='text-gradient'>Anime</span> You'll Enjoy Without The Hassle </h1>
          </header>
          <Search searchTerm ={searchTerm} setSearchTerm= {searchTerm} />
        </div>
      </div>

    </main>
  )
}

export default App
