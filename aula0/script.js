let estado = 0
const cores = ['#ff2222','#ffcc00','#00cc44'];
const luzes = ['vermelho','amarelo','verde'];

function mudarCor(){
    estado = (estado + 1)%3; //limitando a var a ter 3 tamanhos
    document.getElementById(luzes[0]).style.background = cores[estado]
}