var gamestate=0;
var playercount=0;
var database
var form
var player
var game
var allplayers
var bike1
var bike2
var bike3
var bike4
var bikes
var road
var roadimage
var bikeimage

function preload(){

    roadimage=loadImage("road img.jpeg")

}
    


function setup(){
    database=firebase.database();
    createCanvas(displayWidth,displayHeight);
    game=new Game()
    game.getstate()
    game.start();

    
   
}
function draw(){
    background(roadimage)

    if(playercount===4){
        game.update(1)
    }
    if(gamestate===1){
        clear()
        game.play()
    }




}