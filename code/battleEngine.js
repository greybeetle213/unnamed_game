function BattleEngineGraphics(){
    ctx.fillStyle = "lightblue"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "black"
    ctx.fillRect(5*pixelsize,5*pixelsize, 50*pixelsize,20*pixelsize)
    ctx.fillRect(canvas.width-55*pixelsize,canvas.height-65*pixelsize, 50*pixelsize,20*pixelsize)
    ctx.fillRect(0,canvas.height-40*pixelsize,canvas.width,40*pixelsize)
    ctx.fillStyle = "white"
    ctx.fillRect(1*pixelsize,canvas.height-38*pixelsize,canvas.width-2*pixelsize,38*pixelsize)
    ctx.fillStyle = "brown"
    
}
function BattleEngine(){
}