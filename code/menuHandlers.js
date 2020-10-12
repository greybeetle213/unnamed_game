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
    if (keyX == true && menu == "main"){
        if (selectedMenuSlot == 6){
            menu = "none"
        }
        if (selectedMenuSlot == 2){
            menu = "item"
        }
    }
    if (menu == "item"){
        if (left == true && bagPockets[3] != 0){
            bagPockets[3] -= 1
            selectedItem = 0
            left = false
        }
        if (right == true && 2 > bagPockets[3]){
            bagPockets[3] += 1
            selectedItem = 0
            right = false
        }
        if (up == true && selectedItem != 0){
            selectedItem -= 1
            up = false
        }else if (selectedItem == 0 && up == true && scrolledInBag > 0){
            scrolledInBag -= 1
            up = false
        }
        if (down == true && selectedItem < bagPockets[bagPockets[3]][1].length-1 && selectedItem < 9){
            selectedItem += 1
            down = false
        }else if (selectedItem == 9 && down == true && bagPockets[bagPockets[3]][1].length-1-scrolledInBag > 9){
            scrolledInBag += 1
            down = false
        }
    } 
}