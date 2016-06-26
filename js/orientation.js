/**
 * Created by holbech on 25/06/16.
 */
var orientationElem = document.createElement('p'),
    lockPositionLabelElem = document.createElement('label'),
    lockPositionElem = document.createElement('checkbox'),
    debugElem = document.createElement('p');

document.body.appendChild(orientationElem);
document.body.appendChild(debugElem);
lockPositionLabelElem.appendChild(document.createTextNode('Lock orientation?'));
lockPositionLabelElem.appendChild(lockPositionElem);
document.body.appendChild(lockPositionLabelElem);

function onOrientationChange(e){
    var isPortrait = window.orientation % 180 === 0;
    orientationElem.innerHTML=isPortrait ? "portrait":"landscape";
}

function handleChange(e){
    var isPortrait = window.orientation % 180 === 0;

    var lockedAllowed = window.screen.lockOrientation(isPortrait ? "portrait":"landscape");
    debugElem2.innerHTML="change"+isPortrait ? "portrait":"landscape" + lockedAllowed;

}

lockPositionElem.addEventListener('change', handleChange, false);
window.addEventListener('orientationchange', onOrientationChange, false);
onOrientationChange();
