let deletaFabricante = document.getElementById('deletaFabricante');
let res = document.getElementById('res');

deletaFabricante.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário

    const idFabricante = document.getElementById('idFabricante').value;

    fetch(`http://localhost:3000/fabricante/${idFabricante}`, {
        method: 'DELETE'
    })
        .then(resposta => {
            if (resposta.ok) {
                res.innerHTML = 'Fabricante deletado com sucesso!';
            } else {
                res.innerHTML = 'Erro ao deletar o fabricante.';
            }
        })
        .catch((err) => {
            res.innerHTML = 'Erro ao deletar o fabricante.';
            console.error('Erro ao deletar fabricante:', err);
        });
});
