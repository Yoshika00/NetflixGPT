import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
  const movies = useSelector( store => store.movies )
  console.log(movies);
  
  return (
    <div>
     { movies && 
      
        <>
          <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        </>
      
    }
    </div>
  )
}

export default SecondaryContainer;