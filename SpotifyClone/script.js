console.log("welcome to spotify");
//Initialize the Variable
let songIndex=0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songs = [
    { songName: "Tu hi ha", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Akhar", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Adat Instrument", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Binte Bil", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Alan_Walker", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "To the Moon", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Siyah", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Baarishein", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Dragon", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
]
songItems.forEach((element, i)=>{ 
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

 //audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
})
 //Listen to Events
 audioElement.addEventListener('timeupdate',()=>{
    // update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;    
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();// call  function
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src = `songs/${songIndex + 1 }.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex + 1 }.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         masterSongName.innerText=songs[songIndex].songName;
    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex + 1 }.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText=songs[songIndex].songName;
    
})
