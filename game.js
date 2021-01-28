class Game{
    constructor(){
        roadimage=loadImage("road img.jpeg")
        bikeimage=loadImage("bike.png")

    }
    getstate(){
        var gamestateref=database.ref("gamestate")
        gamestateref.on("value",(data)=>{
            gamestate=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gamestate:state
        })
    }
   async start(){
        if(gamestate===0){
            player=new Player()
            var playerref=await database.ref("playercount").once("value")
            if(playerref.exists()){
                playercount=playerref.val()
            player.getcount()
            }
            form=new Form()
            form.display()
        }
        bike1=createSprite(500,300)
        bike1.addImage(bikeimage)
        bike2=createSprite(400,300)
        bike2.addImage(bikeimage)
        bike3=createSprite(300,300)
        bike3.addImage(bikeimage)
        bike4=createSprite(200,300)
        bike4.addImage(bikeimage)
        bikes=[bike1,bike2,bike3,bike4]
    }
    play(){
        form.hide()
        text("GAME BEGIN",500,80)
        Player.getplayerinfo()
        if(allplayers!==undefined){
            var index=0
            var x=0
            var y
            for(var pl in allplayers){
                index=index+1
                x=x+200
                y=displayHeight-allplayers[pl].distance
                bikes[index-1].x=x
                bikes[index-1].y=y
                if(index===player.index){
                    bikes[index-1].addImage(bikeimage)
                    camera.position.x=displayWidth/2
                    camera.position.y=bikes[index-1].y
                }
         
        }
    }
        if(keyDown(UP_ARROW)&&player.index!==null){
            player.distance+=5
            player.update()

        }
        drawSprites()
    }
  


}