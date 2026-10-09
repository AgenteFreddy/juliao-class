const btnAdicionar = document.getElementById('btn-adicionar-livro');
const secaoprodutos = document.querySelector('.secao-produtos');
const logo = document.querySelector('.logo');
const formNewsletter = document.getElementById('form-newsletter');
const emailNews = document.getElementById('email-news');
const msgErro = document.getElementById('msg-erro');

if (btnAdicionar) {
  btnAdicionar.addEventListener('click', () => {
    let nome = prompt('Adicione nome:');
    let imagem = prompt('Adicione imagem (URL ou caminho):');
    let descricao = prompt('Adicione descricao:');
    let preco = prompt('Adicione preco:');
    if (nome) {
      let html = `<article class="livros">
          <h1>${nome}</h1>
          <img src="${imagem}" alt="Imagem do livro ${nome}">
          <p>${descricao}</p>
          <p>Preco: R$${preco}</p>
          <button class="btn-vender">Vender</button>
      </article>`;
      secaoprodutos.innerHTML += html;
    }
  });
}
secaoprodutos.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const livroElement = event.target.closest('.livros');
    const confirmacao = confirm(`Tem certeza que deseja vender este livro?`);
    if (confirmacao) {
      livroElement.remove();
      alert('Livro vendido com sucesso!');
    } else {
      event.target.textContent = "Cancelado";
      event.target.style.backgroundColor = "#95a5a6";
    }
  }
});
if (logo) {
  logo.addEventListener('mouseover', () => {
    logo.classList.add('logo-destaque');
  });
  logo.addEventListener('mouseout', () => {
    logo.classList.remove('logo-destaque');
  });
}
if (formNewsletter) {
  formNewsletter.addEventListener('submit', (event) => {
    const email = emailNews.value.trim();
    if (email === '' || !email.includes('@')) {
      msgErro.style.display = 'block';
    } else {
      msgErro.style.display = 'none';
      alert(`O e-mail ${email} foi inscrito com sucesso!`);
      emailNews.value = '';
    }
  });
}
if (emailNews) {
  emailNews.addEventListener('input', () => {
    if (emailNews.value.includes('@')) {
      msgErro.style.display = 'none';
    }
  });
}
