let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrIcon = document.getElementById("ctrIcon");
let songImg = document.getElementById("thumbnail");
let songTitle = document.getElementById("songTitle");
let songArtist = document.getElementById("songArtist");

// Danh sách nhạc của bạn
const songs = [
    {
        title: "Không Buông",
        artist: "Hngle, Ari",
        src: "media/Không Buông.mp3",
        cover: "./media/không buông.jpg"
    },
    {
        title: "Hạt Mưa Vương Vấn",
        artist: "Kiều Chi Cover",
        src: "media/Hạt Mưa Vương Vấn.mp3",
        cover: "./media/hạt mưa.jpg"
    }
];

let songIndex = 0;

const loadSong = (index) => {
    const current = songs[index];
    songTitle.innerHTML = current.title;
    songArtist.innerHTML = current.artist;
    songImg.src = current.cover;
    song.src = current.src;
    progress.value = 0
}



// Khởi tạo
loadSong(songIndex);

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (song.paused) {
        song.play();
        ctrIcon.classList.add("fa-pause");
        ctrIcon.classList.remove("fa-play");
    } else {
        song.pause();
        ctrIcon.classList.add("fa-play");
        ctrIcon.classList.remove("fa-pause");
    }
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    song.play();
    ctrIcon.classList.add("fa-pause");
    ctrIcon.classList.remove("fa-play");
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    song.play();
    ctrIcon.classList.add("fa-pause");
    ctrIcon.classList.remove("fa-play");
}

setInterval(() => {
    if(!song.paused) {
        progress.value = song.currentTime;
    }
}, 500);

progress.oninput = function() {
    song.currentTime = progress.value;
};

song.onended = nextSong;