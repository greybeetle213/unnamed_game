function draw(){
    ctx.clearRect(0, 0, document.getElementById("canvas").width, document.getElementById("canvas").height)
    if (menu == "none" || menu == "main"){
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
    }else if (menu == "item" || (menu == "fight" && currentBattleInfo[3] == 1.3)){
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
    }else if(menu == "pkmn" || menu == "fight" && currentBattleInfo[3] == 1.2){
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
        ctx.fillStyle = "white"
        ctx.fillRect(1*pixelsize,canvas.height-21*pixelsize,canvas.width-2*pixelsize, 20*pixelsize)
        if (party[0][7] == ""){
            print(pokedex[party[0][0]][0].toLowerCase(), 12*pixelsize-6*pixelsize, 65*pixelsize-12*pixelsize, pixelsize)
        }else{
            print(party[0][7].toLowerCase(), 12*pixelsize-6*pixelsize, 65*pixelsize-12*pixelsize, pixelsize)
        }
        print("lvl " + String(Math.floor(party[0][1])), 30*pixelsize-6*pixelsize,50*pixelsize-12*pixelsize, pixelsize)
        ctx.fillStyle = "black"
        ctx.fillRect(23*pixelsize-6*pixelsize,59*pixelsize-12*pixelsize,57*pixelsize,4*pixelsize)
        var HPTODraw = (party[0][8]/Math.round((2*pokedex[party[0][0]][1][0]*party[0][1])/100+party[0][1]+10))*55
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
            print("lvl " + String(Math.floor(party[counter][1])), 95*pixelsize,((3+(counter-1)*24)+13)*pixelsize, pixelsize)
            ctx.fillStyle = "black"
            ctx.fillRect(95*pixelsize,((3+(counter-1)*24)+8)*pixelsize,76*pixelsize,4*pixelsize)
            var HPTODraw = (party[counter][8]/Math.round((2*pokedex[party[counter][0]][1][0]*party[counter][1])/100+party[counter][1]+10))*74
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
            ctx.fillRect(partyMenuX,partyMenuY,34*pixelsize,27*pixelsize)
            ctx.fillStyle = "white"
            ctx.fillRect(1*pixelsize+partyMenuX,1*pixelsize+partyMenuY,32*pixelsize,25*pixelsize)
            ctx.drawImage(menuSelecter, 2*pixelsize+partyMenuX, 2*pixelsize+selectedMenuSlot*7*pixelsize+partyMenuY, 7*pixelsize, 7*pixelsize)
            print("move",10*pixelsize+partyMenuX,2*pixelsize+partyMenuY,pixelsize)
            print("info" ,10*pixelsize+partyMenuX, 10*pixelsize+partyMenuY, pixelsize)
            print("exit", 10*pixelsize+partyMenuX, 18*pixelsize+partyMenuY, pixelsize)
        }
        if (movingPokemon == -1){
            print("select a pokemon.",2*pixelsize,canvas.height-20*pixelsize, pixelsize)
        }else{
            print("move to where?",2*pixelsize,canvas.height-20*pixelsize, pixelsize)
        }
    }else if(menu == "pkmninfo"){
        ctx.fillStyle = "yellow"
        ctx.fillRect(0,0,canvas.width,canvas.height)
        miscImage.src = "pokemon/front_"+pokedex[party[selectedPartySlot][0]][0].toLowerCase()+".png"
        ctx.fillStyle = "orange"
        ctx.fillRect(0, 0, canvas.width, 9*pixelsize)
        ctx.fillStyle = "purple"
        ctx.fillRect(0,9*pixelsize,68*pixelsize,75*pixelsize)
        ctx.fillStyle = "white"
        ctx.fillRect(2*pixelsize,18*pixelsize, 64*pixelsize, 64*pixelsize)
        ctx.drawImage(miscImage, 2*pixelsize,18*pixelsize,miscImage.width*pixelsize,miscImage.height*pixelsize)
        print(pokedex[party[selectedPartySlot][0]][0],1*pixelsize,10*pixelsize, pixelsize)
        print("pokemon info", 1*pixelsize, 1*pixelsize, pixelsize)
        ctx.fillStyle = "lightgrey"
        ctx.fillRect(70*pixelsize, 11*pixelsize, 20*pixelsize, 9*pixelsize)
        print("hp", 75*pixelsize,12*pixelsize, pixelsize)
        print(Math.ceil(party[selectedPartySlot][8])+"/"+Math.round((2*pokedex[party[selectedPartySlot][0]][1][0]*Math.floor(party[selectedPartySlot][1]))/100+Math.floor(party[selectedPartySlot][1])+10), canvas.width-40*pixelsize,12*pixelsize, pixelsize)
        ctx.fillRect(70*pixelsize, 23*pixelsize, 20*pixelsize, 9*pixelsize)
        print("atk", 72*pixelsize, 24*pixelsize, pixelsize)
        print(String(Math.round(((2*pokedex[party[selectedPartySlot][0]][1][1]+8)*Math.floor(party[selectedPartySlot][1]))/100+5)), canvas.width-18*pixelsize,24*pixelsize,pixelsize)
        ctx.fillRect(70*pixelsize, 35*pixelsize, 20*pixelsize, 9*pixelsize)
        print("def", 72*pixelsize, 36*pixelsize, pixelsize)
        print(String(Math.round(((2*pokedex[party[selectedPartySlot][0]][1][2]+8)*Math.floor(party[selectedPartySlot][1]))/100+5)), canvas.width-18*pixelsize,36*pixelsize,pixelsize)
        ctx.fillRect(70*pixelsize, 47*pixelsize, 36*pixelsize, 9*pixelsize)
        print("sp.atk", 72*pixelsize, 48*pixelsize, pixelsize)
        print(String(Math.round(((2*pokedex[party[selectedPartySlot][0]][1][3]+8)*Math.floor(party[selectedPartySlot][1]))/100+5)), canvas.width-18*pixelsize,48*pixelsize,pixelsize)
        ctx.fillRect(70*pixelsize, 59*pixelsize, 36*pixelsize, 9*pixelsize)
        print("sp.def", 72*pixelsize, 60*pixelsize, pixelsize)
        print(String(Math.round(((2*pokedex[party[selectedPartySlot][0]][1][6]+8)*Math.floor(party[selectedPartySlot][1]))/100+5)), canvas.width-18*pixelsize,60*pixelsize,pixelsize)
        ctx.fillRect(70*pixelsize, 71*pixelsize, 20*pixelsize, 9*pixelsize)
        print("spd", 72*pixelsize, 72*pixelsize, pixelsize)
        print(String(Math.round(((2*pokedex[party[selectedPartySlot][0]][1][4]+8)*Math.floor(party[selectedPartySlot][1]))/100+5)), canvas.width-18*pixelsize,72*pixelsize,pixelsize)
        print("lvl "+Math.floor(Math.floor(party[selectedPartySlot][1])), pixelsize*1,85*pixelsize,pixelsize)
        ctx.fillStyle = "black"
        ctx.fillRect(pixelsize*40,85*pixelsize, 70*pixelsize, 7*pixelsize)
        ctx.fillStyle = "lightblue"
        ctx.fillRect(pixelsize*41,86*pixelsize, ((party[selectedPartySlot][1] - Math.floor(party[selectedPartySlot][1]))*68)*pixelsize, 5*pixelsize)

        
    }else if(menu == "fight"){
        BattleEngineGraphics()
    }
    if(battleAnimationProgress > 0){
        ctx.fillStyle = "black"
        ctx.fillRect(0,canvas.height-battleAnimationProgress*pixelsize,canvas.width,canvas.height)
    }
    if(returningToCheckPoint == true){
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, document.getElementById("canvas").width, document.getElementById("canvas").height)
        print(player.player_name+" ran to", 25*pixelsize, 50*pixelsize, pixelsize)
        print("heal their pokemon", 25*pixelsize, 58*pixelsize, pixelsize)
    }
}