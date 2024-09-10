import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'
import { assets } from '../assets/assets';

const Player = () => {

  const {track,seekBar, seekBg, playStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext);





  return (
    <div className='h-[10%] bg-black flex justify-between text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src= {track.image}  alt="" /> {/*add "/src/assets/Songs/ncs/cover.jpg" in src */} 
        <div>
          <p>{track.name} {/*Song-1*/}</p>
          <p>{track.desc.slice(0,12)} {/*its nice*/}</p>
          {/* make assets.js file and replace this ruff data */}
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="shuffle" style={{ filter: 'invert(1)' }} />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.previous_icon} alt="previous" style={{ filter: 'invert(1)' }} />
          {playStatus
          ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="pause" style={{ filter: 'invert(1)' }} />
          :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="play" style={{ filter: 'invert(1)' }} />
          }
          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="next" style={{ filter: 'invert(1)' }} />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="loop" style={{ filter: 'invert(1)' }} />
        </div>
        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.plays_icon} alt="plays" style={{filter:'invert(1)'}} />
        <img className='w-4' src={assets.mic_icon} alt="mic" />
        <img className='w-4' src={assets.queue_icon} alt="queue" style={{filter:'invert(1)'}} />
        <img className='w-4' src={assets.speaker_icon} alt="speaker" style={{filter:'invert(1)'}} />
        <img className='w-4' src={assets.volume_icon} alt="volume" style={{filter:'invert(1)'}} />
        <div className='w-20 bg-slate-50 h-1 rounded'>
          
        </div>
        <img className='w-4' src={assets.miniPlayer_icon} alt="mini-player" style={{filter:'invert(1)'}} />
        <img className='w-4' src={assets.zoom_icon} alt="zoom" style={{filter:'invert(1)'}} />
      </div>
    </div>
  )
}

export default Player