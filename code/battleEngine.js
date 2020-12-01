function BattleEngineGraphics(){
    ctx.fillStyle = "lightblue" //draw background
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(battlePlatform,22*pixelsize,canvas.height-58*pixelsize,battlePlatform.width*pixelsize, battlePlatform.height*pixelsize)
    ctx.fillStyle = "black" 
    ctx.fillRect(5*pixelsize,5*pixelsize, 59*pixelsize,24*pixelsize) // draw info box for opposing pokemon
    ctx.fillRect(canvas.width-64*pixelsize,canvas.height-65*pixelsize, 59*pixelsize,24*pixelsize) // draw info box for own pokemon
    ctx.fillRect(0,canvas.height-40*pixelsize,canvas.width,40*pixelsize) // draw text box
    ctx.fillStyle = "white" 
    ctx.fillRect(1*pixelsize,canvas.height-38*pixelsize,canvas.width-2*pixelsize,38*pixelsize) // fill text box
    ctx.fillStyle = "#DDAA11"
    ctx.fillRect(6*pixelsize,6*pixelsize, 57*pixelsize,22*pixelsize) // fill info box for opposing pokemon
    ctx.fillRect(canvas.width-63*pixelsize,canvas.height-64*pixelsize, 57*pixelsize,22*pixelsize) // fill info box for own pokemon
    if(currentBattleInfo[2][7] == ""){ // if the pokemon has a nickname print it; else print the pokemons specis
        print(pokedex[currentBattleInfo[2][0]][0], canvas.width-62*pixelsize, canvas.height-63*pixelsize, pixelsize)
    }else{
        print(currentBattleInfo[2][7], canvas.width-62*pixelsize, canvas.height-63*pixelsize, pixelsize)
    }
    print(pokedex[currentBattleInfo[0][0]][0], 7*pixelsize, 7*pixelsize, pixelsize)
    print("lvl "+currentBattleInfo[0][1], 7*pixelsize, 20*pixelsize, pixelsize)
    print("lvl "+Math.floor(currentBattleInfo[2][1]), canvas.width-62*pixelsize,canvas.height-50*pixelsize, pixelsize)
    ctx.drawImage(battlePlatform, 85*pixelsize, 33*pixelsize, battlePlatform.width*pixelsize, battlePlatform.height*pixelsize)
    if(currentBattleInfo[5][2] == "own"){
        ctx.drawImage(playersBattlePokemonSprite,14*pixelsize+(64-playersBattlePokemonSprite.width/2)+Math.floor(currentBattleInfo[5][0][0])*pixelsize,canvas.height-38*pixelsize-playersBattlePokemonSprite.height*pixelsize,playersBattlePokemonSprite.width*pixelsize,playersBattlePokemonSprite.height*pixelsize-2*pixelsize)
        ctx.drawImage(opponentsBattlePokemonSprite, 86*pixelsize, 5*pixelsize, 64*pixelsize,64*pixelsize)
    }else{
        ctx.drawImage(playersBattlePokemonSprite,14*pixelsize+(64-playersBattlePokemonSprite.width/2),canvas.height-38*pixelsize-playersBattlePokemonSprite.height*pixelsize,playersBattlePokemonSprite.width*pixelsize,playersBattlePokemonSprite.height*pixelsize-2*pixelsize)
        ctx.drawImage(opponentsBattlePokemonSprite, 86*pixelsize-Math.floor(currentBattleInfo[5][0][0])*pixelsize, 5*pixelsize, 64*pixelsize,64*pixelsize)
    }
    ctx.fillStyle = "black"
    ctx.fillRect(canvas.width-62*pixelsize,canvas.height-55*pixelsize,55*pixelsize,4*pixelsize)
    var HPTODraw = (currentBattleInfo[2][8]/Math.round((2*pokedex[currentBattleInfo[2][0]][1][0]*Math.floor(currentBattleInfo[2][1]))/100+Math.floor(currentBattleInfo[2][1])+10))*53
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
    if(currentBattleInfo[3] == 1 || currentBattleInfo[3] == 0){
        ctx.fillStyle = "black"
        ctx.fillRect(100*pixelsize,canvas.height-40*pixelsize,canvas.width-100,40*pixelsize) // draw box for actoin buttons
        ctx.fillStyle = "white"
        ctx.fillRect(102*pixelsize,canvas.height-38*pixelsize,canvas.width-98,38*pixelsize)
    }
    if(currentBattleInfo[3] == 1){
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
        print(moveDex[currentBattleInfo[2][2]][0], 10*pixelsize, 109*pixelsize, pixelsize)
        print(moveDex[currentBattleInfo[2][3]][0], 90*pixelsize, 109*pixelsize, pixelsize)
        print(moveDex[currentBattleInfo[2][4]][0], 10*pixelsize, 125*pixelsize, pixelsize)
        print(moveDex[currentBattleInfo[2][5]][0], 90*pixelsize, 125*pixelsize, pixelsize)
        if(selectedMenuSlot == 0){
            ctx.drawImage(menuSelecter,2*pixelsize, 109*pixelsize, menuSelecter.width*pixelsize,menuSelecter.height*pixelsize)
        }else if(selectedMenuSlot == 1){
            ctx.drawImage(menuSelecter,82*pixelsize, 109*pixelsize, menuSelecter.width*pixelsize,menuSelecter.height*pixelsize)
        }else if(selectedMenuSlot == 2){
            ctx.drawImage(menuSelecter,2*pixelsize, 125*pixelsize, menuSelecter.width*pixelsize,menuSelecter.height*pixelsize)
        }else if(selectedMenuSlot == 3){
            ctx.drawImage(menuSelecter,82*pixelsize, 125*pixelsize, menuSelecter.width*pixelsize,menuSelecter.height*pixelsize)
        }
        
        
    }
}
function BattleEngine(){
    if(battleAnimationProgress <= 280 && player.xMovement == 0 && player.yMovement == 0 && encounterPrimed == true){
        battleAnimationProgress += 2
    }else if(battleAnimationProgress >= 280 && player.xMovement == 0 && player.yMovement == 0 && encounterPrimed == true){
        battleAnimationProgress = 0
        encounterPrimed = 0
    }
	if(right == true && selectedMenuSlot < 3 && (currentBattleInfo[3] == 1 || currentBattleInfo[3] == 1.1)){
		selectedMenuSlot += 1
		right = false
	}else if(left == true && selectedMenuSlot > 0 && (currentBattleInfo[3] == 1 || currentBattleInfo[3] == 1.1)){
		selectedMenuSlot -= 1
		left = false
	}else if(down == true && selectedMenuSlot < 2 && (currentBattleInfo[3] == 1 || currentBattleInfo[3] == 1.1)){
		selectedMenuSlot += 2
	}else if(up == true && selectedMenuSlot > 1 && (currentBattleInfo[3] == 1 || currentBattleInfo[3] == 1.1)){
		selectedMenuSlot -= 2 
    }
    if(keyZ == true && currentBattleInfo[3] != 0 && currentBattleInfo[3] < 2 && currentBattleInfo[2][8] > 0){
        currentBattleInfo[3] = 1
        selectedMenuSlot = 0
        if(currentBattleInfo[2][7] == ""){
            currentBattleInfo[4] = ["what will", pokedex[currentBattleInfo[2][0]][0]+" do?"]
        }else{
            currentBattleInfo[4] = ["what will", currentBattleInfo[2][7]+" do?"]
        }
    }
    if(keyX == true){
        if(currentBattleInfo[3] == 1){
            if(selectedMenuSlot == 0){
                currentBattleInfo[4] = ["",""]
                currentBattleInfo[3] = 1.1
            }
            if(selectedMenuSlot == 3){
                if(currentBattleInfo[2][1] > currentBattleInfo[0][1]){
                    currentBattleInfo[3] = 0
                    currentBattleInfo[4] = ["got away safely",""]
                    setTimeout(function(){menu = "none"}, 500)
                }else{
                    currentBattleInfo[3] = 0
                    currentBattleInfo[4] = ["couldn't get away",""]
                    setTimeout(function(){
                        currentBattleInfo[3] = 1
                        if(currentBattleInfo[2][7] == ""){
                            currentBattleInfo[4] = ["what will", pokedex[currentBattleInfo[2][0]][0]+" do?"]
                        }else{
                            currentBattleInfo[4] = ["what will", currentBattleInfo[2][7]+" do?"]
                        }
                    }, 500)
                }
            }
            if(currentBattleInfo[3] == 1){
                currentBattleInfo[3] = 1.2
                keyX = false
            }
        }else if(currentBattleInfo[3] == 1.1 && currentBattleInfo[2][2+selectedMenuSlot] != 0){
            currentBattleInfo[3] = 2.1
            if(Math.round(((2*pokedex[currentBattleInfo[2][0]][1][4]+8)*currentBattleInfo[2][1])/100+5) >= Math.round(((2*pokedex[currentBattleInfo[0][0]][1][4]+8)*currentBattleInfo[0][1])/100+5)){
                currentBattleInfo[5] = [[0,0.2],0,"own"]
            }else{
                currentBattleInfo[5] = [[0,0.2],0,"foe"]
            }
        }
        if(currentBattleInfo[3] == 2.1 && currentBattleInfo[5][0][0] <= 0.0 && currentBattleInfo[5][0][1] == -0.2){
            if(currentBattleInfo[0][6] != 0){
                currentBattleInfo[5][0] = [0.0, 0.2]
                currentBattleInfo[3] = 2.2
                if(currentBattleInfo[5][2] == "own"){
                    currentBattleInfo[5][2] = "foe"
                }else{
                    currentBattleInfo[5][2] = "own"
                }
            }else{
                currentBattleInfo[3] = 0
                currentBattleInfo[4] = ["the opposing", "pokemon fainted"]
                setTimeout(function(){
                    var battleType = currentBattleInfo[1]
                    var lvl = currentBattleInfo[0][1]
                    var ownlvl = currentBattleInfo[2][1]
                    if(ownlvl < 100){
                        console.log(ownlvl)
                        currentBattleInfo[2][1] += ((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)/300
                        console.log([pokedex[currentBattleInfo[2][0]][0] + " gained ", (((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)/2).toFixed(2)*100+" exp"])
                        if(currentBattleInfo[2][7] == ""){
                            currentBattleInfo[4] = [pokedex[currentBattleInfo[2][0]][0] + " gained ", (((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)).toFixed(2)*100+" exp"]
                        }else{
                            currentBattleInfo[4] = [currentBattleInfo[2][7] + " gained ", (((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)).toFixed(2)*100+" exp"]
                        }
                    }else{
                        if(currentBattleInfo[2][7] == ""){
                            currentBattleInfo[4] = [pokedex[currentBattleInfo[2][0]][0] + " gained ", "0 exp"]
                        }else{
                            currentBattleInfo[4] = [currentBattleInfo[2][7] + " gained ", "0 exp"]
                        }
                    }
                },500)
                setTimeout(function(){
                    menu = "none"
                }, 1000)
            }
        }else if((currentBattleInfo[3] == 2.2 && currentBattleInfo[5][0][0] <= 0.0 && currentBattleInfo[5][0][1] == -0.2)){
            if(currentBattleInfo[0][6] != 0){
                currentBattleInfo[3] = 1
            }else{
                currentBattleInfo[3] = 0
                currentBattleInfo[4] = ["the opposing", "pokemon fainted"]
                setTimeout(function(){
                    var battleType = currentBattleInfo[1]
                    var lvl = currentBattleInfo[0][1]
                    var ownlvl = currentBattleInfo[2][1]
                    if(ownlvl < 100){
                        console.log(ownlvl)
                        currentBattleInfo[2][1] += ((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)/300
                        console.log([pokedex[currentBattleInfo[2][0]][0] + " gained ", (((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)/2).toFixed(2)*100+" exp"])
                        currentBattleInfo[4] = [pokedex[currentBattleInfo[2][0]][0] + " gained ", (((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)).toFixed(2)*100+" exp"]
                    }else{
                        currentBattleInfo[4] = [pokedex[currentBattleInfo[2][0]][0] + " gained ", "0 exp"]
                    }
                },500)
                setTimeout(function(){
                    menu = "none"
                }, 1000)
            }
        }
        if (currentBattleInfo[3] == 2.3){
            currentBattleInfo[3] = 2.5
            currentBattleInfo[5][0] = [0.0, 0.2]
            currentBattleInfo[5][2] = "foe"
        }else if(currentBattleInfo[3] == 2.5){
            if(currentBattleInfo[0][6] != 0){
                currentBattleInfo[5][0] = [0.0, 0.2]
                currentBattleInfo[3] = 1
                if(currentBattleInfo[5][2] == "own"){
                    currentBattleInfo[5][2] = "foe"
                }else{
                    currentBattleInfo[5][2] = "own"
                }
            }else{
                currentBattleInfo[3] = 0
                currentBattleInfo[4] = ["the opposing", "pokemon fainted"]
                setTimeout(function(){
                    var battleType = currentBattleInfo[1]
                    var lvl = currentBattleInfo[0][1]
                    var ownlvl = currentBattleInfo[2][1]
                    if(ownlvl < 100){
                        console.log(ownlvl)
                        currentBattleInfo[2][1] += ((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)/300
                        console.log([pokedex[currentBattleInfo[2][0]][0] + " gained ", (((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)/2).toFixed(2)*100+" exp"])
                        if(currentBattleInfo[2][7] == ""){
                            currentBattleInfo[4] = [pokedex[currentBattleInfo[2][0]][0] + " gained ", (((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)).toFixed(2)*100+" exp"]
                        }else{
                            currentBattleInfo[4] = [currentBattleInfo[2][7] + " gained ", (((battleType*150*lvl / 5) * Math.pow(2*lvl+10,2.5) / Math.pow(lvl+ownlvl+10, 2.5)+1)).toFixed(2)*100+" exp"]
                        }
                    }else{
                        if(currentBattleInfo[2][7] == ""){
                            currentBattleInfo[4] = [pokedex[currentBattleInfo[2][0]][0] + " gained ", "0 exp"]
                        }else{
                            currentBattleInfo[4] = [currentBattleInfo[2][7] + " gained ", "0 exp"]
                        }
                    }
                },500)
                setTimeout(function(){
                    menu = "none"
                }, 1000)
            }
        }
        if(currentBattleInfo[2][8] <= 0){
            keyX = false
            currentBattleInfo[3] = 1.2
        }
        if(currentBattleInfo[3] != 1.2){
            keyX = false
        }
    }
    if(currentBattleInfo[3] == 2.1 || currentBattleInfo[3] == 2.2 || currentBattleInfo[3] == 2.5){
        if(currentBattleInfo[5][2] == "own" && currentBattleInfo[5][0][0] >= 4){
            if(currentBattleInfo[2][7] == ""){
                currentBattleInfo[4] = [pokedex[currentBattleInfo[2][0]][0]+" used ", moveDex[currentBattleInfo[2][2+selectedMenuSlot]][0]]
            }else{
                currentBattleInfo[4] = [currentBattleInfo[2][7]+" used ", moveDex[currentBattleInfo[2][2+selectedMenuSlot]][0]]
            }
            var lvl = Math.floor(currentBattleInfo[2][1])
            var power = moveDex[currentBattleInfo[2][2+selectedMenuSlot]][1]
            var atk = Math.round(((2*pokedex[currentBattleInfo[2][0]][1][1]+8)*lvl)/100+5)
            var def = Math.round(((2*pokedex[currentBattleInfo[0][0]][1][2]+8)*lvl)/100+5)
            currentBattleInfo[0][6] -= (((2*lvl/5)+2)*power*atk/def)/50
            if(currentBattleInfo[0][6] < 0){
                currentBattleInfo[0][6] = 0
            }
            console.log([lvl,power,atk,def])
            selectedMenuSlot = 0
        }else if(currentBattleInfo[5][0][0] >= 4){
            currentBattleInfo[5][2] = "foe"
            var useableMoves = []
            if(currentBattleInfo[0][2] != 0){
                useableMoves.push(currentBattleInfo[0][2])
            }
            if(currentBattleInfo[0][3] != 0){
                useableMoves.push(currentBattleInfo[0][3])
            }
            if(currentBattleInfo[0][4] != 0){
                useableMoves.push(currentBattleInfo[0][4])
            }
            if(currentBattleInfo[0][5] != 0){
                useableMoves.push(currentBattleInfo[0][5])
            }
            enemysMove = useableMoves[Math.floor(Math.random()*useableMoves.length)]
            console.log(enemysMove)
            currentBattleInfo[4] = [pokedex[currentBattleInfo[0][0]][0]+" used ", moveDex[enemysMove][0]]
            var lvl = currentBattleInfo[2][1]
            var power = moveDex[enemysMove][1]
            var atk = Math.round(((2*pokedex[currentBattleInfo[0][0]][1][1]+8)*currentBattleInfo[0][1])/100+5)
            var def = Math.round(((2*pokedex[currentBattleInfo[2][0]][1][2]+8)*currentBattleInfo[2][1])/100+5)
            currentBattleInfo[2][8] -= (((2*lvl/5)+2)*power*atk/def)/50
            if(currentBattleInfo[2][8] < 0){
                currentBattleInfo[2][8] = 0
            }
            console.log([lvl,power,atk,def])
        }
        if(currentBattleInfo[5][0] != [0,-0.2] && ((moveDex[currentBattleInfo[2][2+selectedMenuSlot]][4] == "phy" && currentBattleInfo[5][2] == "own")) || (currentBattleInfo[5][2] == "foe") && !(currentBattleInfo[5][0][0] <= 0.0 && currentBattleInfo[5][0][1] == -0.2)){
            currentBattleInfo[5][0][0] += currentBattleInfo[5][0][1]
            if(currentBattleInfo[5][0][0] >= 4){
                currentBattleInfo[5][0][1] = -0.2
            }
            if(currentBattleInfo[5][0][0] <= 0.0 && currentBattleInfo[5][0][1] == -0.2){
                currentBattleInfo[5][0][0] = 0.0
            }
        }
    }

}