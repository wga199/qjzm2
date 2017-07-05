/**
 * Created by Administrator on 2017/5/12 0012.
 * name:消灭bug
 */

var canvas=$("#annihilate_bug");
var context=canvas.getContext('2d');
    centerX = canvas.width/2,
    centerY = canvas.height/2,
    rad = Math.PI*2/100,
    speed = 0.1;

function text(n){
    context.save();
    context.fillStyle = "#F47C7C";
    context.font = "40px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(n.toFixed(0)+"%", centerX, centerY);
    context.restore();
}
function blueCircle(n){
    context.save();
    context.beginPath();
    context.strokeStyle = "#49f";
    context.lineWidth = 12;
    context.arc(centerX, centerY, 100 , -Math.PI/2, -Math.PI/2 + n*rad, false);
    context.stroke();
    context.restore();
}

function whiteCircle(){
    context.save();
    context.beginPath();
    context.strokeStyle = "#A5DEF1";
    context.lineWidth = 12;
    context.arc(centerX, centerY, 100 , 0, Math.PI*2, false);
    context.stroke();
    context.closePath();
    context.restore();
}

(function drawFrame(){
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);

    whiteCircle();
    text(speed);
    blueCircle(speed);

    if(speed > 100) speed = 0;
    speed += 0.1;
}());
