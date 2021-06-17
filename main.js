let goldRush = new GoldRush(5, 5)
let render = new Renderer(goldRush)

const loadData = function() {
    render.renderScores()
    render.renderBoard()
}

loadData()

$(document).keypress(function(e) {

    if (e.which == 119) {
        console.log("up")
        goldRush.movePlayer(1, "up")
        loadData()
    }

    if (e.which == 97) {
        console.log("left")
        goldRush.movePlayer(1, "left")
        loadData()
    }

    if (e.which == 115) {
        console.log("down")
        goldRush.movePlayer(1, "down")
        loadData()
    }

    if (e.which == 100) {
        console.log("right")
        goldRush.movePlayer(1, "right")
        loadData()
    }
    if (e.which == 105) {
        console.log("up")
        goldRush.movePlayer(2, "up")
        loadData()
    }

    if (e.which == 106) {
        console.log("left")
        goldRush.movePlayer(2, "left")
        loadData()
    }

    if (e.which == 107) {
        console.log("down")
        goldRush.movePlayer(2, "down")
        loadData()
    }

    if (e.which == 108) {
        console.log("right")
        goldRush.movePlayer(2, "right")
        loadData()
    }
})