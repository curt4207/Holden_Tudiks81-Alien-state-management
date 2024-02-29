const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height= 400;
ctx.font = "25px Impact";
// ctx.fillText("Holden Tudiks", 100, 100)

class Alien {
    constructor(){
        this.x = 50;
        this.y = 50;
        this.width = 50;
        this.height = 50;
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Game {
    constructor(canvas){
        this.canvas= canvas;
        this.width =this.canvas.width;
        this.height =this.canvas.height;
        this.alien = new Alien();
    }
    render(context){
        this.alien.draw(context);
    }
}

const game = new Game(canvas);
game.render(ctx)