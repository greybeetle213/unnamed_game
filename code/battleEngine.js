function BattleEngineGraphics(){
    ctx.fillStyle = "lightblue"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(battlePlatform,22*pixelsize,canvas.height-58*pixelsize,battlePlatform.width*pixelsize, battlePlatform.height*pixelsize)
    ctx.fillStyle = "black"
    ctx.fillRect(5*pixelsize,5*pixelsize, 59*pixelsize,24*pixelsize)
    ctx.fillRect(canvas.width-64*pixelsize,canvas.height-65*pixelsize, 59*pixelsize,24*pixelsize)
    ctx.fillRect(0,canvas.height-40*pixelsize,canvas.width,40*pixelsize)
    ctx.fillStyle = "white"
    ctx.fillRect(1*pixelsize,canvas.height-38*pixelsize,canvas.width-2*pixelsize,38*pixelsize)
    ctx.fillStyle = "#DDAA11"
    ctx.fillRect(6*pixelsize,6*pixelsize, 57*pixelsize,22*pixelsize)
    ctx.fillRect(canvas.width-63*pixelsize,canvas.height-64*pixelsize, 57*pixelsize,22*pixelsize)
    if(currentBattleInfo[2][7] == ""){
        print(pokedex[currentBattleInfo[2][0]][0], canvas.width-62*pixelsize, canvas.height-63*pixelsize, pixelsize)
    }else{
        print(currentBattleInfo[2][7], canvas.width-62*pixelsize, canvas.height-63*pixelsize, pixelsize)
    }
    print(pokedex[currentBattleInfo[0][0]][0], 7*pixelsize, 7*pixelsize, pixelsize)
    print("lvl "+currentBattleInfo[0][1], 7*pixelsize, 20*pixelsize, pixelsize)
    print("lvl "+Math.floor(currentBattleInfo[2][1]), canvas.width-62*pixelsize,canvas.height-50*pixelsize, pixelsize)
    ctx.drawImage(battlePlatform, 85*pixelsize, 33*pixelsize, battlePlatform.width*pixelsize, battlePlatform.height*pixelsize)
    ctx.drawImage(playersBattlePokemonSprite,14*pixelsize+(64-playersBattlePokemonSprite.width/2),canvas.height-38*pixelsize-playersBattlePokemonSprite.height*pixelsize,playersBattlePokemonSprite.width*pixelsize,playersBattlePokemonSprite.height*pixelsize-2*pixelsize)
    ctx.drawImage(opponentsBattlePokemonSprite, 86*pixelsize, 5*pixelsize, 64*pixelsize,64*pixelsize)
    ctx.fillStyle = "black"
    ctx.fillRect(canvas.width-62*pixelsize,canvas.height-55*pixelsize,55*pixelsize,4*pixelsize)
    var HPTODraw = (currentBattleInfo[2][8]/Math.round((2*pokedex[currentBattleInfo[2][0]][1][0]*currentBattleInfo[2][1])/100+currentBattleInfo[2][1]+10))*53
    if(HPTODraw > 26){
        ctx.fillStyle = "green"
    }else if(HPTODraw > 13){
        ctx.fillStyle = "orange"
    }else{
        ctx.fillStyle = "red"
    }
    ctx.fillRect(canvas.width-61*pixelsize,canvas.height-54*pixelsize,HPTODraw*pixelsize,2*pixelsize)
    
    ctx.fillStyle = "black"
    ctx.fillRect(7*pixelsize,15*pixelsize,55*pixelsize,4*pixelsize)
    var HPTODraw = (currentBattleInfo[0][6]/Math.round((2*pokedex[currentBattleInfo[0][0]][1][0]*currentBattleInfo[0][1])/100+currentBattleInfo[0][1]+10))*53
    if(HPTODraw > 26){
        ctx.fillStyle = "green"
    }else if(HPTODraw > 13){
        ctx.fillStyle = "orange"
    }else{canvas.width-61
        ctx.fillStyle = "red"
    }
    ctx.fillRect(8*pixelsize,16*pixelsize,HPTODraw*pixelsize,2*pixelsize)
    print(currentBattleInfo[4][0], 2*pixelsize, 104*pixelsize, pixelsize)
    print(currentBattleInfo[4][1], 2*pixelsize, 112*pixelsize, pixelsize)
    if(currentBattleInfo[3] == 1){
        ctx.fillStyle = "black"
        ctx.fillRect(100*pixelsize,canvas.height-40*pixelsize,canvas.width-100,40*pixelsize)
        ctx.fillStyle = "white"
        ctx.fillRect(102*pixelsize,canvas.height-38*pixelsize,canvas.width-98,38*pixelsize)
        print("fight", 111*pixelsize,canvas.height-29*pixelsize, pixelsize)
        print("pkmn", 147*pixelsize,canvas.height-29*pixelsize, pixelsize)
        print("item", 111*pixelsize,canvas.height-17*pixelsize, pixelsize)
        print("run", 147*pixelsize,canvas.height-17*pixelsize, pixelsize)
        if(selectedMenuSlot == 0){
            ctx.drawImage(menuSelecter,103*pixelsize, canvas.height-29*pixelsize, menuSelecter.width*pixelsize,menuSelecter.height*pixelsize)
        }else if(selectedMenuSlot == 1){
            ctx.drawImage(menuSelecter,139*pixelsize, canvas.height-29*pixelsize, menuSelecter.width*pixelsize,menuSelecter.height*pixelsize)	
        }else if(selectedMenuSlot == 2){
            ctx.drawImage(menuSelecter,103*pixelsize, canvas.height-17*pixelsize, menuSelecter.width*pixelsize,menuSelecter.height*pixelsize)	
        }else if(selectedMenuSlot == 3){
            ctx.drawImage(menuSelecter,139*pixelsize, canvas.height-17*pixelsize, menuSelecter.width*pixelsize,menuSelecter.height*pixelsize)	

        }
    }else if(currentBattleInfo[3] == 1.1){
        print(moveDex[currentBattleInfo[2][2]][0], 9*pixelsize, 109*pixelsize, pixelsize)
        print(moveDex[currentBattleInfo[2][3]][0], 89*pixelsize, 109*pixelsize, pixelsize)
        print(moveDex[currentBattleInfo[2][4]][0], 9*pixelsize, 125*pixelsize, pixelsize)
        print(moveDex[currentBattleInfo[2][5]][0], 89*pixelsize, 125*pixelsize, pixelsize)
    }
}
function BattleEngine(){
	if(right == true && selectedMenuSlot < 3 && currentBattleInfo[3] == 1){
		selectedMenuSlot += 1
		right = false
	}else if(left == true && selectedMenuSlot > 0 && currentBattleInfo[3] == 1){
		selectedMenuSlot -= 1
			left = false
	}else if(down == true && selectedMenuSlot < 2 && currentBattleInfo[3] == 1){
		selectedMenuSlot += 2
	}else if(up == true && selectedMenuSlot > 1 && currentBattleInfo[3] == 1){
		selectedMenuSlot -= 2 
    }else if(keyX == true && selectedMenuSlot == 0 && currentBattleInfo[3] == 1){
        currentBattleInfo[4] = ["",""]
        currentBattleInfo[3] = 1.1
    }

}