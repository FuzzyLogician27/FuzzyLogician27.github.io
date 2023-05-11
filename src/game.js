var title = "My Balloon Game";

let developer = "Patrick Ardagh-Walter";

const BALLOON_TOTAL = 25;

const balloons = [];

let score = 0;




function setup() {
    //creates canvas object and attaches it to specified container
    let canvas = createCanvas(640, 480)
    canvas.parent("game-container")

    for (let i = 0; i < BALLOON_TOTAL; i++) {
        balloons.push(new Balloon(random(width),
            random(height),
            33,
            color(random(255), random(255), random(255))))
    }
    SetupTitle();
}

function draw() {
    //a nice sky blue background
    background(135, 206, 235)

    for (let balloon of balloons) {
        balloon.blowAway();
        balloon.checkToPop();
        fill(balloon.col);
        circle(balloon.x, balloon.y, balloon.r);
    }
    if(score == BALLOON_TOTAL) youWin();

}

function youWin() {
    noLoop();
    let para = document.createElement("p");
    para.style.fontSize = "64px";
    let textNode = document.createTextNode("You Win!");
    para.appendChild(textNode);
    para.id = "win-message";
    document.getElementById("game-container").appendChild(para);
    // let canvas = document.querySelector("#game-container canvas");
    // canvas.remove();
    let retrybutton = document.createElement("button");
    retrybutton.id = "retry-button";
    retrybutton.innerHTML = "Retry Game";
    retrybutton.onclick = retryGame;
    document.getElementById("game-container").appendChild(retrybutton);
}

function resetField(){
    score = 0;
    document.getElementById("score").innerHTML = score
    balloons.length = 0;
    for (let i = 0; i < BALLOON_TOTAL; i++) {
        balloons.push(new Balloon(random(width),
            random(height),
            33,
            color(random(255), random(255), random(255))))
    }
    let canvas = createCanvas(640, 480);
    canvas.parent("game-container");

    loop();
}