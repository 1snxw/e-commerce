listarProdutosBtn.addEventListener('click', async () => {
    try {
        // Realiza a requisição para o servidor para obter todos os produtos
        const response = await fetch('http://localhost:3000/produtos');

        if (response.status === 200) {
            const produtos = await response.json();

            // Limpa a tabela antes de preencher
            produtosTable.innerHTML = '';

            // Adiciona o cabeçalho da tabela
            const headerRow = produtosTable.insertRow();
            const headerCod = headerRow.insertCell(0);
            const headerNome = headerRow.insertCell(1);
            const headerQuantidade = headerRow.insertCell(2);
            const headerPreco = headerRow.insertCell(3);
            const headerDescricao = headerRow.insertCell(4);
            const headerFabricanteId = headerRow.insertCell(5);

            headerCod.textContent = 'Código';
            headerNome.textContent = 'Nome';
            headerQuantidade.textContent = 'Quantidade';
            headerPreco.textContent = 'Preço';
            headerDescricao.textContent = 'Descrição';
            headerFabricanteId.textContent = 'ID Fabricante';

            // Preenche a tabela com os dados dos produtos
            produtos.forEach(produto => {
                const row = produtosTable.insertRow();

                const cellCod = row.insertCell(0);
                const cellNome = row.insertCell(1);
                const cellQuantidade = row.insertCell(2);
                const cellPreco = row.insertCell(3);
                const cellDescricao = row.insertCell(4);
                const cellFabricanteId = row.insertCell(5);

                cellCod.textContent = produto.codProduto;
                cellNome.textContent = produto.nomeProduto;
                cellQuantidade.textContent = produto.quantidadeProduto;
                
                // Garantir que o precoProduto é um número
                const preco = parseFloat(produto.precoProduto);
                cellPreco.textContent = `R$ ${isNaN(preco) ? 'Erro' : preco.toFixed(2)}`;
                
                cellDescricao.textContent = produto.descricaoProduto;
                cellFabricanteId.textContent = produto.fabricanteId;
            });
        } else {
            res.innerHTML = 'Erro ao carregar os produtos. Tente novamente mais tarde.';
        }
    } catch (err) {
        console.error('Erro ao listar produtos:', err);
        res.innerHTML = 'Erro ao listar produtos. Tente novamente mais tarde.';
    }
});
