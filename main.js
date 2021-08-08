let goldRush = new GoldRush(5, 5)
let render = new Renderer(goldRush)

const loadData = function () {
    render.renderScores()
    render.renderBoard()
}

loadData()

$(document).keypress(function (e) {
    const keys = {
        119: [1, "up"],
        97: [1, "left"],
        115: [1, "down"],
        100: [1, "right"],
        105: [2, "up"],
        106: [2, "left"],
        107: [2, "down"],
        108: [2, "right"]
    }
    const keyPressed = e.which
    goldRush.movePlayer(...keys[keyPressed])
    loadData()

})