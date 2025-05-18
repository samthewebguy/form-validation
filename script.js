const form = document.getElementById ("form");
const fullname= document.getElementById ("fullname-input");
const email = document.getElementById ("email-input");
const password = document.getElementById ("password-input");
const confirmpassword = document.getElementById ("confirmpassword-input");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
  });

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkInputs(){
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    const nameRegex = /^[a-zA-Z\s'-]+$/;

    // Full name validation

    if (fullnameValue === '') {
        setErrorFor(fullname, 'Full name is required');
    } else if(fullnameValue.length <2){
        setErrorFor(fullname, 'Full name cannot be less than two character');
    } else if(!nameRegex.test(fullnameValue)){
        setErrorFor(fullname, 'Full name must use valid characters only');
    } else{
        setSuccessFor(fullname);
    }

    // Email validation

    if(emailValue === ''){
        setErrorFor(email, 'Email address cannot be blank');
    } else if(!isValidEmail(emailValue)){
        setErrorFor(email, 'Verify your email address is correct');
    } else{
        setSuccessFor (email);
    }

    // Password validation

    if (passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    } else if(passwordValue.length <5){
        setErrorFor(password, 'Password cannot be less than 5 character');
    } else {
        setSuccessFor(password)
    }

    // Confirm password validation

    if(confirmpasswordValue === ''){
        setErrorFor(confirmpassword, 'Confirm password cannot be blank');
    } else if (passwordValue !== confirmpasswordValue){
        setErrorFor(confirmpassword, 'Password do not match');
    } else if (confirmpasswordValue.length <5){
        setErrorFor(confirmpassword, 'Password cannot be less than 5 character');
    } else{
        setSuccessFor(confirmpassword)
    }
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
