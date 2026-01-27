function Ball(x, y, vx, vy) {
    this.id = "ball";
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
}
function place_objects(objects) {
    for (let object of objects) {
        let element = document.getElementById(object.id);
        element.style.left = object.x + "px";
        element.style.top = object.y + "px";
    }
}
function update() {

    ball.x += ball.vx;
    ball.y += ball.vy;
    

    let body = document.body.getBoundingClientRect();
    let ballElement = document.getElementById("ball");
    let ballWidth = ballElement.width;
    let ballHeight = ballElement.height;

    if (ball.x < 0 || ball.x > body.width - ballWidth) {
        ball.x = 400
        ball.y = 400
        ball.vx = 20 * (Math.random() < 0.5 ? -1 : 1);
        ball.vy = 20 * (Math.random() < 0.5 ? -1 : 1);
    }
    
    if (ball.y < 0 || ball.y > body.height - ballHeight) {
        ball.vy = -ball.vy;
    }

    
    place_objects([ball]);
}

let ball;

function init() {
    ball = new Ball(400, 400, 15, 15);
    setInterval(update, 100);
}
