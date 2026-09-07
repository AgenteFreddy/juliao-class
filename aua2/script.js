let contador = 0
let intervalo = null
//lets rock the future
//
const tempo = document.getElementById('tempo')
const btnIniciar = document.getElementById('btnIniciar')
const btnPausar = document.getElementById('pausar')
const btnZerar = document.getElementById('zerar')
//mouseover
//key
btnIniciar.addEventListener('click', function(){
    if (intervalo !== null) return;

    intervalo = setInterval(() => {
        contador++;
        tempo.textContent = contador;
    }, 1000);
})

btnPausar.addEventListener('click', function(){
    clearInterval(intervalo);
    intervalo = null;
})

btnZerar.addEventListener('click', function(){
    clearInterval(intervalo);
    intervalo = null;
    contador = 0
    tempo.textContent = contador
})