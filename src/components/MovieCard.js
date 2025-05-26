import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-32 ">
        <img
           className="rounded-sm"
           src={IMG_CDN_URL + posterPath}
           alt="movie card"/>
    </div>
  )
}

export default MovieCard; 


