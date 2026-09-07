const cores = ['#ff2222','#ffcc00','#00cc44'];
const luzes = ['vermelho','amarelo','verde'];
let i = 0;

setInterval(() =>{
    document.getElementById('vermelho').style.background = 'rgb(82, 82, 89)';
    document.getElementById('amarelo').style.background = 'rgb(82, 82, 89)';
    document.getElementById('verde').style.background = 'rgb(82, 82, 89)';

    document.getElementById(luzes[i]).style.background = cores[i];
    i = (i + 1) % cores.length;
},2000)



