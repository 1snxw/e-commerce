// Mostrar as abas corretas
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.classList.remove('hidden');
        } else {
            tab.classList.add('hidden');
        }
    });
}

// Carregar lista de clientes
window.addEventListener('load', () => {
    showTab('listar');
    listarClientes();
});

// Listar Clientes
function listarClientes() {
    fetch('http://localhost:3000/clientes')
        .then(resposta => resposta.json())
        .then(clientes => {
            const tabela = document.getElementById('clientesTable').getElementsByTagName('tbody')[0];
            tabela.innerHTML = '';

            clientes.forEach(cliente => {
                const row = tabela.insertRow();
                row.innerHTML = `
                    <td>${cliente.codCliente}</td>
                    <td>${cliente.nomeCliente}</td>
                    <td>${cliente.emailCliente}</td>
                    <td>${cliente.cpfCliente}</td>
                    <td>
                        <button onclick="editarCliente(${cliente.codCliente})">Editar</button>
                        <button onclick="deletarCliente(${cliente.codCliente})">Deletar</button>
                    </td>
                `;
            });
        })
        .catch(err => {
            console.log('Erro ao listar clientes', err);
        });
}

// Editar Cliente
function editarCliente(id) {
    document.getElementById('clienteId').value = id;
    showTab('atualizar');
}

// Deletar Cliente
function deletarCliente(id) {
    document.getElementById('clienteIdDelete').value = id;
    showTab('deletar');
}

// Consultar Cliente
document.getElementById('consultarClienteForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const cpf = document.getElementById('cpfConsultar').value;

    fetch(`http://localhost:3000/cliente?cpf=${cpf}`)
        .then(resposta => resposta.json())
        .then(cliente => {
            document.getElementById('resConsultar').innerText = JSON.stringify(cliente);
        })
        .catch(err => {
            document.getElementById('resConsultar').innerText = 'Cliente não encontrado.';
        });
});

// Atualizar Cliente
document.getElementById('atualizarClienteForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const clienteId = document.getElementById('clienteId').value;
    const novoNome = document.getElementById('novoNome').value;
    const novoEmail = document.getElementById('novoEmail').value;
    const novoCpf = document.getElementById('novoCpf').value;

    const dados = {
        codCliente: clienteId,
        nomeCliente: novoNome,
        emailCliente: novoEmail,
        cpfCliente: novoCpf
    };

    fetch('http://localhost:3000/cliente', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
        .then(resposta => resposta.json())
        .then(dados => {
            document.getElementById('resAtualizar').innerText = 'Cliente atualizado com sucesso!';
            listarClientes();
        })
        .catch(err => {
            document.getElementById('resAtualizar').innerText = 'Erro ao atualizar cliente.';
            console.log(err);
        });
});

// Deletar Cliente
document.getElementById('deletarClienteForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const clienteIdDelete = document.getElementById('clienteIdDelete').value;

    fetch(`http://localhost:3000/cliente/${clienteIdDelete}`, {
        method: 'DELETE',
    })
        .then(resposta => resposta.json())
        .then(dados => {
            document.getElementById('resDeletar').innerText = 'Cliente deletado com sucesso!';
            listarClientes();
        })
        .catch(err => {
            document.getElementById('resDeletar').innerText = 'Erro ao deletar cliente.';
            console.log(err);
        });
});
