function mudar() {
    document.getElementById('elementId').innerHTML = 'Você clicou no botão!';
}

function mudar_cor1() {
    document.body.style.backgroundColor = 'blue';
}
function mudar_cor2() {
    document.body.style.backgroundColor = 'green';
}
function mudar_cor3() {
    document.body.style.backgroundColor = 'red';
}

function coisar() {
    let botao = document.getElementById('coisar');
    let caixa = document.getElementById('caixa');

    if (botao.textContent === 'Esconder') {
        caixa.style.display = 'none'; 
        botao.textContent = 'Mostrar';
    } else {
        caixa.style.display = 'block'; 
        botao.textContent = 'Esconder';
    }
}

let contador = 0;
function aumentar() {
    contador++;
    document.getElementById('valorContador').innerText = contador;
}
function zerar() {
    contador = 0;
    document.getElementById('valorContador').innerText = contador;
}

function mostrarTexto() {
    let textoDigitado = document.getElementById('meuInput').value;
    document.getElementById('resultadoInput').innerText = "Você digitou: " + textoDigitado;
}

function adicionarItem() {
    let input = document.getElementById('inputLista');
    let texto = input.value;
    let lista = document.getElementById('minhaLista');

    if (texto !== '') {
        let novoItem = document.createElement('li');
        novoItem.innerText = texto;
        lista.appendChild(novoItem);
        input.value = '';
    }
}

let tamanhoAtual = 24; 
function mudarTamanho(direcao) {
    if (direcao === 1) {
        tamanhoAtual += 2;
    } else if (direcao === -1 && tamanhoAtual > 10) {
        tamanhoAtual -= 2;
    }
    document.getElementById('tituloTamanho').style.fontSize = tamanhoAtual + 'px';
}

let imagemUmAtiva = true;
function trocarImagem() {
    let img = document.getElementById('minhaImagem');
    if (imagemUmAtiva) {
        img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.autopapo.com.br%2Fbox%2Fuploads%2F2020%2F11%2F20134828%2Flogus-pedreiro-antes-depois-lata-velha-5-565x350.jpg&f=1&nofb=1&ipt=365b2ee4609044d2cef97fcc01fdeba4ff0c190224c3144b8b74888cf0079a27";
        imagemUmAtiva = false;
    } else {
        img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.ifunny.co%2Fimages%2F043799255161ef2d82cd997015eba3c0ab51adbe7d011792bd7f4bec4ee8bddb_1.jpg&f=1&nofb=1&ipt=29daf16444d32d4a65d503d7757ca69855a6b8bb9016ae9e65eb881f9a9b63d4";
        imagemUmAtiva = true;
    }
}

function validarForm() {
    let nome = document.getElementById('nomeValidacao').value;
    let msg = document.getElementById('msgValidacao');

    if (nome === '') {
        msg.innerText = "Por favor, preencha o nome.";
        msg.style.color = "red";
    } else {
        msg.innerText = "Enviado com sucesso!";
        msg.style.color = "green";
    }
}

function toggleDark() {
    document.body.classList.toggle('dark');
    
    let btn = document.getElementById('btnDark');
    
    if (document.body.classList.contains('dark')) {
      btn.innerText = 'Modo Claro';
      backgroundColor = 'black'
    } else {
        btn.innerText = 'Modo Escuro';
    }
}