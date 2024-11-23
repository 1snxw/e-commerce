let res = document.getElementById("res");

// Função para salvar os dados do cliente no localStorage antes de navegar para a próxima página
function v(event) {
  event.preventDefault();

  const nomeCliente = document.getElementById('nomeCliente').value;
  const sobrenomeCliente = document.getElementById('sobrenomeCliente').value;
  const cpfCliente = document.getElementById('cpfCliente').value;
  const telefoneCliente = document.getElementById('telefoneCliente').value;
  const emailCliente = document.getElementById('emailCliente').value;

  const cliente = {
    nomeCliente,
    sobrenomeCliente,
    cpfCliente,
    telefoneCliente,
    emailCliente
  };

  // Armazena os dados no localStorage
  localStorage.setItem('cliente', JSON.stringify(cliente));

  // Redireciona para a próxima página (onde será cadastrado o endereço)
  window.location.href = './cadastrarEndereco.html';
}

// Função para recuperar os dados do cliente e cadastrar o endereço
function cadastrarEndereco(event) {
  event.preventDefault();

  // Recupera os dados do cliente do localStorage
  const cliente = JSON.parse(localStorage.getItem('cliente'));
  if (!cliente) {
    console.error("Dados do cliente não encontrados.");
    return;
  }

  const logradouro = document.getElementById('logradouro').value;
  const numero = document.getElementById('numero').value;
  const complemento = document.getElementById('complemento').value;
  const bairro = document.getElementById('bairro').value;
  const localidade = document.getElementById('localidade').value;
  const uf = document.getElementById('uf').value;
  const cep = document.getElementById('cep').value;
  const statusCliente = document.getElementById('statusCliente').value;

  const dados = {
    ...cliente, // Adiciona os dados do cliente
    logradouro,
    numero,
    complemento,
    bairro,
    localidade,
    uf,
    cep,
    statusCliente
  };

  // Faz a requisição para cadastrar os dados
  fetch("http://localhost:3000/cliente", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  })
  .then(res => res.json())
  .then(dados => {
    console.log("Cliente cadastrado com sucesso:", dados);

    // Exibe os dados na tela após o cadastro
    res.innerHTML = `
      <h3>Cadastro realizado com sucesso!</h3>
      <p><strong>Nome:</strong> ${dados.nomeCliente} ${dados.sobrenomeCliente}</p>
      <p><strong>CPF:</strong> ${dados.cpfCliente}</p>
      <p><strong>Telefone:</strong> ${dados.telefoneCliente}</p>
      <p><strong>E-mail:</strong> ${dados.emailCliente}</p>
      <button onclick="goToMainPage()">Ir para a página principal</button>
    `;
  })
  .catch(err => {
    console.error("Erro ao cadastrar cliente:", err);
    res.innerHTML = 'Erro ao realizar o cadastro, tente novamente mais tarde.';
  });
}

// Função para redirecionar para a página principal
function goToMainPage() {
  window.location.href = 'index.html';  // Substitua com o caminho correto para sua página principal
}