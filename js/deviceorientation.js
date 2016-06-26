/**
 * Created by holbech on 26/06/16.
 */

var debugElem = document.createElement('p'),
    ball = document.createElement('div');
ball.style.backgroundColor="red";
ball.style.borderRadius="50%";
ball.style.width=ball.style.height="80px";
ball.style.position="absolute";
ballPosition={x:0, y:0}
function handleOrientationEvent(e){
    var //alpha = e.alpha,
        beta = e.beta,//front to back
        gamma = e.gamma;//left to right
    debugElem.innerHTML= "beta: " + beta+ "<br>gamma: " + gamma;
    ballPosition.x+=beta;
    ballPosition.y+=gamma;
    ball.style.left=ballPosition.x+"px";
    ball.style.top= ballPosition.y+"px";
}

document.body.appendChild(debugElem);
document.body.appendChild(ball);
window.addEventListener('deviceorientation', handleOrientationEvent, false);