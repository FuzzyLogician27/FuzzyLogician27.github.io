{/* <script src="https://cdn.jsdelivr.net/npm/p5@1.4.2/lib/p5.js" defer></script>
    <script src="src/balloon.js"></script>
    <script src="src/game.js"></script> */}

let game;

function openGame() {
    console.log("opening game");
    let para = document.createElement("p");
    para.id = "score-para";
    let textNode = document.createTextNode("Score: ");
    para.appendChild(textNode);
    let span = document.createElement("span");
    span.id = "score";
    span.textContent = 0;
    para.append(span);
    document.getElementById("game-container").append(para);

    let p5 = document.createElement("script");
    p5.src = "https://cdn.jsdelivr.net/npm/p5@1.4.2/lib/p5.js";
    p5.defer = true;
    document.getElementById("game-container").append(p5);
    let balloonscript = document.createElement("script");
    balloonscript.src = "src/balloon.js";
    document.getElementById("game-container").append(balloonscript);
    let gamescript = document.createElement("script");
    gamescript.src = "src/game.js";
    document.getElementById("game-container").append(gamescript);

    let openButton = document.getElementById("start-button");
    if(openButton != null){
        openButton.parentNode.removeChild(openButton);
    }
    
}

function SetupTitle() {
    let gameTitleText = `${title} - by ${developer}.`;
    let gameTitle = document.getElementById("game-title");
    gameTitle.innerHTML = gameTitleText
}

function retryGame(){
    console.log("Restarting")
    let retryButton = document.getElementById("retry-button");
    if(retryButton != null){
        retryButton.parentNode.removeChild(retryButton);
    }
    let winMessage = document.getElementById("win-message");
    winMessage.remove();
    // let score = document.getElementById("score-para");
    // score.remove();
    // let node = document.getElementById("game-container");
    // let para = document.createElement("p");
    // para.id = "score-para";
    // let textNode = document.createTextNode("Score: ");
    // para.appendChild(textNode);
    // let span = document.createElement("span");
    // span.id = "score";
    // span.textContent = 0;
    // para.append(span);
    // document.getElementById("game-container").append(para);
    resetField();
    
    if(!isLooping){
        loop();
    }
}