/**
 * Created by holbech on 27/06/16.
 */

var svg = document.querySelector('svg'),
    ball = document.createElement('div');

ball.style.backgroundColor="red";
ball.style.borderRadius="50%";
ball.style.width=ball.style.height="80px";
ball.style.position="absolute";
ball.style.transform="translate(-40px, -40px)";
ballPosition={x:0, y:0};
var highest='beta';
var lines=[];
var lineStart={
  x:0, y:0
};
var tempLine=document.createElementNS('http://www.w3.org/2000/svg','line');
tempLine.setAttribute('x1', lineStart.x);
tempLine.setAttribute('y1', lineStart.y);
tempLine.setAttribute('x2', ballPosition.x);
tempLine.setAttribute('y2', ballPosition.y);
svg.appendChild(tempLine);

function handleOrientationEvent(e){
    var //alpha = e.alpha,
        beta = e.beta,//front to back
        gamma = e.gamma;//left to right
    var high = Math.abs(beta) > Math.abs(gamma) ? "beta":"gamma";
    if(high==="beta"){
        ballPosition.y+=beta;
    } else {
        ballPosition.x+=gamma;
    }

    ball.style.left=ballPosition.x+"px";
    ball.style.top= ballPosition.y+"px";


    if(high!==highest){
        highest=high;

        var l = document.createElementNS('http://www.w3.org/2000/svg','line');
        l.setAttribute('x1', lineStart.x);
        l.setAttribute('y1', lineStart.y);
        l.setAttribute('x2', ballPosition.x);
        l.setAttribute('y2', ballPosition.y);
        svg.appendChild(l);
        lines.push(l);

        lineStart.x=ballPosition.x;
        lineStart.y=ballPosition.y;
        tempLine.setAttribute('x1', lineStart.x);
        tempLine.setAttribute('y1', lineStart.y);
    } else {
        tempLine.setAttribute('x2', ballPosition.x);
        tempLine.setAttribute('y2', ballPosition.y);
    }
}

document.body.appendChild(ball);
window.addEventListener('deviceorientation', handleOrientationEvent, false);