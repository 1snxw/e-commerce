document.getElementById('form-consultar-produto').addEventListener('submit', (e) => {
    e.preventDefault();

    const codProduto = document.getElementById('codProduto').value;
    fetch(`http://localhost:3000/produto/${codProduto}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Produto não encontrado');
            }
            return response.json();
        })
        .then(produto => {
            const produtoInfo = document.getElementById('produto-info');
            produtoInfo.innerHTML = `
                <p><strong>ID:</strong> ${produto.codProduto}</p>
                <p><strong>Nome:</strong> ${produto.nomeProduto}</p>
                <p><strong>Quantidade:</strong> ${produto.quantidadeProduto}</p>
                <p><strong>Preço:</strong> ${produto.precoProduto}</p>
                <p><strong>Descrição:</strong> ${produto.descricaoProduto}</p>
                <p><strong>Fabricante ID:</strong> ${produto.fabricanteId}</p>
            `;
        })
        .catch(err => {
            console.error('Erro ao consultar produto:', err);
            document.getElementById('produto-info').innerHTML = 'Erro ao consultar produto.';
        });
});
