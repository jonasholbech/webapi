/**
 * Created by holbech on 26/06/16.
 */

var body = document.querySelector('body');
var button = document.createElement('button');
button.appendChild(document.createTextNode("Go into fullscreen"));
function launchIntoFullscreen(elemen) {
    element=body;
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}
button.addEventListener('click', launchIntoFullscreen, false);
document.body.appendChild(button);