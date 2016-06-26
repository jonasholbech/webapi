/**
 * Created by holbech on 08/06/16.
 */
var touchCountElem = document.createElement('p'),
    touchTypeElem = document.createElement('p'),
    touchDebugElem = document.createElement('p'),
    svg = document.querySelector('svg');

function handleTouchCancel(e){
    e.preventDefault();
    touchTypeElem.innerHTML=e.type;
}
//let's start with the first finger :-)
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

    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
    newElement.setAttribute("d","M 0 0 L 10 10"); //Set path's data
    newElement.style.stroke = "#000"; //Set stroke colour
    newElement.style.strokeWidth = "5px"; //Set stroke width
    svg.appendChild(newElement);
    
}
document.body.appendChild(touchCountElem);
document.body.appendChild(touchTypeElem);
document.body.appendChild(touchDebugElem);

window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchend', handleTouchEnd, false);
window.addEventListener('touchcancel', handleTouchCancel, false);
window.addEventListener('touchmove', handleTouchMove, false);



