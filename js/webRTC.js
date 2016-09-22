navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia;

function onSuccess(stream){
    var vid=document.querySelector('video')
    if(vid){
        document.body.removeChild(vid);
    }
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
document.getElementById('flip-button').onclick = function() {
    front = !front;
    if(navigator.getUserMedia){
        navigator.getUserMedia({
            video: { facingMode: (front ? "user" : "environment") }/*,
             audio:true*/
        }, onSuccess, onError);
    } else {
        throw new Error("Sorry, getUserMedia is not supported in your browser");
    }
};

var ul = document.createElement('ul');

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    var li = document.querySelector('li');
    li.innerHTML="enumerateDevices() not supported.";
    ul.appendChild(li);
    document.body.appendChild(ul);

}

navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
        devices.forEach(function(device) {
            let li = document.createElement('li');
            li.innerHTML = device.kind + ": " + device.label +
                " id = " + device.deviceId;
            ul.appendChild(li)
        });
        document.body.appendChild(ul);
    })
    .catch(function(err) {
        var li = document.querySelector('li');
        li.innerHTML=err.name + ": " + err.message;
        ul.appendChild(li);
        document.body.appendChild(ul);

    });



