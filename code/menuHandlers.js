function menuHandler(){
    if (enter == true && player.xMovement == 0 && player.yMovement == 0 && textshowing == false){
        if (menu == "none"){ 
            selectedMenuSlot = 0
            menu = "main" // set the menu to be the one with that lets you chose between pokemon, bag, profile, pokedex, ect.
        } else if(partySubMenu == false && movingPokemon == -1){
            menu = "none"
            selectedMenuSlot = 0
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
        if (selectedMenuSlot == 0 && party.length != 0){
            menu = "pkmn"
            keyX = false
            selectedPartySlot = 0
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
    }else if(menu == "pkmn"){
        if (partySubMenu == false){
            if (down == true && selectedPartySlot < party.length-1){
                selectedPartySlot += 1
                down = false
            }
            if (up == true && selectedPartySlot != 0){
                selectedPartySlot -= 1
                up = false
            }
            if (left == true){
                selectedPartySlot = 0
            }
            if (right == true && party.length > 1){
                selectedPartySlot = 1
            }
        }
        if (keyX == true && partySubMenu == false && movingPokemon == -1){
            partySubMenu = true
            keyX = false
        }
        if (keyX == true && movingPokemon != -1){
            party.splice(selectedPartySlot, 0, party.splice(movingPokemon,1)[0])
            movingPokemon = -1
            keyX = false
        }
        if (partySubMenu == true){
            if(up == true && selectedMenuSlot != 0){
                selectedMenuSlot -=1
                up = false
            }else if(down == true && selectedMenuSlot < 2){
                selectedMenuSlot += 1
                down = false
            }else if(keyX == true){
                if (selectedMenuSlot == 2){
                    partySubMenu = false
                    keyX = false
                }else if (selectedMenuSlot == 0){
                    movingPokemon = selectedPartySlot
                    partySubMenu = false
                    keyX = false
                }else if (selectedMenuSlot == 1){
                    menu = "pkmninfo"
                    partySubMenu = false
                } 
            }
        } 
    }
}