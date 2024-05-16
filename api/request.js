const apiUrl = 'http://localhost:3000/patients'; // Replace with your API endpoint
const headers = {
  'Content-Type': 'application/json'
};

const form = document.getElementById('registration');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const idInput = document.getElementById('id');
  const fnameInput = document.getElementById('f_name');
  const mnameInput = document.getElementById('m_name');
  const surnameInput = document.getElementById('surname');
  const dobInput = document.getElementById('dob');
  const genderInput = document.getElementById('gender');
  const countyInput = document.getElementById('county');  
  // Get the form data
  const formData = {
    id: idInput.value,
    f_name: fnameInput.value,
    m_name: mnameInput.value,
    surname: surnameInput.value,
    dob: dobInput.value,
    gender: genderInput.value,
    county: countyInput.value
  };

  // Send the HTTP request
  fetch(apiUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    displaySuccessMessage();
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
function displaySuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.textContent = 'Record created successfully!';
  successMessage.style.backgroundColor = 'lightgreen';
  successMessage.style.padding = '10px';
  successMessage.style.marginTop = '10px';

  const formContainer = document.getElementById('registration').parentNode;
  formContainer.insertAdjacentElement('afterend', successMessage);

  // Remove the success message after 3 seconds
  setTimeout(() => {
    successMessage.remove();
  }, 3000);
}