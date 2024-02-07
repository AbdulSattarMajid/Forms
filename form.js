
    let data = []; // Array to store form input values

    function handleclick() {
        let Name = document.getElementById('fname').value;
        let Father_Name = document.getElementById('lname').value;
        let Age = document.getElementById('age').value;
        let Dob = document.getElementById('D.o.B').value;
        let pos = document.getElementById('position').value;
        let degree = document.getElementById('degree').value;

        data.push([a, b, c, d, e, f]); 

        updateTable(); 

        document.getElementById('fname').value = "";
        document.getElementById('lname').value = "";
        document.getElementById('age').value = "";
        document.getElementById('D.o.B').value = "";
        document.getElementById('position').value = "";
        document.getElementById('degree').value = "";
    }

    function updateTable() {
        let table = document.querySelector('.content');
        let newRow = table.insertRow(-1);
        
    
        let idCell = newRow.insertCell(0);
        idCell.textContent = table.rows.length - 1; 
    
        let rowData = data[data.length - 1]; 
        for (let i = 0; i < rowData.length; i++) {
            let cell = newRow.insertCell(i + 1);
            cell.textContent = rowData[i];
        }
    }
    
