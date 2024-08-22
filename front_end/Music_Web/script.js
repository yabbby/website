let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;

}
function playPause() {
  if(ctrlIcon.classList.contains("bx-pause")){
    song.pause();
    ctrlIcon.classList.remove("ba-pause");
    ctrlIcon.classList.add("bx-play");
  }
  else{
    song.play();
    ctrlIcon.classList.add("bx-pause");
    ctrlIcon.classList.remove("bx-play");
  }
}

if(song.play()){
  setInterval(()=>{
    progress.value = song.currentTime;
  },500);
}
 
progress.onchange = function(){
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("bx-pause");
  ctrlIcon.classList.remove("bx-play");

}
