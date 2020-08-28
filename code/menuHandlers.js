function menuHandler(){
    if (enter == true && player.xMovement == 0 && player.yMovement == 0 && textshowing == false){
        if (menu == "none"){ 
            selectedMenuSlot = 0
            menu = "main" // set the menu to be the one with that lets you chose between pokemon, bag, profile, pokedex, ect.
        } else {
            menu = "none"
        }
        enter = false
    }
    if (down == true && menu == "main" && selectedMenuSlot < 6){
        selectedMenuSlot += 1
        down = false
    }
    if (up == true && menu == "main" && selectedMenuSlot > 0){
        selectedMenuSlot -= 1
        up = false
    }
}