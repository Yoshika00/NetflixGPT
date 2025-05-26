import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearchBar";
import { useSelector } from "react-redux";

const Browse = () => {

const showGptSearch = useSelector(store => store.gpt.showGptSearch);

useNowPlayingMovies();  
useUpcomingMovies();
useTopRatedMovies();


  return (
    <div >
      <Header />
      { showGptSearch ? 
      ( <GptSearch /> ) : 
      ( 
      <>
         <MainContainer />
         <SecondaryContainer />
      </> 
      ) 
      }
      
      {/*
           MainContainer
             - VideoBackground
             - VideoTitle
           SecondaryContainer
             - MovieList * n
                - cards * n
      */}
    </div>
  )
}

export default Browse;
