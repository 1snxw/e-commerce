function addToCart(nome, preco, imagem) {
    // Recupera o carrinho existente ou inicializa um novo
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adiciona o produto ao carrinho
    carrinho.push({ nome, preco, imagem });

    // Salva o carrinho atualizado no Local Storage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Feedback ao usuário
    alert(`${nome} foi adicionado ao carrinho!`);
}