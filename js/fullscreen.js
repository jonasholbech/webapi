/**
 * Created by holbech on 26/06/16.
 */

var body = document.querySelector('body');
var button = document.createElement('button');
button.appendChild(document.createTextNode("Toggle fullscreen"));
function launchIntoFullscreen() {
    var docelem = document.documentElement;
    if (docelem.requestFullscreen) {
        docelem.requestFullscreen();
    }
    else if (docelem.mozRequestFullScreen) {
        docelem.mozRequestFullScreen();
    }
    else if (docelem.webkitRequestFullscreen) {
        docelem.webkitRequestFullscreen();
    }
    else if (docelem.msRequestFullscreen) {
        docelem.msRequestFullscreen();
    }
}
button.addEventListener('click', launchIntoFullscreen, false);
document.body.appendChild(button);