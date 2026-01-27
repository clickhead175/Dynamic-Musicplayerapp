const previousbtn = document.querySelector('.prevbtn');
const musiccontrol = document.querySelector('.music-pause-stop-btn');
const nextbtn = document.querySelector('.nextbtn');
const artistnamedis = document.querySelector('.artistname');
const playbtn = document.querySelector('.playbtn')
const musictitle = document.querySelector('.musictitle')
const pausebtn = document.querySelector('#pausebtn');
const stopbtn = document.querySelector('#playbtn');
const artistimage = document.querySelector('.artistimage')
const repeatbtn = document.querySelector('.repeatbtn')
const progressbar = document.querySelector('.progressbar')
const volumecontrol = document.querySelector('.volumecontrol')
const container = document.querySelector('.container')
const downloadbtn = document.querySelector('.downloadbtn')

const audioplayer = new Audio()
const array = []
let musicplayer = false;
audioplayer.loop = false;

const musicdata = [
    {
        Musictitle: "Into_You_Remix_feat_Mac",
        artistname: "Ariana Grande",
        src: "./musiclist/Into_You_Remix_feat_Mac_Miller_KLICKAUD.mp3",
        image: "./imag/artworks-000175111365-72tcok-original.jpg",
        background: "",
        boxshadow: "black",
    },
    {
        Musictitle: "Ava_Max-Alone_Part_2_Alone",
        artistname: "Alan Walker",
        src: './musiclist/Alan_Walker_Ava_Max_-_Alone_Part_2_Alone_pt_II_Slowking_Remix_KLICKAUD.mp3',
        image: "./imag/artworks-000659209222-2f4m73-original.jpg",
        background: "rgba(3, 233, 34, 0.502)",
        boxshadow: "",
    },
    {
        Musictitle: "Dreams Pt. II",
        artistname: "NCS",
        src: './musiclist/Dreams.mp3',
        image: "./imag/artworks-000463431084-s9wr2o-original.jpg",
        background: "rgba(233, 179, 3, 0.582)",
        boxshadow: "", 
    },
    {
        Musictitle: "Taylor Swift - Blank Space",
        artistname: "Taylor Swift",
        src: './musiclist/Blank_Space-_taylor_swift_KLICKAUD(1).mp3',
        image: "./imag/artworks-000123962072-i1avwd-original.jpg",
        background: "brown",
        boxshadow: "",
    },
    {
        Musictitle: "Jo Cohen & Sex Whales",
        artistname: "NCS",
        src: './musiclist/Jo_Cohen_Sex_Whales_-_We_Are_KLICKAUD.mp3',
        image: "./imag/artworks-000159271573-4wj57m-original.jpg",
        background: 'rgba(191, 211, 214, 0.534)',
        boxshadow: "",
    },
    {
        Musictitle: "Unity",
        artistname: "Alan Walker",
        src: './musiclist/Unity-AlanWalker_KLICKAUD.mp3',
        image: "./imag/artworks-000570323315-t9uppp-original.jpg",
        background: 'rgba(0, 213, 241, 0.508)',
        boxshadow: "",
    },
    {
        Musictitle: "The Spectre - Remix",
        artistname: "Alan Walker",
        src: './musiclist/The_Spectre_KLICKAUD.mp3',
        image: "./imag/artworks-000598849718-1830g1-original.jpg",
        background: 'rgba(191, 211, 214, 0.021)',
        boxshadow: "",
    },
    {
        Musictitle: "ANDROMEDA - MONTAGEM COMA",
        artistname: "Elysian. and Chemistry AI",
        src: './musiclist/ANDROMEDA_-_MONTAGEM_COMA_KLICKAUD.mp3',
        image: "./imag/artworks-bSrjSQc1XVr8sDav-HXEvdw-large.jpg",
        background: 'rgba(241, 0, 0, 0.486)',
        boxshadow: "",
    },
    {
        Musictitle: "SEMPERO (Slowed)",
        artistname: "QMIIR",
        src: './musiclist/SEMPERO_Slowed_KLICKAUD.mp3',
        image: "./imag/artworks-Lt5H5YpkqJxV-0-original.jpg",
        background: 'rgba(172, 169, 3, 0.486)',
        boxshadow: "",
    },
    {
        Musictitle: "The Games We Play",
        artistname: "Vaeros - Freeway",
        src: './musiclist/Vaeros_-_Freeway_KLICKAUD.mp3',
        image: "./imag/artworks-000623489938-ihkbc9-original.jpg",
        background: 'rgba(241, 0, 0, 0.075)',
        boxshadow: "",
    },
    {
        Musictitle: "LUNA BALA - Slowed",
        artistname: "Emirhan Turhan",
        src: './musiclist/LUNA_BALA_-_Slowed_KLICKAUD.mp3',
        image: "./imag/artworks-yyzIGFcjXx17Xisk-TMXwsQ-large.jpg",
        background: 'rgba(241, 145, 0, 0.568)',
        boxshadow: "",
    },
    {
        Musictitle: "Scythermane & SEKIMANE",
        artistname: "Elysian. and Chemistry AI",
        src: "./musiclist/Scythermane_SEKIMANE_-_TE_VEO_POR_AHÌ_KLICKAUD.mp3",
        image: "./imag/artworks-Rt0kv1EdNBGMxKKv-bmu3JQ-large.jpg",
        background: "rgba(3, 38, 233, 0.502)",
        boxshadow: "",
    },
    {
        Musictitle: "GO BABY",
        artistname: "Justin Bieber",
        src: "./musiclist/Justin_BieBer_-_Baby_ft_Ludacris_ReMiX_Dj_AruN_KLICKAUD.mp3",
        image: "./imag/artworks-oW1IeMqYpcnp-0-original.jpg",
        background: "rgba(243, 243, 243, 0.525)",
        boxshadow: "",
    },
    {
        Musictitle: "Beauty And A Beat",
        artistname: "Justin Bieber",
        src: "./musiclist/Justin_Bieber_-_Beauty_And_A_Beat_feat_Nicki_Minaj_KLICKAUD.mp3",
        image: "./imag/artworks-I7kWwK9EEnzsKmtz-MCzFsQ-original.jpg",
        background: "rgba(119, 134, 34, 0.219)",
        boxshadow: "",
    },
    {
        Musictitle: "Love me like you do",
        artistname: "Ellie Goulding",
        src: "./musiclist/Love_me_like_you_do_KLICKAUD.mp3",
        image: "./imag/artworks-000125141318-bwjjvx-original.jpg",
        background: "rgba(87, 26, 74, 0.86)",
        boxshadow: "",
    },
     {
        Musictitle: "Rautu - close your eyes",
        artistname: "Rautu - music",
        src: "./musiclist/Rautu_-_close_your_eyes_KLICKAUD.mp3",
        image: "./imag/rautu-close.jpg",
        background: "rgba(87, 26, 74, 0.86)",
        boxshadow: "",
    },
     {
        Musictitle: "Julian Winding - The Demon Dance",
        artistname: "Julian Winding",
        src: "./musiclist/03_-_Julian_Winding_-_The_Demon_Dance_THE_NEON_DEMON_Red_Band_TrailerNightClub_Scene_Mix_KLICKAUD.mp3",
        image: "./imag/neondemon.jpg",
        background: "rgba(87, 26, 74, 0.86)",
        boxshadow: "",
    },
     {
        Musictitle: "GigaChad Theme Phonk House Version",
        artistname: "g3ox_em",
        src: "./musiclist/GigaChad_Theme_Phonk_House_Version_KLICKAUD.mp3",
        image: "./imag/gigachad.jpg",
        background: "rgba(87, 26, 74, 0.86)",
        boxshadow: "",
    }
]



