
fetch('users.json')
    .then(response => response.json())
    .then(data => {
        // Sort the data by score in descending order
        data.sort((a, b) => b.guessCount - a.guessCount);

        // Select the table body
        const table = document.querySelector('#scoreTable tbody');

        // Loop through the sorted data and create rows in the table
        data.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.username}</td>
                <td>${entry.guessCount}</td>
            `;
            table.appendChild(row);
        });
    });

//Tried to get started here but kinda got stuck. Had an issue with trying to test it
//Error Message Was:
//