/**
 * Created by holbech on 25/06/16.
 */
var orientationElem = document.createElement('p');
document.body.appendChild(orientationElem);
function onOrientationChange(e){
    var isPortrait = window.orientation % 180 === 0;
    orientationElem.innerHTML=isPortrait ? "portrait":"landscape";
}

window.addEventListener('orientationchange', onOrientationChange, false);
onOrientationChange();