function loadNPCS(){
    var npcsToLoad = map.npcs.length - 1
    var imagesToLoad = 4
    while(npcsToLoad >= 0){
        imagesToLoad = 4
        while(imagesToLoad >= 0){
            map.npcs[npcsToLoad][3][imagesToLoad].onload = function() {console.log("loaded")}
            map.npcs[npcsToLoad][3][imagesToLoad].src =  npcs[map.npcs[npcsToLoad][0]][imagesToLoad]//NOTE: make loop to load all images from all npcs
            imagesToLoad -= 1
        }
        npcsToLoad -= 1
    }
}
function loadHouse0(){
    Object.assign(overworldPos, player) // where in the overworld the player was when they enterd the room
    Object.assign(overworldMap, map)
    player.inOverworld = false
    map.colision = MapColision.house0
    map.width = 128 * pixelsize
    map.height = 128 * pixelsize
    map.startingPos = [16 * pixelsize,16 * pixelsize]
    player.yMovement = -16
    room1.src = "house_0.png"
    player.x = 3
    player.y = 6
    player.playerx = 64 * pixelsize
    player.playery = 128 * pixelsize
    player.xCameraMovement = "fixed"
    player.yCameraMovement = "fixed"
    player.camerax = 0
    player.cameray = 0
    room1.onload = function() {console.log("loaded")}
    room1.src = "house_0.png"
    map.npcs = [[0,96*pixelsize,64*pixelsize,[new Image(),new Image(),new Image(),new Image(),new Image()],5,3,["all boys leave","home someday","it said so on","tv"] ]]//0=id in npcs 1=x, 2=y, 3=image,4=collision x, collision y, text
    loadNPCS()
}
function loadRoom0(){
    Object.assign(map, overworldMap)
    Object.assign(player, overworldPos) // where in the overworld the player was when they enterd the room
    player.inOverworld = true
    player.y += 1
    player.yMovement = 16
    player.Direction = 0
    loadNPCS()
    room1.src = "room0.png"
}
function init() {
    ctx = document.getElementById("canvas").getContext("2d")
    document.getElementById("canvas").height = window.innerHeight - 4
    document.getElementById("canvas").width = (window.innerHeight - 4) + window.innerHeight / 4
    ctx.webkitImageSmoothingEnabled = false
    ctx.mozImageSsprite_moothingEnabled = false
    ctx.imageSmoothingEnabled = false
    ctx = document.getElementById("canvas").getContext("2d")
    pixelsize = document.getElementById("canvas").width / 176
    room1 = new Image()
    room1.src = "room0.png"
    textbox = new Image()
    textbox.src = "text/text-template.png"
    alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","/",".","!","'","?"] // / is comma
    text = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()]
    for(counter = text.length - 1; counter >= 0; counter -= 1){
        if(counter > 9){
            text[counter].src = "text/letter_" + counter + ".png" //i forgot most of the filename
        } else {
            text[counter].src = "text/letter_0" + counter + ".png" //i forgot most of the filename
        }
    }
    textshowing = false
    onScreenText = []
    playerImage = [[new Image(), new Image(), new Image()], [new Image(), new Image(), new Image()], [new Image(), new Image(), new Image()], [new Image(), new Image(), new Image()]] // a new duo of images for the animations of each directon of the player
    playerImage[0][0].src = "pokemon_guy/sprite_00.png"
    playerImage[0][1].src = "pokemon_guy/sprite_01.png"
    playerImage[0][2].src = "pokemon_guy/sprite_02.png"
    playerImage[1][0].src = "pokemon_guy/sprite_03.png"
    playerImage[1][1].src = "pokemon_guy/sprite_04.png"
    playerImage[1][2].src = "pokemon_guy/sprite_05.png"
    playerImage[2][0].src = "pokemon_guy/sprite_06.png"
    playerImage[2][1].src = "pokemon_guy/sprite_07.png"
    playerImage[2][2].src = "pokemon_guy/sprite_08.png"
    playerImage[3][0].src = "pokemon_guy/sprite_09.png"
    playerImage[3][1].src = "pokemon_guy/sprite_10.png"
    playerImage[3][2].src = "pokemon_guy/sprite_11.png"
    overworldMap = {}
    overworldPos = {}
    xMovement = 0//this is a change
    yMovement = 0
    xCameraMovement = "fixed"
    yCameraMovement = "free"
    npcs = [["npcs/npc_mum_1.png","npcs/npc_mum_0.png","npcs/npc_mum_1.png","npcs/npc_mum_2.png","npcs/npc_mum_3.png"],["npcs/npc_youngster_3.png","npcs/npc_youngster_0.png","npcs/npc_youngster_1.png","npcs/npc_youngster_2.png","npcs/npc_youngster_3.png"]]
    MapColision = {room0:[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 2, 1, 3, 1, 2, 1, 0, 0], [0, 0, 1, 2, 2, 0, 2, 2, 1, 0, 0], [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, "npc 1", 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, "npc 1", 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], house0:[[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,1,0,],[0,0,0,0,0,0,0,0,],[0,0,0,1,1,"npc 0",0,0,],[0,0,0,1,1,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,3,3,0,0,0,]]}
    currentMapColision = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 2, 1, 3, 1, 2, 1, 0, 0], [0, 0, 1, 2, 2, 0, 2, 2, 1, 0, 0], [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, "npc 1", 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, "npc 1", 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    //the colision for the current room
    currentMapPokemon = { levelRange: [2, 6], commonSpawns: ["pidgey", "rattata", "caterpie", "weedle"], uncommonSpawns: ["kacoona", "metapod"], rareSpawns: ["pikachu"], ultraRareSpawns: ["[new beetle pokemon name here]"] }
    // common spawns have a 100/126 chance to spawn uncommon are 20/126 rare are 5/126 and ultraRare are 1/126 levelRange is the level the pokemon will spawn at the will spawn at a level between the first level and the second one minus one
    cameray = 0
    camerax = 0
    playerx = pixelsize * 80
    playery = pixelsize * 64
    x = 5// the players curren position in the grid not in pixels used for colision
    y = 4
    Directon = 0//
    AnimaionProgress = 2
    startingPos = [0,0]
    map = {colision:currentMapColision, width:document.getElementById("canvas").width, height:(document.getElementById("canvas").width * (2 + 8 / 11)),startingPos:startingPos, npcs:[[1,32*pixelsize,112*pixelsize,[new Image(),new Image(),new Image(),new Image(),new Image()],2,7,["hi!","i like shorts!","they're comfy","and easy to", "wear!",""] ],[1,32*pixelsize,160*pixelsize,[new Image(),new Image(),new Image(),new Image(),new Image()],2,10,["have you seen", "billy anywhere?", "he was playing","with a strange","balloon last i", "saw him."] ]]}
    loadNPCS()
    player = { x: x, y: y, playerx: playerx, playery: playery, camerax: camerax, cameray: cameray, image: playerImage, AnimationProgress: AnimaionProgress, Direction: Directon, xCameraMovement: xCameraMovement, yCameraMovement: yCameraMovement, xMovement: xMovement, yMovement: yMovement, inOverworld:true}
    encounterPrimed = false //whether there will be an encounter when the player reaches the tile they are going to
    ctx.font = String(Math.floor(document.getElementById("canvas").height/8)) + "px Source Code Pro"
    function loop() {
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
/*                     ctx.fillText(onScreenText[0], 10*pixelsize,115*pixelsize)//first line of text
            ctx.fillText(onScreenText[1], 10*pixelsize,130*pixelsize)//second line of text */
            letterx = 0
            for(counter = 0; counter < onScreenText[0].length; counter += 1){
                    if (onScreenText[0][counter] != " "){
                    ctx.drawImage(text[alphabet.findIndex(function(letter){return letter == onScreenText[0][counter]})], 5*pixelsize+letterx*pixelsize,100*pixelsize,10*pixelsize,14*pixelsize)
                    }
                letterx += 11
            }
            for(counter = 0, letterx = 0; counter < onScreenText[1].length; counter += 1){
                    if (onScreenText[1][counter] != " "){
                    ctx.drawImage(text[alphabet.findIndex(function(letter){return letter == onScreenText[1][counter]})], 5*pixelsize+letterx*pixelsize,120*pixelsize,10*pixelsize,14*pixelsize)
                    }
                letterx += 11
            }
        }
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
                if (player.xCameraMovemnet == "free") {
                    camerax += pixelsize / 2
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
                if (player.xCameraMovemnet == "free") {
                    camerax -= pixelsize / 2
                } else {
                    player.playerx += pixelsize / 2
                }
                player.xMovement -= 0.5
                if (player.xMovement == 0 && right == false) {
                    player.AnimationProgress = 2
                }
            }
        }
        //speciel tile handlers
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
       if(keyX == true && textshowing == false){
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
    setInterval(loop, 10) //7
}