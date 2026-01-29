//creation du constructeur balles 
function Ball(x, y, vx, vy) {
    this.id = "ball";
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
}
//creation du constructeur raquette 
function raquet(id,x,y,vy){
    this.id = id;
    this.x = x;
    this.y = y;
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
    //mise a jour de la position de la balle en fonction des vitesses 
    ball.x += ball.vx;
    ball.y += ball.vy;
    
    //recuperation des caracteristiques de la balles
    let body = document.body.getBoundingClientRect();
    let ballElement = document.getElementById("ball");
    let ballWidth = ballElement.width;
    let ballHeight = ballElement.height;
    //recuperation des caracteristiques des raquets
    let raquetteElement = document.getElementById("raquette1");
    let raquetteWidth = raquetteElement.width;
    let raquetteHeight = raquetteElement.height;

    //gestion du cas ou la balle sort de l'ecran
    if (ball.x < 0 || ball.x > body.width - ballWidth) {
        ball.x = 400
        ball.y = 400
        ball.vx = 50 * (Math.random() < 0.5 ? -1 : 1);
        ball.vy = 50 * (Math.random() < 0.5 ? -1 : 1);
    }
    //gestion des rebonds 
    if (ball.y < 0 || ball.y > body.height - ballHeight) {
        ball.vy = -ball.vy;
    }
    //deplacement de la raquette gauche 
    if (buttons.p1_up && raquette1.y > 0) {
        raquette1.y -= raquette1.vy;
    }
    if (buttons.p1_down && raquette1.y < (body.height - raquetteHeight)) {
        raquette1.y += raquette1.vy;
    }
    //deplacement de la raquette droite
    if (buttons.p2_up && raquette2.y > 0) {
        raquette2.y -= raquette2.vy;
    }
    if (buttons.p2_down && raquette2.y < (body.height - raquetteHeight)) {
        raquette2.y += raquette2.vy;
    }
    //gestion des rebons raquettes
    //Raquette 1 (Gauche)
    if (ball.x < raquette1.x + raquetteWidth && 
        (ball.y + ballHeight / 2) > raquette1.y && 
        (ball.y + ballHeight / 2) < (raquette1.y + raquetteHeight)) {
            
            ball.vx = -ball.vx;
    }

    //Raquette 2 (Droite)
    if ((ball.x + ballWidth) > raquette2.x && 
        (ball.y + ballHeight / 2) > raquette2.y && 
        (ball.y + ballHeight / 2) < (raquette2.y + raquetteHeight)) {
            
            ball.vx = -ball.vx;
    }
    //gestion du score
    //TO DO
    place_objects([ball, raquette1, raquette2]);
}
function track_player_input(event) {
if(event.type == "keydown") {
switch(event.key) {
case "a": buttons.p1_up = true; break;
case "q": buttons.p1_down = true; break;
case "p": buttons.p2_up = true; break;
case "m": buttons.p2_down = true; break;
}
} else if(event.type == "keyup") {
switch(event.key) {
case "a": buttons.p1_up = false; break;
case "q": buttons.p1_down = false; break;
case "p": buttons.p2_up = false; break;
case "m": buttons.p2_down = false; break;
}
}
}
document.addEventListener("keydown", track_player_input);
document.addEventListener("keyup", track_player_input);



//creation des objets balle, raquettes et boutons 
let ball;
let raquette1;
let raquette2;
let buttons = { p1_up: false, p1_down: false, p2_up: false, p2_down: false };
let score1 = 0;
let score2 = 0;

function init() {
    ball = new Ball(400, 400, 15, 15);
    setInterval(update, 100);
    let screen = document.body.getBoundingClientRect();
    raquette1 = new raquet("raquette1", 10, 200, 15);
    raquette2 = new raquet("raquette2", screen.width - 100, 200, 15);
    //tests
    console.log("Raquette 1 créée :", raquette1);
    console.log("Raquette 2 créée :", raquette2);
}
document.addEventListener("DOMContentLoaded", init);
