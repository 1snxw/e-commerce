const formLogin = document.getElementById('form-login');
const res = document.getElementById('res');

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailCliente = document.getElementById('emailCliente').value;
    const cpfCliente = document.getElementById('cpfCliente').value;

    try {
        const response = await fetch(`http://localhost:3000/cliente?email=${emailCliente}&cpf=${cpfCliente}`);
        
        if (response.status === 404) {
            res.innerHTML = 'E-mail ou CPF incorretos.';
            return;
        }

        if (response.status !== 200) {
            res.innerHTML = 'Erro ao realizar login. Tente novamente mais tarde.';
            console.error('Erro no servidor:', response.status);
            return;
        }

        const cliente = await response.json();

        if (cliente) {
            res.innerHTML = 'Login realizado com sucesso!';

            // Verifica se o cliente é administrador ou cliente
            if (cliente.statusCliente === 'administrador') {
                // Redireciona para a página de administrador
                setTimeout(() => {
                    window.location.href = 'paginaAdmin.html'; // Página do administrador
                }, 2000);
            } else {
                // Redireciona para a página principal
                setTimeout(() => {
                    window.location.href = 'index.html'; // Página principal
                }, 2000);
            }
        } else {
            res.innerHTML = 'E-mail ou CPF incorretos.';
        }
    } catch (err) {
        console.error('Erro ao realizar login:', err);
        res.innerHTML = 'Erro ao realizar login. Tente novamente mais tarde.';
    }
});
