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

if(navigator.getUserMedia){
    navigator.getUserMedia({
        video:true,
        audio:true
    }, onSuccess, onError);
} else {
    throw new Error("Sorry, getUserMedia is not supported in your browser");
}