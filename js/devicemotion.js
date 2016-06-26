/**
 * Created by holbech on 26/06/16.
 */
var accelerationElem = document.createElement('p'),
    accelerationGravityElem = document.createElement('p'),
    topElem = document.createElement('p');

var max = {
    x:0,
    y:0,
    z:0
};
function handleDeviceMotion(e){
    var acc = e.acceleration,
        maxAcc = Math.max(acc.x, acc.y, acc.z),
        accGravity = e.accelerationIncludingGravity,
        maxxAccGravity = Math.max(accGravity.x, accGravity.y, accGravity.z);

    if(Math.abs(acc.x)>Math.abs(max.x)){
        max.x=acc.x;
    }
    if(Math.abs(acc.y)>Math.abs(max.y)){
        max.y=acc.y;
    }
    if(Math.abs(acc.z)>Math.abs(max.z)){
        max.z=acc.z;
    }
    accelerationElem.innerHTML ="Current acceleration: " + maxAcc +"m/s^2";
    accelerationGravityElem.innerHTML = "Including gravity: " + maxxAccGravity+"m/s^2";
}

function displayTop(){

    topElem.innerHTML = max.x + " " + max.y + " " + max.z;


    max = {
        x:0,
        y:0,
        z:0
    };
}
setInterval(displayTop, 500);

document.body.appendChild(accelerationElem);
document.body.appendChild(accelerationGravityElem);
document.body.appendChild(topElem);

window.addEventListener('devicemotion', handleDeviceMotion, false);