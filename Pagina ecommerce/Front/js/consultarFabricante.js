let consultarFabricante = document.getElementById('consultarFabricante');
let fabricanteInfo = document.getElementById('fabricante-info');

consultarFabricante.addEventListener('click', (e) => {
    e.preventDefault();

    const idFabricante = document.getElementById('codFabricante').value;

    // Use a variável correta
    fetch(`http://localhost:3000/fabricante/${idFabricante}`)
        .then(response => response.json())
        .then(fabricante => {
            if (fabricante) {
                fabricanteInfo.innerHTML = `
                    <p><strong>ID:</strong> ${fabricante.codFabricante}</p>
                    <p><strong>Nome:</strong> ${fabricante.nomeFabricante}</p>
                    <p><strong>Marca:</strong> ${fabricante.marcaFabricante}</p>
                    <p><strong>Telefone:</strong> ${fabricante.telefoneFabricante}</p>
                    <p><strong>Email:</strong> ${fabricante.emailFabricante}</p>
                `;
            } else {
                fabricanteInfo.innerHTML = 'Fabricante não encontrado.';
            }
        })
        .catch(err => {
            console.error('Erro ao consultar fabricante:', err);
            fabricanteInfo.innerHTML = 'Erro ao consultar fabricante.';
        });
});
