let nomeCliente
let sobrenomeCliente
let cpfCliente
let telefoneCliente
let emailCliente



function validarFormulario(event){
  event.preventDefault()
  nomeCliente = document.getElementById('nomeCliente').value
  sobrenomeCliente = documnet.getElementById('sobrenomeCliente').value
  cpfCliente = document.getElementById('cpfCliente').value
  telefoneCliente = document.getElementById('telefoneCliente').value
  emailCliente = document.getElementById('emailCliente').value

  window.location.href = './cadastrarEndereco.html';

}

function cadastrarEndereco(event) {
  event.preventDefault()

  const logrdouro = document.getElementById('logradouro').value
  const numero = document.getElementById('numero').value
  const complemento = documnet.getElementById('complemento').value
  const bairro = document.getElementById('bairro').value
  const localidade = document.getElementById('localidade').value
  const uf = document.getElementById('uf').value
  const cep = document.getElementById('cep').value
  const statusCliente = document.getElementById('statusCliente').value

  const dados = {
    logrdouro,
    numero,
    complemento,
    bairro,
    localidade,
    uf,
    cep,
    statusCliente,
    nomeCliente,
    sobrenomeCliente,
    cpfCliente,
    telefoneCliente,
    emailCliente
  }


  fetch

}

