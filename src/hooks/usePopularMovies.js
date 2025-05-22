
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {

 // fetching the data from TMDB API and save/add to store 
  const dispatch = useDispatch()

  const popularMovie = useSelector((store) => store.movies.popularMovie);

  const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    getPopularMovies();
  }, [])
 
}

export default usePopularMovies;