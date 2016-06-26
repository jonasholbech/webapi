/**
 * Created by holbech on 08/06/16.
 */
var touchCountElem = document.createElement('p'),
    touchTypeElem = document.createElement('p'),
    touchDebugElem = document.createElement('p');

function handleTouchCancel(e){
    e.preventDefault();
    touchTypeElem.innerHTML=e.type;
}
function handleTouchMove(e){
    e.preventDefault();
    touchTypeElem.innerHTML=e.type;
    touchDebugElem.innerHTML = e.touches[0].pageX + " " + e.touches[0].pageY;
}
function handleTouchEnd(e){
    e.preventDefault();
    touchTypeElem.innerHTML=e.type;
}
function handleTouchStart(e){
    e.preventDefault();
    var allTouches= e.touches,
        allTouchesLength=allTouches.length;
    touchCountElem.innerHTML="There are currently "+allTouchesLength+" touches on the screen";
    touchTypeElem.innerHTML=e.type;
}
document.body.appendChild(touchCountElem);
document.body.appendChild(touchTypeElem);
document.body.appendChild(touchDebugElem);

window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchend', handleTouchEnd, false);
window.addEventListener('touchcancel', handleTouchCancel, false);
window.addEventListener('touchmove', handleTouchMove, false);



