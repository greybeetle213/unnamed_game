function overWorldHandler(){
    if (textshowing == false){
        if (down == true && player.yMovement == 0 && player.xMovement == 0) { // down movement
            if (map.colision[player.y + 1][player.x] != 1 && player.Direction == 0 && typeof map.colision[player.y + 1][player.x] != "string"){
                player.yMovement = 16
                player.y += 1
            }
            player.Direction = 0
        } else if (player.yMovement > 0) {
            if (player.yMovement == 8) {
                player.AnimationProgress = 1
            } else if (player.yMovement == 16) {
                player.AnimationProgress = 0
            }
            if (player.yCameraMovement == "free") {
            player.cameray -= pixelsize / 2
            } else {
                player.playery += pixelsize / 2
            }
            player.yMovement -= 0.5
            if (player.yMovement == 0 && down == false) {
                player.AnimationProgress = 2
            }
        }
        if (up == true && player.yMovement == 0 && player.xMovement == 0) { // up movement
            if ( map.colision[player.y - 1][player.x] != 1 && typeof map.colision[player.y - 1][player.x] != "string"){
            player.yMovement = -16
            player.y -= 1}
            player.Direction = 1
        } else if (player.yMovement < 0) {
            if (player.yMovement == -8) {
                player.AnimationProgress = 1
            } else if (player.yMovement == -16) {
                player.AnimationProgress = 0
            }
            if (player.yCameraMovement == "free") {
                player.cameray += pixelsize / 2
            } else {
                player.playery -= pixelsize / 2
            }
            player.yMovement += 0.5
            if (player.yMovement == 0 && up == false) {
                player.AnimationProgress = 2
            }
        }
        if (left == true && player.xMovement == 0 && player.yMovement == 0) { // left movement
            if (map.colision[player.y][player.x - 1] != 1 && typeof map.colision[player.y][player.x - 1] != "string"){
                player.xMovement = -16
                player.x -= 1
            }
            player.Direction = 2
        } else if (player.xMovement < 0) {
            if (player.xMovement == -8) {
                player.AnimationProgress = 1
            } else if (player.xMovement == -16) {
                player.AnimationProgress = 0
            }
            if (player.xCameraMovement == "free") {
                player.camerax += pixelsize / 2
            } else {
                player.playerx -= pixelsize / 2
            }
            player.xMovement += 0.5
            if (player.xMovement == 0 && left == false) {
                player.AnimationProgress = 2
            }
        }
        if (right == true && player.xMovement == 0 && player.yMovement == 0) { // right movement
            if (map.colision[player.y][player.x + 1] != 1 && typeof map.colision[player.y][player.x + 1] != "string"){
                player.xMovement = 16
                player.x += 1
            }
            player.Direction = 3
        } else if (player.xMovement > 0) {
            if (player.xMovement == 8) {
                player.AnimationProgress = 1
            } else if (player.xMovement == 16) {
                player.AnimationProgress = 0
            }
            if (player.xCameraMovement == "free") {
                player.camerax -= pixelsize / 2
            } else {
                player.playerx += pixelsize / 2
            }
            player.xMovement -= 0.5
            if (player.xMovement == 0 && right == false) {
                player.AnimationProgress = 2
            }
        }
    }
    if (player.xMovement == 0 && player.yMovement == 0){
        player.AnimationProgress = 2
    }
    if ((player.xMovement != 0 || player.yMovement != 0) && (map.colision[player.y][player.x] == 2)) {
        var randomnumber = Math.ceil(Math.random() * 150)
        if (randomnumber == 2) {
            encounterPrimed = true
        }
    }
    if (player.xMovement == 0 && player.yMovement == 0 && encounterPrimed == true) {
        lvl = Math.floor(Math.random() * (currentMapPokemon.levelRange[1] - currentMapPokemon.levelRange[0])) + currentMapPokemon.levelRange[0]
        var randomnumber = Math.ceil(Math.random() * 126)
        if (randomnumber <= 100) {
            pokemon = currentMapPokemon.commonSpawns[Math.floor(Math.random() * currentMapPokemon.commonSpawns.length)]
        } else if (randomnumber <= 120) {
            pokemon = currentMapPokemon.uncommonSpawns[Math.floor(Math.random() * currentMapPokemon.uncommonSpawns.length)]
        } else if (randomnumber <= 125) {
            pokemon = currentMapPokemon.rareSpawns[Math.floor(Math.random() * currentMapPokemon.rareSpawns.length)]
        } else {
            pokemon = currentMapPokemon.ultraRareSpawns[Math.floor(Math.random() * currentMapPokemon.ultraRareSpawns.length)]
        }
        console.log("start a wild encounter battle with a level " + lvl + " " + pokemon)
        encounterPrimed = false
   }
   if (map.colision[player.y][player.x] == 3 && player.inOverworld == true && player.xMovement == 0 && player.yMovement == 0){
        loadHouse0()
   }else if(player.inOverworld == false && map.colision[player.y][player.x] == 3 && player.xMovement == 0 && player.yMovement == 0){
       loadRoom0()
   }
if (keyX == true && textshowing == false && player.xMovement == 0 && player.yMovement == 0){
    if(player.Direction == 1 && typeof map.colision[player.y - 1][player.x] == "string"){
        if(map.colision[player.y - 1][player.x].substring(0,3) == "npc"){
            npcstocheck = map.npcs.length - 1
            while(npcstocheck >= 0){
                if(map.npcs[npcstocheck][5] == player.y - 1 && map.npcs[npcstocheck][4] == player.x){
                    map.npcs[npcstocheck][3][0].src = map.npcs[npcstocheck][3][1].src
                    textshowing = true
                    onScreenText = '' 
                    onScreenText += map.npcs[npcstocheck][6]
                    onScreenText = onScreenText.split(",")
                    keyX = false
                    break
                }
                npcstocheck -= 1
            }
        }
    }else if(player.Direction == 0 && typeof map.colision[player.y + 1][player.x] == "string"){
        if(map.colision[player.y + 1][player.x].substring(0,3) == "npc"){
            npcstocheck = map.npcs.length - 1
            while(npcstocheck >= 0){
                if(map.npcs[npcstocheck][5] == player.y + 1 && map.npcs[npcstocheck][4] == player.x){
                    map.npcs[npcstocheck][3][0].src = map.npcs[npcstocheck][3][3].src
                    textshowing = true
                    onScreenText = '' 
                    onScreenText += map.npcs[npcstocheck][6]
                    onScreenText = onScreenText.split(",")
                    keyX = false
                    break
                }
                npcstocheck -= 1
            }
        }
    }else if(player.Direction == 2 && typeof map.colision[player.y][player.x - 1] == "string"){
        if(map.colision[player.y][player.x - 1].substring(0,3) == "npc"){
            npcstocheck = map.npcs.length - 1
            while(npcstocheck >= 0){
                if(map.npcs[npcstocheck][5] == player.y && map.npcs[npcstocheck][4] == player.x - 1){
                    map.npcs[npcstocheck][3][0].src = map.npcs[npcstocheck][3][4].src
                    textshowing = true
                    onScreenText = '' 
                    onScreenText += map.npcs[npcstocheck][6]
                    onScreenText = onScreenText.split(",")
                    keyX = false
                    break
                }
                npcstocheck -= 1
            }
        }
    }else if(player.Direction == 3 && typeof map.colision[player.y][player.x + 1] == "string"){
        if(map.colision[player.y][player.x + 1].substring(0,3) == "npc"){
            npcstocheck = map.npcs.length - 1
            while(npcstocheck >= 0){
                if(map.npcs[npcstocheck][5] == player.y && map.npcs[npcstocheck][4] == player.x + 1){
                    map.npcs[npcstocheck][3][0].src = map.npcs[npcstocheck][3][2].src
                    textshowing = true
                    onScreenText = '' 
                    onScreenText += map.npcs[npcstocheck][6]
                    onScreenText = onScreenText.split(",")
                    keyX = false
                    break
                }
                npcstocheck -= 1
            }
        }
    }
}
if (keyX == true && textshowing == true){
    onScreenText.shift()
    onScreenText.shift()
    if(onScreenText.length == 0)
        textshowing = false
        keyX = false
}
}