/**
 * Created by holbech on 27/06/16.
 */

var debugElem = document.createElement('p'),
    svg = document.querySelector('svg'),
    ball = document.createElement('div');

ball.style.backgroundColor="red";
ball.style.borderRadius="50%";
ball.style.width=ball.style.height="80px";
ball.style.position="absolute";
ballPosition={x:0, y:0};
var highest='beta';
var lines=[];
var lineStart={
  x:0, y:0
};
function handleOrientationEvent(e){
    var //alpha = e.alpha,
        beta = e.beta,//front to back
        gamma = e.gamma;//left to right
    ballPosition.x+=gamma;
    ballPosition.y+=beta;
    ball.style.left=ballPosition.x+"px";
    ball.style.top= ballPosition.y+"px";

    var high = Math.abs(beta) > Math.abs(gamma) ? "beta":"gamma";
    if(high!==highest){
        highest=high;

        var l = document.createElementNS('http://www.w3.org/2000/svg','line');
        l.setAttribute('x1', lineStart.x);
        l.setAttribute('y1', lineStart.y);
        l.setAttribute('x2', ballPosition.x);
        l.setAttribute('y2', ballPosition.y);
        svg.appendChild(l);
        lines.push(l);
        debugElem.innerHTML="draw a line "+lineStart.x + " "+lineStart.y + " " + ballPosition.x + " " +ballPosition.y;
        lineStart.x=ballPosition.x;
        lineStart.y=ballPosition.y;

    }
}

document.body.appendChild(debugElem);
document.body.appendChild(ball);
window.addEventListener('deviceorientation', handleOrientationEvent, false);