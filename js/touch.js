/**
 * Created by holbech on 08/06/16.
 */
var touchCountElem = document.createElement('p'),
    touchTypeElem = document.createElement('p'),
    touchDebugElem = document.createElement('p'),
    svg = document.querySelector('svg'),
    coords=[],
    paths=[];

function handleTouchCancel(e){
    e.preventDefault();
    touchTypeElem.innerHTML=e.type;
}
//let's start with the first finger :-)
function handleTouchMove(e){
    e.preventDefault();
    touchTypeElem.innerHTML=e.type;
    touchDebugElem.innerHTML = e.touches[0].pageX + " " + e.touches[0].pageY;
    coords.push([e.touches[0].pageX, e.touches[0].pageY]);

    var i;
    //var t = coords.shift();
    var dString="M ";
    for(i=0; i<coords.length; i++){
        dString+=coords[i][0]+" "+coords[i][1]+" ";
    }
    paths[paths.length-1].setAttribute('d', dString);
}
function handleTouchEnd(e){
    e.preventDefault();
    touchTypeElem.innerHTML=e.type;


    var i;
    //var t = coords.shift();
    var dString="M ";
    for(i=0; i<coords.length; i++){
        dString+=coords[i][0]+" "+coords[i][1]+" ";
    }
    paths[paths.length-1].setAttribute('d', dString);
    coords=[];
}
function handleTouchStart(e){
    e.preventDefault();
    var allTouches= e.touches,
        allTouchesLength=allTouches.length;
    touchCountElem.innerHTML="There are currently "+allTouchesLength+" touches on the screen";
    touchTypeElem.innerHTML=e.type;

    coords.push([e.touches[0].pageX, e.touches[0].pageY]);
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
    newElement.setAttribute("d",dString); //Set path's data
    svg.appendChild(newElement);
    paths.push(newElement)
    /*
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
    newElement.setAttribute("d","M 0 0 L 10 10"); //Set path's data
    svg.appendChild(newElement);
    */
}
document.body.appendChild(touchCountElem);
document.body.appendChild(touchTypeElem);
document.body.appendChild(touchDebugElem);

window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchend', handleTouchEnd, false);
window.addEventListener('touchcancel', handleTouchCancel, false);
window.addEventListener('touchmove', handleTouchMove, false);



