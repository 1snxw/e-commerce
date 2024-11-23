// Referência para o botão de listar clientes
let listarClientesBtn = document.getElementById('listarClientesBtn');
let clientesTable = document.getElementById('clientesTable').getElementsByTagName('tbody')[0];
let res = document.getElementById('res');

listarClientesBtn.addEventListener('click', async () => {
    try {
        // Realiza a requisição para o servidor para obter todos os clientes
        const response = await fetch('http://localhost:3000/clientes');

        if (response.status === 200) {
            const clientes = await response.json();

            // Limpa a tabela antes de preencher
            clientesTable.innerHTML = '';

            // Preenche a tabela com os dados dos clientes
            clientes.forEach(cliente => {
                const row = clientesTable.insertRow();

                const cellCod = row.insertCell(0);
                const cellNome = row.insertCell(1);
                const cellEmail = row.insertCell(2);
                const cellCpf = row.insertCell(3);
                const cellTelefone = row.insertCell(4);
                const cellStatus = row.insertCell(5);

                cellCod.textContent = cliente.codCliente;
                cellNome.textContent = `${cliente.nomeCliente} ${cliente.sobrenomeCliente}`;
                cellEmail.textContent = cliente.emailCliente;
                cellCpf.textContent = cliente.cpfCliente;
                cellTelefone.textContent = cliente.telefoneCliente;
                cellStatus.textContent = cliente.statusCliente;
            });
        } else {
            res.innerHTML = 'Erro ao carregar os clientes. Tente novamente mais tarde.';
        }
    } catch (err) {
        console.error('Erro ao listar clientes:', err);
        res.innerHTML = 'Erro ao listar clientes. Tente novamente mais tarde.';
    }
});
