/* Constants */
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const signupForm = document.querySelector('#signup');


/*Start of Feedbacks */
const throwErrorFeedback = (input, message) => {
    const form = input.parentElement;

    form.classList.remove('was-validated');
    input.classList.add('is-invalid');

    const error = form.querySelector('small');
    error.textContent = message;
}

const throwSuccessFeedback  = (input) => {
     const form = input.parentElement;
    
     form.classList.remove('is-invalid');
     form.classList.add('was-validated');

 
     const error = form.querySelector('small');
     error.textContent = '';
}

/*End of Feedbacks */
/*Start of validation Rules */

const requiredRule = (value) => {
    return value === '' ? false : true;
    
    
}
const lengthRule = (length, min , max) => {
    return length < min || length > max ? false : true;
}
const emailRule = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const passwordRule = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

/*end of validation rules */

/*Start of Validation Methods */
const validateUsername = () => {
    let validated = false;
    
    const min = 3;
    const max = 25;
    const trimmedUsername = username.value.trim();
    if(!requiredRule(trimmedUsername)) {
        throwErrorFeedback(username, 'Username Cannot be empty');
    }
    else if(!lengthRule(trimmedUsername.length, min , max)) {
        throwErrorFeedback(username, `Username must be between ${min} and ${max}`);
    }
    else {
        throwSuccessFeedback(username);
        validated = true;
    }
    return validated;
}

const validateEmail = () => {
    let validated = false;

    const trimmedEmail = email.value.trim();
    if (!requiredRule(trimmedEmail)) {
        throwErrorFeedback(email, 'Email cannot be blank.');
    } else if (!emailRule(trimmedEmail)) {
        throwErrorFeedback(email, 'Email is not valid.')
    } else {
        throwSuccessFeedback(email);
        validated = true;
    }
    return validated;
}
const validatePassword = () => {
    let validated = false;

    const trimmedPassword = password.value.trim();

    if (!requiredRule(trimmedPassword)) {
        throwErrorFeedback(password, 'Password cannot be blank.');
    } else if (!passwordRule(trimmedPassword)) {
        throwErrorFeedback(password, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        throwSuccessFeedback(password);
        validated = true;
    }

    return validated;
}
const matchingPasswordValidation = () => {
    let validated = false;

    const trimmedConfirmPassword = confirmPassword.value.trim();
    const trimmedPassword = password.value.trim();

    if(!requiredRule(trimmedConfirmPassword)) {
        throwErrorFeedback(confirmPassword, 'Please enter the password again')
    }
    else if(trimmedConfirmPassword !== trimmedPassword) {
        throwErrorFeedback(confirmPassword, 'Unmatched Password');
    }
    else {
        throwSuccessFeedback(confirmPassword);
        validated = true;
    }
    return validated
}
/* End of validation rules */

/*Start of listener */
signupForm.addEventListener('input', function(element){
    switch (element.target.id) {
        case 'username':
            validateUsername();
            break;
            case 'email':
                validateEmail();
                break;
            case 'password':
                validatePassword();
                break;
            case 'confirmPassword':
                matchingPasswordValidation();
                break;
           
    }
}) 
/* End of listener */