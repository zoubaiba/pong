function Ball(vx , vy) {
this.id = "ball";
this.x = vx;
this.y = vy;

}
function place_objects(objects) {
for(let object of objects) {
let element = document.getElementById(object.id);
element.style.left = object.x + "px";
element.style.top = object.y + "px";
}
}
function update() {
ball.x += vx;
ball.y += vy;
place_objects([ball]);
}
let ball;
function init() {
ball = new Ball();

setInterval(update, 100);
}