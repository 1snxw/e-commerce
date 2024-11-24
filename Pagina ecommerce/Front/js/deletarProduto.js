let deletaProduto = document.getElementById('deletaProduto');
let res = document.getElementById('res');

deletaProduto.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    const idProduto = document.getElementById('idProduto').value;

    fetch(`http://localhost:3000/produto/${idProduto}`, {
        method: 'DELETE'
    })
        .then(resposta => {
            if (resposta.ok) {
                res.innerHTML = 'Produto deletado com sucesso!';
            } else {
                res.innerHTML = 'Erro ao deletar o produto.';
            }
        })
        .catch((err) => {
            res.innerHTML = 'Erro ao deletar o produto.';
            console.error('Erro ao deletar produto:', err);
        });
});
