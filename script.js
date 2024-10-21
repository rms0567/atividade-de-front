document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value; 

    
    const table = document.getElementById('table').querySelector('tbody');
    const row = document.createElement('tr');
    
    
    const nameCell = document.createElement('td');
    nameCell.textContent = name; 
    const emailCell = document.createElement('td');
    emailCell.textContent = email; 
    
   
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    
    
    table.appendChild(row);
    
    
    document.getElementById('form').reset();
});