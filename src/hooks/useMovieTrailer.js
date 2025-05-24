import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    //fetching trailer videos
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"
              + movieId + 
            "/videos", API_OPTIONS);
        const json = await data.json();
        //console.log(json);

        {/*
            If filterData.length is exist or the value is not zero 
            then take filterData[0]
            If filterData.length is zero then take json.results[0]
        */}

        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        //console.log(trailer);
        dispatch(addTrailerVideo(trailer));
        
    }

    useEffect(() => {
      getMovieVideos();
    }, [])

}

export default useMovieTrailer;