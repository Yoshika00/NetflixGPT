import { useSelector } from "react-redux"
import lang from "../utils/languageconstants"


const GptSearchBar = () => {
  const langKey = useSelector( (store) => store.config.lang )
   
   
  return (
    <div className="pt-[15%] flex justify-center">
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input
               type='text'
               placeholder={lang[langKey].gptSearchPlaceholder}
               className='p-2 m-1 col-span-9'
            />
            <button className="m-1 text-white rounded-lg col-span-3 bg-purple-900">
               {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar