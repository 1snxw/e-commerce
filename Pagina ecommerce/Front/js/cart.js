// Função para adicionar itens ao carrinho
function addToCart(name, price, image) {
    const product = { name, price, image };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} foi adicionado ao carrinho!`);
    window.location.href = './carrinho.html'; // Redireciona para o carrinho
}

// Função para renderizar o carrinho (para uso em `carrinho.html`)
function renderCart() {
    const cartContainer = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cartContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Seu carrinho está vazio!</p>';
    } else {
        cartItems.forEach((item, index) => {
            total += item.price;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>R$ ${item.price.toFixed(2)}</p>
                </div>
            `;

            // Criação do botão "Remover" com estilo aplicado
            const cartItemActions = document.createElement('div');
            cartItemActions.classList.add('cart-item-actions');
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.classList.add('remove-btn'); // Classe para estilização
            removeBtn.addEventListener('click', () => removeFromCart(index)); // Adiciona o evento de clique

            cartItemActions.appendChild(removeBtn);
            cartItem.appendChild(cartItemActions);
            cartContainer.appendChild(cartItem);
        });
    }

    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para remover itens do carrinho
function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCart();
}

// Inicialização da página do carrinho
if (window.location.pathname.includes('carrinho.html')) {
    renderCart();
}

// Função para finalizar a compra
function finalizePurchase() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        alert('Seu carrinho está vazio! Adicione itens antes de finalizar a compra.');
    } else {
        window.location.href = './pagamento.html';
    }
}
