let cadastrarFabricante = document.getElementById('cadastrarFabricante');
let res = document.getElementById('res');

cadastrarFabricante.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    // Coletando os valores do formulário
    const nomeFabricante = document.getElementById('nomeFabricante').value;
    const marcaFabricante = document.getElementById('marcaFabricante').value;
    const cnpjFabricante = document.getElementById('cnpjFabricante').value;
    const telefoneFabricante = document.getElementById('telefoneFabricante').value;
    const emailFabricante = document.getElementById('emailFabricante').value;
    const logradouro = document.getElementById('logradouro').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const localidade = document.getElementById('localidade').value;
    const uf = document.getElementById('uf').value;
    const cep = document.getElementById('cep').value;

    const fabricante = {
        nomeFabricante,
        marcaFabricante,
        cnpjFabricante,
        telefoneFabricante,
        emailFabricante,
        logradouro,
        numero,
        complemento,
        bairro,
        localidade,
        uf,
        cep
    };

    fetch('http://localhost:3000/fabricante', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fabricante)
    })
        .then(resposta => {
            if (resposta.ok) {
                res.innerHTML = 'Fabricante cadastrado com sucesso!';
                document.getElementById('form-cadastrar').reset(); // Reseta o formulário
            } else {
                res.innerHTML = 'Erro ao cadastrar o fabricante.';
            }
        })
        .catch((err) => {
            res.innerHTML = 'Erro ao cadastrar o fabricante.';
            console.error('Erro ao cadastrar fabricante:', err);
        });
});
