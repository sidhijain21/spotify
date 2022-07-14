console.log("welcome to music world");
//initializing the variables
let songIndex=[0]
let audioElement=new Audio('10.mp3')
     //audioElement.play();
let masterplay=document.getElementById('masterplay') ;
let myprogressbar=document.getElementById('myprogressbar') ;
let gif=document.getElementById('gif')


let songs=[
    {songName:"salameishq",filePath:"10.mp3",coverPath:"covers/10.jpg" },
    {songName:"salameishq",filePath:"1.mp3",coverPath:"covers/1.jpg" },
    {songName:"salameishq",filePath:"2.mp3",coverPath:"covers/2.jpg" },
    {songName:"salameishq",filePath:"5.mp3",coverPath:"covers/5.jpg" },
    {songName:"salameishq",filePath:"6.mp3",coverPath:"covers/6.jpg" },
]
//handle play and pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }
    else{
    audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        
    }


})


audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    myprogressbar.value=progress
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;

})



