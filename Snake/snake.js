var btn = document.querySelector(".btn");
var mainGame = document.querySelector(".mainGame");
// var snake = [{x:0, y:1},{x:1, y:1},{x:2, y:1}];
// var snake = [{x:0, y:1},{x:1, y:1},{x:2, y:1}];
var snake = [];
var food = {
    x:10,y:10
}
function renderGrid(){
    for (var i = 0; i < 20; i++){
        for(var j = 0; j < 15; j++){
            var grid = document.createElement("div");
            grid.className = "grid";
            grid.id = `x${j}y${i}`;
            mainGame.appendChild(grid);
        }
    }
}
renderGrid();

function createSnake(){
    var randomX = parseInt(Math.random()*14);
    var randomY = parseInt(Math.random()*19);
    
    snake.push({x:randomX,y:randomY});

}
function renderSnake(){
    console.log(snake)
    snake.forEach(function(item, i){
        console.log(item)
        var snakeBody = document.querySelector(`#x${item.x}y${item.y}`);
        // var snakeBody = document.querySelector("#x"+item.x+"#y"+item.y);
        console.log(snakeBody)
        snakeBody.className = "grid snake"
        console.log(snakeBody.className )
        
    })
}
function renderFood(){
    var randomX = parseInt(Math.random()*14);
    var randomY = parseInt(Math.random()*19);
    var foodDiv = document.querySelector(`#x${randomX}y${randomY}`);
    if(foodDiv.className == "grid snake"){
renderSnake()
    }else{
        foodDiv.className = "grid food";
    }
}
createSnake();
renderSnake();
renderFood();