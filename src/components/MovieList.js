import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {
    //console.log(movies);
    

  return (
    <div className="">
        <h1 className="text-lg py-3 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
            
            <div className="flex gap-2">
                {movies?.map( (movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} /> )}
                
            </div>
        </div>
    </div>
  )
}

export default MovieList;