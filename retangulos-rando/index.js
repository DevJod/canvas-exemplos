/**
 * Objeto com as coordenadas
 */
var coor = {
    // objeto dom canvas
    canvas: document.getElementById('myCanvas'),
    retangulo: function() {
        var retangulo = {};
        retangulo.x = Math.floor(Math.random() * this.canvas.width);
        retangulo.y = Math.floor(Math.random() * this.canvas.height);
        retangulo.width = Math.floor(Math.random() * (this.canvas.width - retangulo.x));
        retangulo.height = Math.floor(Math.random() * (this.canvas.height - retangulo.y));

        return retangulo;
    },
    // Retorna um número randômico entre 0 e 255
    retRandom0_255: function() {
        return Math.round(Math.random() * 255);
    },
    retStrokeStyleColor: function() {
        return "rgb(" + this.retRandom0_255() + "," + this.retRandom0_255() + "," + this.retRandom0_255() + ")";
    }
};

/**
 * Função que ...
 */
function draw(coor) {
    var context = coor.canvas.getContext('2d'),
        rect = {};

    context.strokeStyle = coor.retStrokeStyleColor();

    rect = coor.retangulo();
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
};

/**
 * Repetindo
 */
setInterval(function() {
    draw(coor);
}, 500);
