import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, logo } from '../assets/assets';

const Sidebar = () => {

    const navigate = useNavigate();




    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className="bg-[#121212] h-[20%] rounded flex flex-col justify-around">
            <div className="flex items-center gap-3 pl-8">
                    <img src={logo.beatblisslogo} alt="logo" className='w-40 h-12' /*style={{ filter: 'invert(1)' }} */ />
                </div>
                <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img src={assets.home_icon} alt="home" className='w-6' style={{ filter: 'invert(1)' }}  />
                    <p className='font-bold'>Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img src={assets.search_icon} alt="search" className='w-6' style={{ filter: 'invert(1)' }}  />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8 ' src={assets.playlist_icon} alt="playlist" style={{ filter: 'invert(1)' }} />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt="" style={{ filter: 'invert(1)' }} />
                        <img className='w-5' src={assets.plus_icon} alt="" style={{ filter: 'invert(1)' }} />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create Your first playlist</h1>
                    <p className='font-light'>It's easy we willl help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Lets's findsome podcasts to follow</h1>
                    <p className='font-light'>We will keep you update on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar