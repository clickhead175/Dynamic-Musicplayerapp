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
const pause = document.querySelector('#pause');
const play = document.querySelector('#play')
const progressbar = document.querySelector('.progressbar')
const volumecontrol = document.querySelector('.volumecontrol')
const container = document.querySelector('.container')


const audioplayer = new Audio()
const array = []
let musicplayer = false;
audioplayer.loop = false;

const musicdata = [
    {
        Musictitle: "Into_You_Remix_feat_Mac_Miller_KLICKAUD",
        artistname: "Ariana Grande",
        src: "./musiclist/Into_You_Remix_feat_Mac_Miller_KLICKAUD.mp3",
        image: "https://media.gettyimages.com/id/1202825234/photo/los-angeles-ca-ariana-grande-attends-the-62nd-annual-grammy-awards-at-staples-center-on.jpg?s=612x612&w=0&k=20&c=01ZbU2-PVqQKGtFvokLyQNOL8x476tbPO8mQLBkXNEs=",
        background: "red"
    },
    {
        Musictitle: "Alan_Walker_Ava_Max_-_Alone_Part_2_Alone_pt_II_Slowking_Remix_KLICKAUD",
        artistname: "this",
        src: './musiclist/Alan_Walker_Ava_Max_-_Alone_Part_2_Alone_pt_II_Slowking_Remix_KLICKAUD.mp3',
        image: "https://media.gettyimages.com/id/1136579315/photo/berlin-germany-british-norwegian-dj-alan-walker-performs-live-on-stage-during-a-concert-at.jpg?s=612x612&w=0&k=20&c=BcJlIsyzXewmtCvEzlWGEXo2TTl_RgwhgKUQPb0x3w8=",
        background: "blue"
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Dreams.mp3',
        image: "https://media.gettyimages.com/id/946009982/photo/indio-ca-dj-alan-walker-performs-onstage-during-the-2018-coachella-valley-music-and-arts.jpg?s=612x612&w=0&k=20&c=NQ393FdSZKRKpVSsY_xLl8rD5QrYfE1DmPkWj9g3nYg=",
        background: "black" 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Blank_Space-_taylor_swift_KLICKAUD(1).mp3',
        image: "https://soundcloud.com/arianagrandeforrealidkwhyicantgetmyownlinkbutok",
        background: "green" 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Jo_Cohen_Sex_Whales_-_We_Are_KLICKAUD.mp3',
        image: "https://soundcloud.com/arianagrandeforrealidkwhyicantgetmyownlinkbutok",
        background: '' 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Unity-AlanWalker_KLICKAUD.mp3',
        image: "https://media.gettyimages.com/id/1136579315/photo/berlin-germany-british-norwegian-dj-alan-walker-performs-live-on-stage-during-a-concert-at.jpg?s=612x612&w=0&k=20&c=BcJlIsyzXewmtCvEzlWGEXo2TTl_RgwhgKUQPb0x3w8=",
        background: '' 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/The_Spectre_KLICKAUD.mp3',
        image: "https://media.gettyimages.com/id/1136579315/photo/berlin-germany-british-norwegian-dj-alan-walker-performs-live-on-stage-during-a-concert-at.jpg?s=612x612&w=0&k=20&c=BcJlIsyzXewmtCvEzlWGEXo2TTl_RgwhgKUQPb0x3w8=",
        background: '' 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Love_me_like_you_do_KLICKAUD.mp3',
        image: "https://soundcloud.com/arianagrandeforrealidkwhyicantgetmyownlinkbutok",
        background: '' 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Dreams.mp3',
        image: "https://soundcloud.com/arianagrandeforrealidkwhyicantgetmyownlinkbutok",
        background: '' 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Dreams.mp3',
        image: "https://soundcloud.com/arianagrandeforrealidkwhyicantgetmyownlinkbutok",
        background: '' 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Dreams.mp3',
        image: "https://soundcloud.com/arianagrandeforrealidkwhyicantgetmyownlinkbutok",
        background: '' 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Dreams.mp3',
        image: "https://soundcloud.com/arianagrandeforrealidkwhyicantgetmyownlinkbutok",
        background: '' 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Dreams.mp3',
        image: "https://soundcloud.com/arianagrandeforrealidkwhyicantgetmyownlinkbutok",
        background: '' 
    },
    {
        Musictitle: "this is h",
        artistname: "this",
        src: './musiclist/Dreams.mp3',
        image: "https://soundcloud.com/arianagrandeforrealidkwhyicantgetmyownlinkbutok",
        background: '' 
    },
]



musiccontrol.addEventListener('click',()=> {      
    musiccontrol.classList.toggle('isplaying')
})

function repeatmusic(){
    audioplayer.loop = !audioplayer.loop;
    if(audioplayer.loop){
        repeatbtn.textContent = "Toggle Loop On (Looping)"
    }
    else{
        repeatbtn.innerHTML = `<i class="fa-solid fa-repeat-1"></i>`
    }
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
    // progressbar.value = audioplayer.duration
    // audioplayer.volume
    artistnamedis.textContent = tracks.artistname;
    musictitle.textContent = tracks.Musictitle;
    // audioplayer.play()
//     if(musicplayer === true){
//         audioplayer.play()
//     }
//     else if(musicplayer === false){
//         audioplayer.pause()
//     }
//     else{
//         audioplayer
//     }
// }
}

function backgroundchange(){
    container.style.background = musicdata[currentindextrack].background.toString();
}

console.log(backgroundchange())


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
    playpausemusic()
}   

features(currentindextrack)



nextbtn.addEventListener('click', ()=> nextfun())
previousbtn.addEventListener('click',()=> prevfun());
musiccontrol.addEventListener('click', ()=> playpausemusic())
audioplayer.addEventListener('ended', ()=> nextfun())
audioplayer.addEventListener('loadedmetadata', ()=> {
    progressbar.max = audioplayer.duration;
    progressbar.value = 0
    // const {currentTime, duration} = audioplayer
    // progressbar.value = (currentTime / duration) * 100
})

// progressbar.addEventListener('input', (e) => {
//     const seekTime = (e.target.value / 100) * audioplayer.duration
//     audioplayer.currentTime = seekTime
// })  