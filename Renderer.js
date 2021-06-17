class Renderer {
    constructor(goldRush) {
        this.goldRush = goldRush
    }
    renderBoard() {
        $('#matrix').empty()
        let matrix = this.goldRush.GoldMatrix

        const source = $('#matrix-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ matrix });

        $('#matrix').append(newHTML);

        goldRush.print()
    }
    renderScores() {
        $('#score').empty()
        let score = this.goldRush.scores

        const source = $('#score-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ score });
        $('#score').append(newHTML);
        goldRush.printScore()
    }
}