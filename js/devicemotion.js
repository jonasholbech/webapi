/**
 * Created by holbech on 26/06/16.
 */
var accelerationElem = document.createElement('p'),
    accelerationGravityElem = document.createElement('p');

function handleDeviceMotion(e){
    var acc = e.acceleration,
        maxAcc = Math.max(acc.x, acc.y, acc.z),
        accGravity = e.accelerationIncludingGravity,
        maxxAccGravity = Math.max(accGravity.x, accGravity.y, accGravity.z);

    accelerationElem.innerHTML ="Current acceleration: " + maxAcc +"m/s^2";
    accelerationGravityElem.innerHTML = "Including gravity: " + maxxAccGravity+"m/s^2";
}

document.body.appendChild(accelerationElem);
document.body.appendChild(accelerationGravityElem);

window.addEventListener('devicemotion', handleDeviceMotion, false);