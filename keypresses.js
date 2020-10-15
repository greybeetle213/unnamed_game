var left = false
var right = false
var down = false
var up = false
var enter = false
var keyX = false

document.getElementById("Enter").addEventListener("touchstart", function(){
    enter = true
})
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    alert("mobile")
}else{
    document.addEventListener('keydown', (event) => {
        if (event.key == 'ArrowLeft') {
            left = true
        }
    })
    document.addEventListener('keyup', (event) => {
        if (event.key == 'ArrowLeft') {
            left = false
        }
    })
    document.addEventListener('keydown', (event) => {
        if (event.key == 'ArrowRight') {
            right = true
        }
    })
    document.addEventListener('keyup', (event) => {
        if (event.key == 'ArrowRight') {
            right = false
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.key == 'ArrowUp') {
            up = true
        }
    })
    document.addEventListener('keyup', (event) => {
        if (event.key == 'ArrowUp') {
            up = false
        }
    })
    document.addEventListener('keydown', (event) => {
        if (event.key == 'ArrowDown') {
            down = true
        }
    })
    document.addEventListener('keyup', (event) => {
        if (event.key == 'ArrowDown') {
            down = false
        }
    })
    document.addEventListener('keydown', (event) => {
        if (event.key == 'x') {
            keyX = true
        }
    })
    document.addEventListener('keyup', (event) => {
        if (event.key == 'x') {
            keyX = false
        }
    })
    document.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            enter = true
        }
    })
    document.addEventListener('keyup', (event) => {
        if (event.key == 'Enter') {
            enter = false
        }
    })
}
