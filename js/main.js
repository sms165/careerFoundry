
//validate contact form
(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');
    let phoneInput = document.querySelector('#phone');
   
    function showErrorMessage(input, message) {
        let container = input.parentElement;
    
        //Remove an existing error
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
            
        }
    
        //Add the error if the message isn't empty
        if (message) {
            let error= document.createElement('div');
            error.classList.add('error-message');
            error.innerText=message;
            container.appendChild(error);
            
        }
        
    }

    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field.');
            return false;
        }
    
        if (value.indexOf('@')=== -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false 
        }
    
        showErrorMessage(emailInput, null);
        return true;
    }
    
    function validatePhone() {
        let value = phoneInput.value;
        let phoneNum =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        
    if (!value) {
        showErrorMessage(phoneInput, 'Phone number is a required field');
        return false;      
    }

    if(!value.match(phoneNum)){
        showErrorMessage(phoneInput, 'Enter a valid phone number (XXX-XXX-XXXX');
        return false;
        
    }

    showErrorMessage(phoneInput, null);
    return true;
}


    
    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidPhone = validatePhone
        return isValidEmail && isValidPhone;
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    });

    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
  })();





