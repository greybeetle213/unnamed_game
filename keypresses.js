var left = false
var right = false
var down = false
var up = false
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
