import {useState,useEffect} from 'react'
import'./App.css'
import MovieCard from './MovieCard';

//a6f56a91

const API_URL='http://www.omdbapi.com?apikey=b6003d8a';

const movie ={'Title':'Spiderman Spider man tune churaya kiske lund kaa chain',
'Year':'2012',
'imdbID': 'tt2586634',
'Type':"movie",
"Poster":"https://external-preview.redd.it/t0hztmnXkyMN3fYbnMiCZK7m28mdTGLtBhMnHypc_88.jpg?auto=webp&s=06a303db2269e62a6c905171e04bf5066eba7918"}

const App=()=>{

    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('')
    

const searchMovies = async(title)=>{
    const response =await fetch(`${API_URL}&s=${title}`);
    const data =await response.json();
    
    setMovies(data.Search);
}

    useEffect(()=>{
searchMovies('Spiderman')
    },[])
    return(
        <div className='app'>
            <h1>MovieBOX</h1>

            <div className='Search'>
                <input
                placeholder='Search For movies'
                value={searchTerm}
                onChange={(e)=> setsearchTerm(e.target.value)}
            />
            <img className='img'
            src="https://endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
            />
                </div>

                {
                 movies?.length > 0
                    ?(
                        <div className='container'>
                   {movies.map((movie) =>(
                    <MovieCard movie={movie}/>
                   ))}
                </div>
                 ) :
                 (
                    <div className='empty'>
                        <h2>No movie file</h2>
                        </div> 
                 )
                }
                
        
        </div>
    );
}

export default App