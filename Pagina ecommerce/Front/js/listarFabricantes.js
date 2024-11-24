document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/fabricantes')
        .then(response => response.json())
        .then(fabricantes => {
            const fabricanteList = document.getElementById('fabricante-list');
            fabricanteList.innerHTML = '';

            fabricantes.forEach(fabricante => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${fabricante.codFabricante}</td>
                    <td>${fabricante.nomeFabricante}</td>
                    <td>${fabricante.marcaFabricante}</td>
                    <td>${fabricante.telefoneFabricante}</td>
                    <td>${fabricante.emailFabricante}</td>
                `;
                fabricanteList.appendChild(tr);
            });
        })
        .catch(err => {
            console.error('Erro ao listar fabricantes:', err);
        });
});