musiccontrol.addEventListener('click',()=> {      
    musiccontrol.classList.toggle('isplaying')
})

function repeatmusic(){
    audioplayer.loop = !audioplayer.loop;
    if(audioplayer.loop){
        repeatbtn.innerHTML = `<i class="bi bi-repeat-1"></i>`
    }
    else{
        repeatbtn.innerHTML = `<i class="bi bi-repeat"></i>`
    }
    backgroundchange()
}


repeatbtn.addEventListener('click', ()=> repeatmusic())


let currentindextrack = 0


function features(trackindex){
    const tracks = musicdata[trackindex]
    if(!tracks){
        console.error('Tracknot found at index',trackindex)
        return
    }
    audioplayer.src = tracks.src
    artistimage.src = tracks.image
    artistnamedis.textContent = tracks.artistname;
    musictitle.textContent = tracks.Musictitle;
}

function backgroundchange(){
    container.style.background = musicdata[currentindextrack].background.toString();
    container.style.image = musicdata[currentindextrack].boxshadow.toString()
}




function playpausemusic(){
    if(musicplayer){
        audioplayer.pause()
        musicplayer = false;
        artistimage.classList.remove('active')
        artistimage.style.animationPlayState = 'paused';
    }
    else{
        audioplayer.play()
        musicplayer = true;
        artistimage.classList.add('active')
        artistimage.style.animationPlayState = 'running';
    }
}


function prevfun(){
    currentindextrack --;
    if(currentindextrack < 0){
        currentindextrack = musicdata.length -1;
    }
    features(currentindextrack)
    playpausemusic()
    backgroundchange()
}

function stopfun(){
    audioplayer.pause()
    audioplayer.currentTime = 0;
    musicplayer = false
}

function nextfun(){
    currentindextrack ++;
    if(currentindextrack >= musicdata.length){
        currentindextrack =  0
    }
    features(currentindextrack)
    musicplayer = false
    backgroundchange()
    playpausemusic()
}   

features(currentindextrack)


function repeatfun(){
    if(repeatbtn){
        audioplayer.loop = true;
    }
    else{
        audioplayer.loop = false;
    }
}


function download(){
    const downloadfile = musicdata[currentindextrack]
    const link = document.createElement('a')
    link.href = downloadfile.src
    link.download = downloadfile.Musictitle + ".mp3"

    document.body.appendChild(link)
    link.click()
    link.remove()
}


nextbtn.addEventListener('click', ()=> nextfun())
previousbtn.addEventListener('click',()=> prevfun());
musiccontrol.addEventListener('click', ()=> playpausemusic())
audioplayer.addEventListener('ended', ()=> nextfun())
repeatbtn.addEventListener('click', ()=> repeatfun())
downloadbtn.addEventListener('click',()=> download())

audioplayer.addEventListener('loademetadata',()=> {
    progressbar.max = audioplayer.duration;
    progressbar.value = 0
})


audioplayer.addEventListener('timeupdate',()=> {
    progressbar.value = audioplayer.currentTime;
})

progressbar.addEventListener('input', (e)=> {
    audioplayer.currentTime = e.target.value;
    // const {currentTime, duration} = audioplayer
    // progressbar.value = (currentTime / duration) * 100
})
// progressbar.addEventListener('input', (e) => {
//     const seekTime = (e.target.value / 100) * audioplayer.duration
//     audioplayer.currentTime = seekTime
// })  
