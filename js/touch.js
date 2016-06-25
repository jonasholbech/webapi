/**
 * Created by holbech on 08/06/16.
 */
var touchCountElem = document.createElement('p'),
    touchTypeElem = document.createElement('p');

function handleTouchEvent(e){
    var allTouches= e.touches,
        allTouchesLength=allTouches.length;
    if(e.type==="touchstart"){
        e.preventDefault();
    }

    touchCountElem.innerHTML="There are currently "+allTouchesLength+" touches on the screen";
    touchTypeElem.innerHTML=e.type;
}
document.body.appendChild(touchCountElem);
document.body.appendChild(touchTypeElem);

window.addEventListener('touchstart', handleTouchEvent, false);
window.addEventListener('touchend', handleTouchEvent, false);
window.addEventListener('touchcancel', handleTouchEvent, false);
window.addEventListener('touchmove', handleTouchEvent, false);



