document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById('name').value; // Obtém o nome do input
    const email = document.getElementById('email').value; // Obtém o email do input

    // Cria uma nova linha na tabela
    const table = document.getElementById('table').querySelector('tbody');
    const row = document.createElement('tr');
    
    // Adiciona células à nova linha
    const nameCell = document.createElement('td');
    nameCell.textContent = name; // Define o conteúdo da célula como o nome
    const emailCell = document.createElement('td');
    emailCell.textContent = email; // Define o conteúdo da célula como o email
    
    // Anexa as células à linha
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    
    // Anexa a linha ao corpo da tabela
    table.appendChild(row);
    
    // Limpa os inputs
    document.getElementById('form').reset();
});