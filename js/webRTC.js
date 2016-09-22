navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia;

function onSuccess(stream){
    var video = document.createElement('video'),
    videoSource = window.URL.createObjectURL(stream);
    video.autoplay=true;
    video.src=videoSource;
    document.body.appendChild(video);
}

function onError(){
    throw new Error("Can't access video/audio");
}

var front = false;
document.getElementById('flip-button').onclick = function() { front = !front; };

if(navigator.getUserMedia){
    navigator.getUserMedia({
        video: { facingMode: (front? "user" : "environment") },
        audio:true
    }, onSuccess, onError);
} else {
    throw new Error("Sorry, getUserMedia is not supported in your browser");
}

