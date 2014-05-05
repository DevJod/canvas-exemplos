/**
 * Função que retorna um grid
 */
function drawGrid(context, color, stepx, stepy) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = 0.5;

    //  linhas verticais
    for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }

    //  linhas horizontais
    for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
    }
}

// Utilização
var ctx = document.getElementById('myCanvas').getContext('2d');
drawGrid(ctx, 'lightgray', 10, 10);