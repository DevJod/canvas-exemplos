/**
 * Objeto com as coordenadas
 */
var coor = {
    // objeto dom canvas
    canvas: document.getElementById('myCanvas'),
    // retorna ponto central (pela largura do canvas)
    retCentroX: function() {
        return this.canvas.width / 2;
    },
    // retorna o ponto central (pela altura do canvas)
    retCentroY: function() {
        return this.canvas.height / 2;
    },
    // Retorna um randômico até a largura do canvas
    retRandomX: function() {
        return Math.random() * this.canvas.width;
    },
    // Retorna um randômico até a altura do canvas
    retRandomY: function() {
        return Math.random() * this.canvas.height;
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
 * Função que desenha uma linha a partir 
 * do centro do canvas em direção randômica
 */
function draw(coor) {
    var context = coor.canvas.getContext('2d');
    context.beginPath();
    // Vários tons de azul
    context.strokeStyle = coor.retStrokeStyleColor();
    context.lineWidth = 0.1;
    // Vá para o centro do canvas...
    context.moveTo(coor.retCentroX(), coor.retCentroY());
    // ...e desenhe uma linha até os valores (randômicos) de x e y
    context.lineTo(coor.retRandomX(), coor.retRandomY());
    context.stroke();
};

/**
 * Repetindo
 */
setInterval(function() {
    draw(coor);
}, 10);