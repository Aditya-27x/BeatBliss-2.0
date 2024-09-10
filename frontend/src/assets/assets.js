import mainlogo from './img/logo.svg';
import beatblisslogo from './img/beatBliss_transperent_logo.png';
import BBlogo from "./img/BeatBliss_Logo.png";
import bblogo1 from "./img/BB_trans_logo.png";
import bbcircle from './img/bb_circle_logo.png';
import home_icon from './img/home.svg';
import search_icon from './img/search.svg';
import playlist_icon from './img/playlist.svg';
import arrow_icon from './img/right-arrow.svg';
import arrowleft from './img/arrowleft.svg';
import arrowright from './img/arrowright.svg';
import plus_icon from './img/plus.svg';
import shuffle_icon from './img/shuffle.svg';
import previous_icon from './img/prevsong.svg';
import play_icon from './img/play.svg';
import pause_icon from './img/pause.svg';
import next_icon from './img/nextsong.svg';
import loop_icon from './img/loop.svg';
import plays_icon from './img/plays.svg';
import mic_icon from './img/mic.svg';
import queue_icon from './img/queue.svg';
import speaker_icon from './img/speaker.svg';
import volume_icon from './img/volume.svg';
import mute_icon from './img/mute.svg';
import miniPlayer_icon from './img/mini-player.svg';
import zoom_icon from './img/zoom.svg';
import clock_icon from './img/clock.svg';
import hamburger_icon from './img/hamburger.svg';
import music_icon from './img/music.svg';
// Albums Img
import img1 from './Songs/ncs/cover.jpg'
import img2 from './Songs/Playlist1/cover.jpg'
import img3 from './Songs/Playlist2/cover.jpg'
import img4 from './Songs/Playlist3/cover.jpg'
// Songs Img
import img5 from './Songs/Playlist1/apnabanale.jpeg'
import img6 from './Songs/Playlist1/soulmate.jpeg'
import img7 from './Songs/Playlist1/hawayein.jpeg'
import img8 from './Songs/Playlist1/omahi.jpeg'
import img9 from './Songs/Playlist1/kamaleya.jpeg'

import img10 from './Songs/Playlist2/asalmein.jpeg'


// Playlist-1
import song from "./Songs/Playlist1/Hawayein.mp3";
import song2 from './Songs/Playlist1/Apna_Bana_Le.mp3';
import song3 from './Songs/Playlist1/Badshah_X_Arijit_Singh_-_Soulmate.mp3';
import song4 from './Songs/Playlist1/O_Maahi_.mp3';
import song5 from './Songs/Playlist1/Ve_Kamleya_Mere_Nadan_Dil.mp3';
// Playlist-2
import song6 from './Songs/Playlist2/Asal_Mein_-Darshan_Raval.mp3'
import song7 from './Songs/Playlist2/Baarishon_Mein_Reprise.mp3'
import song8 from './Songs/Playlist2/Darshan_Raval_Mashup_2024.mp3'
import song9 from './Songs/Playlist2/ek-tarfa-darshan.mp3'
import song10 from './Songs/Playlist2/Faasla_Darshan_Raval.mp3'
import song11 from './Songs/Playlist2/Rasiya_Studio_Version_By_Darshan_Raval.mp3'
import song12 from './Songs/Playlist2/tera-zikr-darshan-raval.mp3'
import song13 from './Songs/Playlist2/Tu_Aaja_Vi_Hawa_Banke___Darshan_Raval.mp3'
// Playlist-3
import song14 from './Songs/Playlist3/ANIMAL__SATRANGA.mp3'
import song15 from './Songs/Playlist3/Husn_x_Choo_Lo.mp3'
import song16 from './Songs/Playlist3/Infinity_X_Jab_Tak.mp3'
import song17 from './Songs/Playlist3/Night_Changes_x_Tu_Jaane_Na_Mashup.mp3'
import song18 from './Songs/Playlist3/Shayad_x_Sanware.mp3'
import song19 from './Songs/Playlist3/Snap_x_Baarishen_-_Mashup.mp3'
// import song20 from './Songs/Playlist3/Travel_Songs.mp4a'
import song21 from './Songs/Playlist3/Tu_Aake_Dekhle.mp3'











export const logo = 
                        {
                            beatblisslogo,
                            mainlogo,
                            BBlogo,
                            bblogo1,
                            bbcircle
                        }


export const assets = {
    // bell_icon,
    home_icon,
    // like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    previous_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    // stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    miniPlayer_icon,
    volume_icon,
    mute_icon,
    queue_icon,
    pause_icon,
    arrowleft,
    arrowright,
    playlist_icon,
    hamburger_icon,
    music_icon,
    clock_icon
}

export const albumData = [
    {
        id: 0,
        name: "Arijit Singh",
        image: img2,
        desc: "Weaving magic with every note, every lyrics",
        bgColor: "#2a4365"

    },
    {
        id: 1,
        name: "Darshan Raval hits",
        image: img3,
        desc: "The perfect blend of soulful vocals and contemporary music",
        bgColor: "#2a4365"

    },
    {
        id: 2,
        name: "Moody Mix",
        image: img4,
        desc: "Unexpected combinations for your unpredictable emotions",
        bgColor: "#2a4365"

    },
    {
        id: 3,
        name: "Arijit Singh",
        image: img1,
        desc: "Weaving magic with every note, every lyrics",
        bgColor: "#2a4365"

    },
    {
        id: 4,
        name: "Arijit Singh",
        image: img1,
        desc: "Weaving magic with every note, every lyrics",
        bgColor: "#2a4365"

    },
    {
        id: 5,
        name: "Arijit Singh",
        image: img1,
        desc: "Weaving magic with every note, every lyrics",
        bgColor: "#2a4365"

    },
    {
        id: 6,
        name: "Arijit Singh",
        image: img1,
        desc: "Weaving magic with every note, every lyrics",
        bgColor: "#2a4365"

    },
]

export const songsData = [
    {
        id: 0,
        name: "Hawayein",
        image: img7,
        file: song,
        desc: "a beautifull song",
        duration: "03:00"
    },
    {
        id: 1,
        name: "Apna Banale",
        image: img5,
        file: song2,
        desc: "a beautifull song",
        duration: "03:00"
    },
    {
        id: 2,
        name: "Soulmate Badshah X Arijit",
        image: img6,
        file: song3,
        desc: "a beautifull song",
        duration: "03:00"
    },
    {
        id: 3,
        name: "O Maahi",
        image: img8,
        file: song4,
        desc: "a beautifull song",
        duration: "03:00"
    },
    {
        id: 4,
        name: "Ve Kamaleya",
        image: img9,
        file: song5,
        desc: "a beautifull song",
        duration: "03:00"
    },
    {
        id: 5,
        name: "Asal Main",
        image: img10,
        file: song6,
        desc: "a beautifull song",
        duration: "03:00"
    },
]