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
    }else if (menu == "item"){
        ctx.fillStyle = "#0000FF"
        ctx.fillRect(0,0,canvas.width,canvas.height)
        ctx.fillStyle = "#9999FF"
        ctx.fillRect(0,0,canvas.width,canvas.height-40*pixelsize)
        ctx.fillStyle = "#DDAA11"
        ctx.fillRect(pixelsize*2,pixelsize*2, canvas.width/3+pixelsize*10, 20*pixelsize)
        ctx.fillRect(canvas.width/3+pixelsize*10,pixelsize*2, (canvas.width/3)*2-pixelsize*12, canvas.height-42*pixelsize)
        ctx.fillStyle = "#EEEEEEEE"
        ctx.fillRect(canvas.width/3+pixelsize*13,pixelsize*5, (canvas.width/3)*2-pixelsize*18, canvas.height-48*pixelsize)
        print(bagPockets[bagPockets[3]][0], 3*pixelsize, 8*pixelsize, pixelsize)
        ctx.drawImage(bag, 9*pixelsize, 30*pixelsize, bag.width*pixelsize, bag.height*pixelsize)
        var lineHeight = 0
        for(counter = bagPockets[bagPockets[3]][1].length-1;counter >= 0;counter--){
            print("x"+String(bagPockets[bagPockets[3]][1][counter-scrolledInBag][1]), 150*pixelsize, 10*pixelsize+lineHeight*pixelsize, pixelsize)
            print(itemDex[bagPockets[bagPockets[3]][1][counter-scrolledInBag][0]][0], 85*pixelsize, 10*pixelsize+lineHeight*pixelsize, pixelsize)
            lineHeight += 8
            if(lineHeight == 80){
                break
            }
        }
        if(bagPockets[bagPockets[3]][1].length != 0){
            ctx.drawImage(menuSelecter, 75*pixelsize, 10*pixelsize+8*pixelsize*selectedItem, 7*pixelsize, 7*pixelsize)
            print(itemDex[bagPockets[bagPockets[3]][1][bagPockets[bagPockets[3]][1].length-1-(selectedItem+scrolledInBag)][0]][2][0], 5*pixelsize, 103*pixelsize, pixelsize)
            print(itemDex[bagPockets[bagPockets[3]][1][bagPockets[bagPockets[3]][1].length-1-(selectedItem+scrolledInBag)][0]][2][1], 5*pixelsize, 113*pixelsize, pixelsize)
        }
    }else if(menu == "pkmn"){
        ctx.fillStyle = "darkblue"
        ctx.fillRect(0,0, canvas.width, canvas.height)
        ctx.fillStyle = "orange"
        if (selectedPartySlot == 0){
            ctx.fillRect(0*pixelsize,33*pixelsize,77*pixelsize, 32*pixelsize)
        }else{
            ctx.fillRect(76*pixelsize, ((3+(selectedPartySlot-1)*24)-1)*pixelsize,98*pixelsize,22*pixelsize)
        }
        ctx.fillStyle = "blue"
        ctx.fillRect(25*pixelsize+52*pixelsize,3*pixelsize,96*pixelsize, 20*pixelsize)
        ctx.fillRect(25*pixelsize+52*pixelsize,27*pixelsize,96*pixelsize, 20*pixelsize)
        ctx.fillRect(25*pixelsize+52*pixelsize,51*pixelsize,96*pixelsize, 20*pixelsize)
        ctx.fillRect(25*pixelsize+52*pixelsize,75*pixelsize,96*pixelsize, 20*pixelsize)
        ctx.fillRect(25*pixelsize+52*pixelsize,99*pixelsize,96*pixelsize, 20*pixelsize)
        ctx.fillRect(1*pixelsize,34*pixelsize,75*pixelsize, 30*pixelsize)
        if (party[0][7] == ""){
            print(pokedex[party[0][0]][0].toLowerCase(), 12*pixelsize-6*pixelsize, 65*pixelsize-12*pixelsize, pixelsize)
        }else{
            print(party[0][7].toLowerCase(), 12*pixelsize-6*pixelsize, 65*pixelsize-12*pixelsize, pixelsize)
        }
        print("lvl " + String(party[0][1]), 30*pixelsize-6*pixelsize,50*pixelsize-12*pixelsize, pixelsize)
        ctx.fillStyle = "black"
        ctx.fillRect(23*pixelsize-6*pixelsize,59*pixelsize-12*pixelsize,57*pixelsize,4*pixelsize)
        var HPTODraw = (party[0][8]/Math.round((((8+2*pokedex[party[0][0]][1][0]+(0/4)+100) * party[0][1])/100)+10))*55
        if(HPTODraw > 28){
            ctx.fillStyle = "green"
        }else if(HPTODraw > 14){
            ctx.fillStyle= "orange"
        }else{
            ctx.fillStyle = "red"
        }
        ctx.fillRect(24*pixelsize-6*pixelsize,60*pixelsize-12*pixelsize,HPTODraw*pixelsize,2*pixelsize)
        ctx.drawImage(pokemonShapes[pokedex[party[0][0]][1][5]], 8*pixelsize-6*pixelsize, 47*pixelsize-12*pixelsize, 16*pixelsize, 16*pixelsize)
        for (counter = 1; counter < party.length; counter++){
            if (party[counter][7] == ""){
                print(pokedex[party[counter][0]][0].toLowerCase(), 95*pixelsize, (3+(counter-1)*24)*pixelsize, pixelsize)
            }else{
                print(party[counter][7].toLowerCase(), 95*pixelsize, (3+(counter-1)*24)*pixelsize, pixelsize)
            }
            print("lvl " + String(party[counter][1]), 95*pixelsize,((3+(counter-1)*24)+13)*pixelsize, pixelsize)
            ctx.fillStyle = "black"
            ctx.fillRect(95*pixelsize,((3+(counter-1)*24)+8)*pixelsize,76*pixelsize,4*pixelsize)
            var HPTODraw = (party[counter][8]/((((8+2*pokedex[party[counter][0]][1][0]+(0/4)+100) * party[counter][1])/100)+10))*74
            if(HPTODraw > 37){
                ctx.fillStyle = "green"
            }else if(HPTODraw > 19){
                ctx.fillStyle= "orange"
            }else{
                ctx.fillStyle = "red"
            }
            ctx.fillRect(96*pixelsize,((3+(counter-1)*24)+9)*pixelsize,HPTODraw*pixelsize,2*pixelsize)
            ctx.drawImage(pokemonShapes[pokedex[party[counter][0]][1][5]], 78*pixelsize, ((3+(counter-1)*24)+3)*pixelsize, 16*pixelsize, 16*pixelsize)
        }
        if (partySubMenu == true){
            var partyMenuX = 0
            var partyMenuY = 0
            if (selectedPartySlot == 0){
                partyMenuX = 1*pixelsize
                partyMenuY = 34*pixelsize
            }else{
                partyMenuX = 77 *pixelsize
                partyMenuY = (3+(selectedPartySlot-1)*24)*pixelsize
            }
            ctx.fillStyle = "black"
            ctx.fillRect(partyMenuX,partyMenuY,34*pixelsize,19*pixelsize)
            ctx.fillStyle = "white"
            ctx.fillRect(1*pixelsize+partyMenuX,1*pixelsize+partyMenuY,32*pixelsize,17*pixelsize)
            ctx.drawImage(menuSelecter, 2*pixelsize+partyMenuX, 2*pixelsize+selectedMenuSlot*7*pixelsize+partyMenuY, 7*pixelsize, 7*pixelsize)
            print("move",10*pixelsize+partyMenuX,2*pixelsize+partyMenuY,pixelsize)
            print("exit", 10*pixelsize+partyMenuX, 10*pixelsize+partyMenuY, pixelsize)
        }
    }
}