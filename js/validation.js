const form = document.getElementById('registration');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  resetErrors();

  const idInput = document.getElementById('id');
  const fNameInput = document.getElementById('f_name');
  const mNameInput = document.getElementById('m_name');
  const surnameInput = document.getElementById('surname');
  const dobInput = document.getElementById('dob');
  const genderInput = document.getElementById('gender');
  const countyInput = document.getElementById('county');

  let isValid = true;

  if (!idInput.value) {
    setError(idInput, 'Patient ID is required');
    isValid = false;
  }

  if (!fNameInput.value) {
    setError(fNameInput, 'First Name is required');
    isValid = false;
  }else if (/\d/.test(fNameInput.value)) {
    setError(fNameInput, 'First Name should not contain numbers');
    isValid = false;
  }

  if (!mNameInput.value) {
    setError(mNameInput, 'Middle name is required');
    isValid = false;
  }else if (/\d/.test(mNameInput.value)) {
    setError(mNameInput, 'Middle name should not contain numbers');
    isValid = false;
  }

  if (!surnameInput.value) {
    setError(surnameInput, 'Surname is required');
    isValid = false;
  }else if (/\d/.test(surnameInput.value)) {
    setError(surnameInput, 'Surname should not contain numbers');
    isValid = false;
  }

  if (!dobInput.value) {
    setError(dobInput, 'Date of Birth is required');
    isValid = false;
  }else {
    const today = new Date();
    const birthDate = new Date(dobInput.value);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age > 120) {
      setError(dobInput, 'Patient age should not be more than 120 years');
      isValid = false;
    }
  }

  if (genderInput.value === '') {
    setError(genderInput, 'Gender is required');
    isValid = false;
  }
  if (countyInput.value === '') {
    setError(countyInput, 'County is required');
    isValid = false;
  }

  if (isValid) {
    console.log('Form submitted successfully!');
  }
});

function setError(input, errorMessage) {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('small');

  if (!errorElement) {
    const small = document.createElement('small');
    small.classList.add('error-message');
    small.textContent = errorMessage;
    formControl.appendChild(small);
  } else {
    errorElement.textContent = errorMessage;
  }

  input.classList.add('error');
}

function resetErrors() {
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(function(input) {
      const formControl = input.parentElement;
      const errorElement = formControl.querySelector('small');
  
      if (errorElement) {
        errorElement.remove();
      }
  
      input.classList.remove('error');
    });
  }

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', function() {
    resetForm();
});
function resetForm() {
    form.reset();
    resetErrors();
  }