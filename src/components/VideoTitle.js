import { IoPlay } from "react-icons/io5";


const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl px-2 font-bold'>{title}</h1>
        <p className='py-6 text-lg px-2 w-1/4'>{overview}</p>
        <div className="flex ">
            <button className='flex bg-white text-black p-4 px-12 m-4 text-lg rounded-lg hover:bg-opacity-80'>
               <IoPlay className="m-1"/> Play
            </button>
            <button className='bg-gray-500 text-white p-4 px-12  m-4 text-lg bg-opacity-60 rounded-lg hover:bg-opacity-50'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;
