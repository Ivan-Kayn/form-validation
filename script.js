const form = document.querySelector('#form');
const password1El = document.querySelector('#password1');
const password2El = document.querySelector('#password2');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('#message');

// store
let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Contraint API
    isValid = form.checkValidity();
    // style main error message
    if(!isValid) {
        message.textContent = 'Please fill in all fields!';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // check passwords matching
    if(password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = '#03963f';
        password2El.style.borderColor = '#03963f';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure the passwords match!';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    if (isValid && passwordsMatch) {
        message.textContent = 'Registration was successful!';
        message.style.color = '#03963f';
        messageContainer.style.borderColor = '#03963f';
    }

}

function processFormData(event) {
    event.preventDefault();
    validateForm();
    // submit data if validation was successful
    if(isValid && passwordsMatch) {
        storeFormData();
    }
}


function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password1: form.password.value
    }
    // console log user data
    console.log(user);
}

// event listeners
form.addEventListener('submit', processFormData)