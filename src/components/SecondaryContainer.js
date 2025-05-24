import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
  const movies = useSelector( store => store.movies )
  //console.log(movies);
  
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-52 z-20 pl-12 relative">
            <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
            <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;