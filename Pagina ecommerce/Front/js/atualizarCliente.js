let atualiza = document.getElementById('atualiza');
let res = document.getElementById('res');

atualiza.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    const codCliente = document.getElementById('codCliente').value;
    const nomeCliente = document.getElementById('nomeCliente').value;
    const cpfCliente = document.getElementById('cpfCliente').value;

    const dados = {
        codCliente: codCliente,
        nomeCliente: nomeCliente,
        cpfCliente: cpfCliente
    };

    fetch('http://localhost:3000/cliente', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados) {
                res.innerHTML = 'Cliente atualizado com sucesso!';
            } else {
                res.innerHTML = 'Erro ao atualizar o cliente.';
            }
        })
        .catch((err) => {
            res.innerHTML = 'Erro ao atualizar o cliente.';
            console.error('Erro ao atualizar cliente:', err);
        });
});
