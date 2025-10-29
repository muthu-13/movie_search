import { useState , useEffect} from 'react'

function App() 
{
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const API_URL = 'http://www.omdbapi.com/?i=tt0944947&Season=1'  
  const searchMovies = async (title) => 
 {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
}

  useEffect(() => {
    searchMovies('Batman')
  }, [])

  return (
    <div className="app">
      <h2>Movie Search App</h2>    
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <div>
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h4>No movies found</h4>
        </div>
      )}
    </div>
  )
} 
export default App


