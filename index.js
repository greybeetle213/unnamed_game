function init() {
    ctx = document.getElementById("canvas").getContext("2d")
    document.getElementById("canvas").height = window.innerHeight - 4 // size the canvas to be a 4-3 ratio
    document.getElementById("canvas").width = (window.innerHeight - 4) + window.innerHeight / 4 // size the canvas to be a 4-3 ratio
    ctx.webkitImageSmoothingEnabled = false // remove blurry pixels
    ctx.mozImageSsprite_moothingEnabled = false // remove blurry pixels
    ctx.imageSmoothingEnabled = false // remove blurry pixels
    ctx = document.getElementById("canvas").getContext("2d") // redefine ctx
    pixelsize = document.getElementById("canvas").width / 176 // define the size of  pixel all sizes are based around this
    canvas = document.getElementById("canvas")
    room1 = new Image()
    room1.src = "room0.png"
    textbox = new Image()
    textbox.src = "text/text-template.png"
    alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",".", "@", "!", "'" , "?", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","/"] // @ is comma
    text = [new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()]
    for(counter = text.length - 1; counter >= 0; counter -= 1){ // define which letter has which image
        if(counter > 9){
            text[counter].src = "text/letter_" + counter + ".png"
        } else {
            text[counter].src = "text/letter_0" + counter + ".png"
        }
    }
    textshowing = false
    onScreenText = []
    playerImage = [[new Image(), new Image(), new Image()], [new Image(), new Image(), new Image()], [new Image(), new Image(), new Image()], [new Image(), new Image(), new Image()]] // a new duo of images for the animations of each directon of the player
    playerImage[0][0].src = "pokemon_guy/sprite_00.png" // define all the players animation frames
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
    selectedMenuSlot = 0
	menuSelecter = new Image
    menuSelecter.src = "text/menu selector.png"
    overworldMap = {}
    overworldPos = {}
    xMovement = 0
    yMovement = 0
    xCameraMovement = "fixed"
    yCameraMovement = "free"
    menu = "none"
    npcs = [["npcs/npc_mum_1.png","npcs/npc_mum_0.png","npcs/npc_mum_1.png","npcs/npc_mum_2.png","npcs/npc_mum_3.png"],["npcs/npc_youngster_3.png","npcs/npc_youngster_0.png","npcs/npc_youngster_1.png","npcs/npc_youngster_2.png","npcs/npc_youngster_3.png"]]
    MapColision = {room0:[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 2, 1, 3, 1, 2, 1, 0, 0], [0, 0, 1, 2, 2, 0, 2, 2, 1, 0, 0], [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, "npc 1", 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, "npc 1", 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], house0:[[1,1,1,1,1,1,1,1,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,1,1,"npc 0",0,0,],[0,0,0,1,1,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,3,3,0,0,0,]]}
    currentMapColision = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 2, 1, 3, 1, 2, 1, 0, 0], [0, 0, 1, 2, 2, 0, 2, 2, 1, 0, 0], [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, "npc 1", 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, "npc 1", 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    //the colision for the current room
    currentMapPokemon = { levelRange: [2, 6], commonSpawns: [0, 3], uncommonSpawns: [0, 3], rareSpawns: [0, 3], ultraRareSpawns: [0, 3] }
    // common spawns have a 100/126 chance to spawn uncommon are 20/126 rare are 5/126 and ultraRare are 1/126 levelRange is the level the pokemon will spawn at the will spawn at a level between the first level and the second one minus one
    cameray = 0
    camerax = 0
    playerx = pixelsize * 80
    playery = pixelsize * 64
    x = 5// the players curren position in the grid. not in pixels. used for colision.
    y = 4
    Directon = 0//
    AnimaionProgress = 2
    startingPos = [0,0]
    miscImage = new Image
    bag = new Image
    currentBattleInfo = [] // opponents team, whether its a trainer battle, [name of first healthy pokemon in party,ect,index in party], stage in turn 1 = choseing act 1.1 = fighting 1.2 = item 1.3 = switching pokemon 2 = playing move animatoins, the message displayed at the bottom of the screen while in battle [line1,line2], animations in progress [physical, special, damage].
    moveType = "phy" // whether the move thats animation is playing is a special or physical attack
    battleAnimationProgress = 0
    itemDex = [["pokeball", "item", ["a device for capturing pokemon", ""]], ["greatball", "item", ["a better device for capturing", "pokemon"]], ["pokedex", "KeyItem", ["lets you keep track of captured", "pokemon"]], ["hm 01", "Tm Hm", ["cuts down small trees", "if taught to a pokemon"]] ]
    pokedex = [['bulbasaur',[45,49,49,65,45,0,65,"grass"], [10, 3]],['Ivysaur', ['10', '3']],['Venusaur', [10, 3]],['charmander',[39,52,43,60,65, 1,50,"fire"],[]],['Charmelion'],['Charizard'],['caterpie',[10, 5,5,5,5,1],[]]] //Pokedex. [pokemon name, [base hp atk def sp.atk spd shape sp.def], [move, level.learned]]
    moveDex = [["....."],["scratch", 40, 35, 100, "phy", "none", "normal"], ["growl", 0, 40, 100, "phy","foe atk -1", "normal"], ["ember", 40, 40, 100, "spe","bur", "fire"], ["sand attack", 0, 15, 100, "spe", "foe acu -1", "ground"]] // name, power, power points, acuracy (percent), specail/physical, effects (eg. poison, attack drop ect.), type
    pokemonShapes = [new Image, new Image, new Image, new Image,new Image, new Image, new Image, new Image,new Image, new Image]
    for (counter = 0; counter != 10; counter ++){
        if (counter != 10){ 
            pokemonShapes[counter].src = "pokemon/shape_0" + counter + ".png"
        }else{
            pokemonShapes[10].src = "pokemon/shape_10.png"
        }
    }
    playersBattlePokemonSprite = new Image()
    opponentsBattlePokemonSprite = new Image()
    selectedPartySlot = 0
    partySubMenu = false
    movingPokemon = -1
    map = {colision:currentMapColision, width:document.getElementById("canvas").width, height:(document.getElementById("canvas").width * (2 + 8 / 11)),startingPos:startingPos, npcs:[[1,32*pixelsize,112*pixelsize,[new Image(),new Image(),new Image(),new Image(),new Image()],2,7,["hi!","i like shorts!","they're comfy","and easy to", "wear!",""] ],[1,32*pixelsize,160*pixelsize,[new Image(),new Image(),new Image(),new Image(),new Image()],2,10,["have you seen", "billy anywhere?", "he was playing","with a strange","balloon last i", "saw him."] ]]}
    loadNPCS()
    player = {player_name:"/name/", x: x, y: y, playerx: playerx, playery: playery, camerax: camerax, cameray: cameray, image: playerImage, AnimationProgress: AnimaionProgress, Direction: Directon, xCameraMovement: xCameraMovement, yCameraMovement: yCameraMovement, xMovement: xMovement, yMovement: yMovement, inOverworld:true}
    lastCheckPoint = [function(){returnToCheckPoint()}, {}, {}, "room0.png"]// last place the player healed, what map they were in, where in that map they were, the image of the map they were in
    Object.assign(lastCheckPoint[1], map)
    Object.assign(lastCheckPoint[2], player) 
    returningToCheckPoint = false // whether the player just lost and is being teleported to a checkpoint
    changeCheckPoint = false // if set to true the checkpoint will be set to the players current location
    encounterPrimed = false //whether there will be an encounter when the player reaches the tile they are walking to
    ctx.font = String(Math.floor(document.getElementById("canvas").height/8)) + "px Source Code Pro"
    function loop() {
        draw()
        menuHandler()
        if (menu == 'none'){
            overWorldHandler()
        }
    }
    setInterval(loop, 10)
}