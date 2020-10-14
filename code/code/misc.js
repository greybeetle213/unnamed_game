function print(writing,x,y,scale){
    letterx = 0
    for(printcounter = 0; printcounter < writing.length; printcounter += 1){
            if (writing[printcounter] != " "){
            ctx.drawImage(text[alphabet.findIndex(function(letter){return letter == writing[printcounter]})], x+letterx,y,5*scale,7*scale)
            }
        letterx += 5*scale + 0.5*scale
    }
}
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
    Object.assign(player, overworldPos) // where in the overworld the player was when they entered the room
    player.inOverworld = true
    player.y += 1
    player.yMovement = 16
    player.Direction = 0
    loadNPCS()
    room1.src = "room0.png"
}