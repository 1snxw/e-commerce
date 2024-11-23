let consultar = document.getElementById('consultar');
let res = document.getElementById('res');

consultar.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;

    fetch(`http://localhost:3000/cliente?email=${email}&cpf=${cpf}`)
        .then(resposta => resposta.json())
        .then(cliente => {
            if (cliente) {
                res.innerHTML = `
                    <p><strong>Nome:</strong> ${cliente.nomeCliente}</p>
                    <p><strong>Email:</strong> ${cliente.emailCliente}</p>
                    <p><strong>Status:</strong> ${cliente.statusCliente}</p>
                `;
            } else {
                res.innerHTML = 'Cliente não encontrado.';
            }
        })
        .catch((err) => {
            res.innerHTML = 'Erro ao consultar o cliente.';
            console.error('Erro ao consultar o cliente:', err);
        });
});
