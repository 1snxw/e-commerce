let deleta = document.getElementById('deleta');
let res = document.getElementById('res');

deleta.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    const idCliente = document.getElementById('idCliente').value;

    fetch(`http://localhost:3000/cliente/${idCliente}`, {
        method: 'DELETE'
    })
        .then(resposta => {
            if (resposta.ok) {
                res.innerHTML = 'Cliente deletado com sucesso!';
            } else {
                res.innerHTML = 'Erro ao deletar o cliente.';
            }
        })
        .catch((err) => {
            res.innerHTML = 'Erro ao deletar o cliente.';
            console.error('Erro ao deletar cliente:', err);
        });
});
