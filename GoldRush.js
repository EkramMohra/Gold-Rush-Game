class GoldRush extends Matrix {
    constructor(rowNum, colNum) {
        super(rowNum, colNum)

        this.GoldMatrix = this.matrix
        this.loadBoard()
        this.coin()
        this.coinsCount = 0
        this.scores = { 1: 0, 2: 0 }

    }
    loadBoard() {
        for (let row = 0; row < this.GoldMatrix.length; row++) {
            for (let col = 0; col < this.GoldMatrix[row].length; col++) {

                if (row == 0 && col == 0)
                    this.GoldMatrix[row][col] = 1
                else if (row == this.GoldMatrix.length - 1 && col == this.GoldMatrix[row].length - 1)
                    this.GoldMatrix[row][col] = 2
                else
                    this.GoldMatrix[row][col] = "."

            }
        }
    }

    printScore() {
        console.log("Player 1 score: ", this.scores[1])
        console.log("Player 2 score: ", this.scores[2])

    }
    isNumber(y, x) {
        return this.GoldMatrix[y][x] != '.' && this.GoldMatrix[y][x] != 'c'

    }
    moveDown(playerNum, coordinate) {

        if (coordinate.y == (this.GoldMatrix.length) - 1) {
            console.log("you can't move down ");

        } else {

            coordinate.y++
            this.increaseScore(coordinate.y, coordinate.x, playerNum)

            if (!this.isNumber(coordinate.y, coordinate.x)) {

                this.GoldMatrix[coordinate.y - 1][coordinate.x] = "."
                this.GoldMatrix[coordinate.y][coordinate.x] = playerNum
            }
        }
    }
    moveUp(playerNum, coordinate) {
        if (coordinate.y == 0) {
            console.log("you can't move up ");

        }
        else {
            coordinate.y--
            this.increaseScore(coordinate.y, coordinate.x, playerNum)
            if (!this.isNumber(coordinate.y, coordinate.x)) {
                this.GoldMatrix[coordinate.y + 1][coordinate.x] = "."
                this.GoldMatrix[coordinate.y][coordinate.x] = playerNum
            }
        }
    }
    moveLeft(playerNum, coordinate) {
        if (coordinate.x == 0) {
            console.log("you can't move left");
        }
        else {

            coordinate.x--
            this.increaseScore(coordinate.y, coordinate.x, playerNum)
            if (!this.isNumber(coordinate.y, coordinate.x)) {
                this.GoldMatrix[coordinate.y][coordinate.x + 1] = "."
                this.GoldMatrix[coordinate.y][coordinate.x] = playerNum
            }
        }
    }
    woner() {
        if (this.coinsCount == 0) {
            if (this.scores[1] > this.scores[2]) {
                console.log(`Congratulations Player 1 - ${this.scores[1]}`);

            } else {
                console.log(`Congratulations Player 2 - ${this.scores[2]}`);

            }
        }
    }
    moveRight(playerNum, coordinate) {
        if (coordinate.x == (this.GoldMatrix[this.rowNum - 1].length) - 1) {
            console.log("you can't move right ");
        }
        else {
            coordinate.x++
            this.increaseScore(coordinate.y, coordinate.x, playerNum)
            if (!this.isNumber(coordinate.y, coordinate.x)) {
                this.GoldMatrix[coordinate.y][coordinate.x - 1] = "."
                this.GoldMatrix[coordinate.y][coordinate.x] = playerNum
            }
        }
    }

    movePlayer(playerNum, moveDirection) {
        let coordinate = this.findCoordinate(playerNum)
        if (moveDirection == "down")
            this.moveDown(playerNum, coordinate)
        if (moveDirection == "left")
            this.moveLeft(playerNum, coordinate)
        if (moveDirection == "right")
            this.moveRight(playerNum, coordinate)
        if (moveDirection == "up")
            this.moveUp(playerNum, coordinate)
    }
    coin() {
        let coinsNum = Math.floor((Math.random() * 8) + 4)


        for (let counter = 0; counter < coinsNum; counter++) {

            let row = Math.floor(Math.random() * 4);
            let col = Math.floor(Math.random() * 4);
            let value = this.get(row, col)
            if (value != "1" && value != "2" && value != "c") {
                this.coinsCount += 1
                this.GoldMatrix[row][col] = "c"
            }


        }

    }
    increaseScore(x, y, playerNum) {

        this.get(x, y) == 'c' ? this.scores[playerNum] = this.scores[playerNum] + 10 : null
        this.coinsCount = this.coinsCount--
        this.woner()

    }

}