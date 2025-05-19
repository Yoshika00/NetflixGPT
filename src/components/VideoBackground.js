import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"


const VideoBackground = ({movieId}) => {

    //fetching trailer videos
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/976573/videos", API_OPTIONS);
        const json = await data.json();
        console.log(json);
        
    }

    useEffect(() => {
        getMovieVideos();
    }, [])

  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground
