document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // formulário

    const name = document.getElementById('name').value; // nome do input
    const email = document.getElementById('email').value; //  email do input

    //  nova linha na tabela
    const table = document.getElementById('table').querySelector('tbody');
    const row = document.createElement('tr');
    
    // células a nova linha
    const nameCell = document.createElement('td');
    nameCell.textContent = name; // Define o conteúdo da célula como o nome
    const emailCell = document.createElement('td');
    emailCell.textContent = email; // Define o conteúdo da célula como o email
    
    // as células à linha
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    
    // coloca a linha no corpo da tabela
    table.appendChild(row);
    
    // Limpa os inputs
    document.getElementById('form').reset();
});