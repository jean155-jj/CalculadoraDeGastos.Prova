document.getElementById('gastos-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const categoria = document.getElementById('categoria').value;

    if (descricao && !isNaN(valor) && categoria) {
        const tabela = document.getElementById('lista-gastos');
        const novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).innerText = descricao;
        novaLinha.insertCell(1).innerText = valor.toFixed(2);
        novaLinha.insertCell(2).innerText = categoria;
        
        const acoesCell = novaLinha.insertCell(3);
        const botaoRemover = document.createElement('button');
        botaoRemover.innerText = 'Remover';
        botaoRemover.addEventListener('click', function() {
            tabela.deleteRow(novaLinha.rowIndex - 1);
            atualizarTotal();
        });
        acoesCell.appendChild(botaoRemover);
        
        document.getElementById('gastos-form').reset();
        atualizarTotal();
    } 
});

function atualizarTotal() {
    const tabela = document.getElementById('lista-gastos');
    let total = 0;
    for (let i = 0; i < tabela.rows.length; i++) {
        total += parseFloat(tabela.rows[i].cells[1].innerText);
    }
    document.getElementById('total-gastos').innerText = total.toFixed(2);
}