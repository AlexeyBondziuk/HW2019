window.onload = () => {
    init();
}

let canvas,
    context,
    h,
    w;

let mouse = {
    x: 0,
    y: 0
};

let draw = false;

var myColor = "black";

document.getElementById('color').oninput = function () {
    myColor = this.value;

}


function init() {
    try {
        let flag = false;
        let canvasDiv = document.getElementById('canvasDiv');
        canvasDiv.innerHTML = '<canvas id="myCanvas" width="600" height="500"></canvas>';
        canvas = document.getElementById("myCanvas");
        context = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;
        canvas.addEventListener("mousedown", drawTrue);
        canvas.addEventListener("mousemove", drawMove);
        canvas.addEventListener("mouseup", drawFalse);
        flag = true;
        return flag;
    } catch (e) {
        throw new Error('div element not found at DOM!!!');
    }
}

function drawMove(e) {
    if (draw == true) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        context.fillRect( mouse.x-5, mouse.y-5, 5, 5);
        context.fillStyle = myColor;
        context.fill();
    }
}

function drawFalse(e) {
    draw = false;
}

function drawTrue(e) {
    draw = true;
}
