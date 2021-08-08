class Matrix {
    constructor(rowNum, colNum) {
        this.matrix = this.generateMatrix(rowNum, colNum)
        this.rowNum = rowNum
        this.colNum = colNum
    }
    print() {

        for (let row = 0; row < this.rowNum; row++) {
            let line = ""
            for (let col = 0; col < this.colNum; col++) {
                line += this.matrix[row][col] + "\t"


            }
            console.log(line);

        }
        console.log("\n");
    }
    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1

        for (let r = 0; r < numRows; r++) {
            matrix.push([])

            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)

            }
        }
        return matrix
    }
    get(row, column) {
        return this.matrix[row][column]

    }
    printColumn(numColumns) {

        for (let row = 0; row < this.matrix.length; row++) {

            console.log(this.matrix[row][numColumns]);
        }

    }
    alter(row, col, value) {
        console.log(this.matrix[row][col] = value);
        return this.matrix[row][col] = value

    }
    printRow(Rownum) {

        for (let col = 0; col < this.matrix[Rownum].length; col++) {
            console.log(this.matrix[Rownum][col]);
            //return this.matrix[Rownum][col]

        }
    }
    findCoordinate(value) {

        for (let row = 0; row < this.matrix.length; row++) {
            for (let col = 0; col < this.matrix[row].length; col++) {
                if (this.matrix[row][col] == value)
                    return { "x": col, "y": row }
            }
        }

    }
}
let m = new Matrix(3, 4)
    //console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
    //console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}
    //m.print()
    //prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

/* m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)
 */

//module.exports = Matrix