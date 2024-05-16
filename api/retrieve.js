const apiUrl = 'http://localhost:3000/patients'; //API endpoint

//fetch and display patient data
function fetchPatientData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const patientTable = document.getElementById('patient-table');
      patientTable.innerHTML = ''; // Clear previous data

      // Create table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      const headers = ['ID', 'First Name', 'Middle Name', 'Last Name', 'Date of Birth', 'Gender', 'County'];
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      patientTable.appendChild(thead);

      // Create table body
      const tbody = document.createElement('tbody');
      data.forEach(patient => {
        const row = document.createElement('tr');
        const cells = [
          patient.id,
          patient.f_name,
          patient.m_name,
          patient.surname,
          patient.dob,
          patient.gender,
          patient.county
        ];
        cells.forEach(cell => {
          const td = document.createElement('td');
          td.textContent = cell;
          row.appendChild(td);
        });
        tbody.appendChild(row);
      });
      patientTable.appendChild(tbody);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Call the fetchPatientData function on page load
window.onload = fetchPatientData;