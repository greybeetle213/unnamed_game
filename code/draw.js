function draw(){
    ctx.clearRect(0, 0, document.getElementById("canvas").width, document.getElementById("canvas").height)
    ctx.drawImage(room1, player.camerax+map.startingPos[0],player.cameray+map.startingPos[1], map.width, map.height)
    ctx.drawImage(player.image[player.Direction][player.AnimationProgress], player.playerx, player.playery, pixelsize * 16, pixelsize * 16)
    npcstodraw = map.npcs.length - 1
    while(npcstodraw >= 0){
        ctx.drawImage(map.npcs[npcstodraw][3][0],map.npcs[npcstodraw][1]+player.camerax,map.npcs[npcstodraw][2]+player.cameray,16*pixelsize,16*pixelsize)
        npcstodraw -= 1
    }
    if(textshowing == true){
        ctx.drawImage(textbox, 3*pixelsize,98*pixelsize,170*pixelsize,40*pixelsize)
        letterx = 0
        print(onScreenText[0], 5*pixelsize, 100*pixelsize, pixelsize*2)
        print(onScreenText[1], 5*pixelsize, 120*pixelsize, pixelsize*2)
    }
    if (menu == "main"){
        ctx.beginPath()
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(121*pixelsize, 5*pixelsize,50*pixelsize, 100*pixelsize)
        ctx.fillStyle = "#000000"
        ctx.lineWidth = String(1*pixelsize)
        ctx.rect(121*pixelsize, 5*pixelsize,50*pixelsize, 100*pixelsize)
        ctx.stroke()
        print("pokemon", 130*pixelsize, 11*pixelsize, pixelsize)
        print("pokedex", 130*pixelsize, 25*pixelsize, pixelsize)
        print("item", 130*pixelsize, 39*pixelsize, pixelsize)
        print("profile", 130*pixelsize, 53*pixelsize, pixelsize)
        print("save", 130*pixelsize, 67*pixelsize, pixelsize)
        print("option", 130*pixelsize, 81*pixelsize, pixelsize)
        print("exit", 130*pixelsize, 95*pixelsize, pixelsize)
        ctx.drawImage(menuSelecter, 122*pixelsize, 14*selectedMenuSlot*pixelsize+11*pixelsize,7*pixelsize,7*pixelsize)
    }
    if (menu == "item"){
        ctx.fillStyle = "#0000FF"
        ctx.fillRect(0,0,canvas.width,canvas.height)
        ctx.fillStyle = "#9999FF"
        ctx.fillRect(0,0,canvas.width,canvas.height-40*pixelsize)
        ctx.fillStyle = "#DDAA11"
        ctx.fillRect(pixelsize*2,pixelsize*2, canvas.width/3+pixelsize*10, 20*pixelsize)
        ctx.fillRect(canvas.width/3+pixelsize*10,pixelsize*2, (canvas.width/3)*2-pixelsize*12, canvas.height-42*pixelsize)
        ctx.fillStyle = "#EEEEEE"
        ctx.fillRect(canvas.width/3+pixelsize*13,pixelsize*5, (canvas.width/3)*2-pixelsize*18, canvas.height-48*pixelsize)
        print(bagPockets[bagPockets[3]][0], 3*pixelsize, 8*pixelsize, pixelsize)
        ctx.drawImage(bag, 9*pixelsize, 30*pixelsize, bag.width*pixelsize, bag.height*pixelsize)
        for(counter = bagPockets[bagPockets[3]][1].length-1;counter <= 0;counter--){
            print(itemDex[bagPockets[bagPockets[3]][1][counter][0]][0], 75*pixelsize, 10*pixelsize, pixelsize)
        }
    }
}