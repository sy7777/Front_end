var btn = document.querySelector(".btn");
var mainGame = document.querySelector(".mainGame");
var snake = [];
var food = {
  x: 10,
  y: 10,
};
var body = document.querySelector("body");
// 定义运动的方向
/* ->{x:1,y:0}
<-{x:-1,0}
↓{x:0,y:1}
↑{x:0,y:-1}
*/
var direction = { x: -1, y: 0 };
var score = 0;
var scoreDiv = document.querySelector("#score");
var scoreFinalDiv = document.querySelector("#scoreFinal");
var startBtnDiv = document.querySelector(".startBtn");
var pauseBtnDiv = document.querySelector(".pauseBtn");
var restartBtnDiv = document.querySelector(".restartBtn");
var endPage = document.querySelector(".endGame");
var interID;
var tempID = false;

startBtnDiv.onclick = function(){
    clearInterval(interID)
    if(interID && tempID == true){
      return;
    }else{
      console.log(interID+"hhh")
      game();
    }  
}

pauseBtnDiv.onclick = function(){
  // tempID = interID;
    // if(interID != ""){
        clearInterval(interID);
    // }
} 
function renderGrid() {
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 15; j++) {
      var grid = document.createElement("div");
      grid.className = "grid";
      grid.id = `x${j}y${i}`;
      mainGame.appendChild(grid);
    }
  }
}
renderGrid();

function createSnake() {
  var randomX = parseInt(Math.random() * 14);
  var randomY = parseInt(Math.random() * 19);

  snake.push({ x: randomX, y: randomY });
}
function renderSnake() {
  // console.log(snake)
  snake.forEach(function (item, i) {
    // console.log(item)
    var snakeBody = document.querySelector(`#x${item.x}y${item.y}`);
    // console.log(snakeBody)
    snakeBody.className = "grid snake";
    // console.log(snakeBody.className )
  });
}
function renderFood() {
  var randomX = parseInt(Math.random() * 14);
  var randomY = parseInt(Math.random() * 19);
  var foodDiv = document.querySelector(`#x${randomX}y${randomY}`);
  if (foodDiv.className == "grid snake") {
    renderSnake();
  } else {
    foodDiv.className = "grid food";
  }
}
createSnake();
renderSnake();
renderFood();

function game(){
    interID = setInterval(function () {
        var headX = snake[0].x + direction.x;
        var headY = snake[0].y + direction.y;
        if (headX < 0) {
          headX = 14;
        }
        if (headX > 14) {
          headX = 0;
        }
        if (headY < 0) {
          headY = 19;
        }
        if (headY > 19) {
          headY = 0;
        }
        var head = { x: headX, y: headY };
      
        isSnake(head);
      
        if (!isFood(head)) {
          // 将删除的蛇找到相对应的对象dom,将其类名去掉蛇的类
          var snakeFoot = snake.pop();
          var snakeFootDiv = document.querySelector(`#x${snakeFoot.x}y${snakeFoot.y}`);
          snakeFootDiv.className = "grid";   
          snake.unshift(head);
        }else{
          snake.unshift(head);
          renderFood();
        }
        renderSnake();   
      }, 200);
      console.log(interID+"11111")
}



function isFood(head) {
  var newHead = document.querySelector(`#x${head.x}y${head.y}`);
  if (newHead.className == "grid food") {
    score++;
    //console.log(score);
    scoreDiv.innerHTML = score;
    return true;
  }else{
      return false;
  }
}

function isSnake(head){
    var newHead = document.querySelector(`#x${head.x}y${head.y}`);
    if (newHead.className == "grid snake") {
        clearInterval(interID);
        endPage.style.display = "flex";
        scoreFinalDiv.innerHTML = score;
      return true;
    }
}

body.addEventListener("keydown", function (e) {
  //console.log(e);
  // if(e.key == "ArrowUp" && direction.y!=1){
  if (e.key == "ArrowUp" && direction.y != 1) {
    direction = { x: 0, y: -1 };
  }
  if (e.key == "ArrowRight" && direction.x != -1) {
    direction = { x: 1, y: 0 };
  }
  if (e.key == "ArrowLeft" && direction.x != 1) {
    direction = { x: -1, y: -0 };
  }
  if (e.key == "ArrowDown" && direction.y != -1) {
    direction = { x: 0, y: 1 };
  }
});
swipe.init(body);
body.addEvent("swiperLeft", function () {
  if (direction.x != 1) {
    direction = { x: -1, y: -0 };
  }
});
body.addEvent("swiperRight", function () {
  if (direction.x != 1) {
    direction = { x: 1, y: 0 };
  }
});
body.addEvent("swiperUp", function () {
  if (direction.x != 1) {
    direction = { x: 0, y: -1 };
  }
});
body.addEvent("swiperDown", function () {
  if (direction.x != 1) {
    direction = { x: 0, y: 1 };
  }
});
restartBtnDiv.onclick = function(){
    location.reload();
    game();
}