var data = {
      title: ["Bez-tebya", "Sirt-Sirt", "Hey jan_"],
      song: ["music/SONG1.mp3",
            "music/SONG2.mp3",
            "music/SONG3.mp3"
      ],

      poster: [
            "https://thumbs.gfycat.com/AlarmingOccasionalGalapagosmockingbird-size_restricted.gif",
            "https://thumbs.gfycat.com/AlarmingOccasionalGalapagosmockingbird-size_restricted.gif",
            "https://thumbs.gfycat.com/AlarmingOccasionalGalapagosmockingbird-size_restricted.gif"

      ]
}

var song = new Audio();
window.onload = function () {
      playSong()
}
var currentSong = 0;

function playSong() {
      song.src = data.song[currentSong];
      let songTitle = document.getElementById("songTitle");
      songTitle.textContent = data.title[currentSong];
      let img = document.getElementById("row1");
      img.style.backgroundImage = "url (" + data.poster[currentSong]; +")"
      let main = document.getElementById("main")
      main.style.backgroundImage = "url(" + data.poster[currentSong] + ")"
      song.play();
}
function play0rPauseSong() {
      let play = document.getElementById("play")

      if (song.paused) {
            song.play();
            play.src = "images/pause.png"
      } else {
            song.pause();
            play.src = "images/play-button-arrowhead.png"
      }

}
song.addEventListener("timeupdate", function () {
      // console.log(song.currentTime);
      // console.log(song.duration);

      let fill = document.getElementById("fill");
      let position = song.currentTime / song.duration;
      fill.style.width = position * 100 + "%";
      convertTime(song.currentTime)
      if (song.ended) {
            next()
      }
})

function convertTime(seconds) {
      let currentTime = document.getElementById("currentTime");
      let min = Math.floor(seconds / 60)
      let sec = Math.floor(seconds % 60)

      min = (min < 10) ? "0" + min : min
      sec = (sec < 10) ? "0" + sec : sec

      currentTime.textContent = min + ":" + sec

      totalTime(Math.round(song.duration))

}
function totalTime(seconds) {
      var min = Math.floor(seconds / 60)
      var sec = Math.floor(seconds % 60)
      min = (min < 10) ? "0" + min : min
      sec = (sec < 10) ? "0" + sec : sec

      if (isNaN(min) || isNaN(sec)) {
            return false
      } else {

            currentTime.textContent += " / " + min + ":" + sec
      }


};
function next() {
      currentSong++;
      if (
            currentSong >= data.song.length) {
            currentSong = 0
      }
      playSong();
      play.src = "images/pause.png"
}
function pre() {
      currentSong--;
      if (currentSong < 0) {
            currentSong = data.song.length - 1;

      }
      playSong();
      play.src = "images/pause.png"
}

function muted() {
      var mute = document.getElementById("mute")
      if (song.muted) {
            song.muted = false
            mute.src = "images/volume.png"    //mute
      } else {
            song.muted = true
            mute.src = "images/volume-mute.png"    //unmute
      }
}

function decrease() {
      song.volume -= 0.2;
}

function increase() {
      song.volume += 0.2;
}
