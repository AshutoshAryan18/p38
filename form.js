class Form{
    constructor(){
        this.input=createInput("NAME")
        this.button=createButton("PLAY")
        this.greeting=createElement("h4")


    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()

    }
    display(){
        var title=createElement("h2")
        title.html("3D BIKE RACING GAME")
        title.position(displayWidth/2,100)
        this.input.position(600,300)
        this.button.position(600,400)

       this.button.mousePressed(()=>{
            this.input.hide()
           this.button.hide()
            player.name=this.input.value()
            playercount+=1
            player.index=playercount
            player.update()
            player.updatecount(playercount)
            this.greeting.html("HI "+player.name)
            this.greeting.position(100,200)
        })
    }
}