/**
 * Created by holbech on 26/06/16.
 */

var debugElem = document.createElement('p');
function handleOrientationEvent(e){
    var alpha = e.alpha,
        beta = e.beta,
        gamma = e.gamma;
    debugElem.innerHTML= "alpha: "+ alpha + "<br>beta: " + beta+ "<br>gamma: " + gamma;
}

document.body.appendChild(debugElem);
window.addEventListener('deviceorientation', handleOrientationEvent, false);