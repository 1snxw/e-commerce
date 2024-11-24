let cadastrarProduto = document.getElementById('cadastrarProduto');
let resProduto = document.getElementById('res-produto');

cadastrarProduto.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    // Coletando os valores do formulário
    const nomeProduto = document.getElementById('nomeProduto').value;
    const fabricanteId = document.getElementById('fabricanteId').value;
    const quantidadeProduto = document.getElementById('quantidadeProduto').value;
    const precoProduto = document.getElementById('precoProduto').value;
    const descricaoProduto = document.getElementById('descricaoProduto').value;

    const produto = {
        nomeProduto,
        fabricanteId,
        quantidadeProduto,
        precoProduto,
        descricaoProduto
    };

    fetch('http://localhost:3000/produto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
        .then(resposta => {
            if (resposta.ok) {
                resProduto.innerHTML = 'Produto cadastrado com sucesso!';
                document.getElementById('form-cadastrar-produto').reset(); // Reseta o formulário
            } else {
                resProduto.innerHTML = 'Erro ao cadastrar o produto.';
            }
        })
        .catch((err) => {
            resProduto.innerHTML = 'Erro ao cadastrar o produto.';
            console.error('Erro ao cadastrar produto:', err);
        });
});
