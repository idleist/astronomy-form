// GLOBAL VARIABLES
const formDiv = document.getElementById('contact');
const errors = document.getElementById('errors');
const moreInfo = document.getElementById('moreInfo');
const signUpButton = document.getElementById('signUpButton');
const closeButton = document.getElementById('close');
const submitButton = document.getElementById('submitButton');
// I wanted to make my code shorter so have created an object of all the elements and their variable names I want to create here.

var elements = {
    form: 'form',
    firstNameLabel: 'label',
    firstName: 'input',
    lastNameLabel: 'label',
    lastName: 'input',
    emailLabel: 'label',
    email: 'input',
    addressLabel: 'label',
    address: 'textarea',
    moreButton: 'button',
}

// This takes my elements object, turns it into an array and adds each new element to the window object for use later.
const domElements = Object.entries(elements);
for (const [variable, elem] of domElements){
    window[variable] = document.createElement(elem);
}

// A set attributes function that makes adding multiple attributes at once easier
function setAttributes(elem, obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            elem[prop] = obj[prop];
        }
    }
}

// When 'Click Here To Sign Up' Button is clicked - first section of form opens.  All my elements are created in javaScript and appended into the DOM.

function openForm(){
    signUpButton.style.display = 'none';
    formDiv.style.display = 'block';
    moreButton.style.display = 'block';
    
    // Form - set attributes
    setAttributes(form, {
        id: 'contact--form',
        method: 'post',
        action: 'form.php',
    });

    // LABELS
    // First Name Label
    firstNameLabel.setAttribute('for', 'firstName');
    firstNameLabel.innerText = 'First name';

    // Last Name Label
    lastNameLabel.setAttribute('for', 'lastName');
    lastNameLabel.innerText = 'Last name';

    // Email Label
    emailLabel.setAttribute('for', 'email');
    emailLabel.innerText = 'Email';

    // Address Label
    addressLabel.setAttribute('for', 'address');
    addressLabel.innerText = 'Address';

    // MoreButton Label
    moreButton.innerText = 'Please Tell us More...'

    // INPUTS
    // Text Input - First name attributes
    setAttributes(firstName, {
        id: 'firstName',
        type: 'text',
        autocomplete: 'given-name',
        name: 'firstname',
        placeholder: 'enter your first name'
    });

    // Text Input - Last name attributes
    setAttributes(lastName, {
        id: 'lastName',
        type: 'text',
        autocomplete: 'family-name',
        name: 'lastname',
        placeholder: 'enter your last name'
    });

    // Text Input - Email
    setAttributes(email, {
        id: 'email',
        type: 'text',
        autocomplete: 'email',
        name: 'email',
        placeholder: 'enter your email'
    });

    // Text Area - Address
    setAttributes(address, {
        id: 'address',
        type: 'textarea',
        rows: '5',
        autocomplete: 'address',
        name: 'address'
    });

    // Tell us More Button
    setAttributes(moreButton, {
        id: 'moreButton',
        type: 'button'
    });

    

    // Append Contact Details into form
    
    form.appendChild(firstNameLabel);
    form.appendChild(firstName);
    form.appendChild(lastNameLabel);
    form.appendChild(lastName);
    form.appendChild(emailLabel);
    form.appendChild(email);
    form.appendChild(addressLabel);
    form.appendChild(address);
    form.appendChild(moreButton);
    formDiv.insertBefore(form, moreInfo);
}

// Close Button Functionality
closeButton.addEventListener('click', function(){
    formDiv.style.display = 'none';
    signUpButton.style.display = 'block';
    formDiv.classList.remove('contact--display');
    moreInfo.classList.remove('moreInfoDisplay');
    moreInfo.style.display = 'none';
    submitButton.style.display = 'block';
    errors.style.display = 'none';
    success.style.display = 'none';
    form.reset();
});

// Input more information button - This part of the form was written directly in HTML and is set to display: none.  This function displays the second part of the form and changes the layout of the page.
moreButton.addEventListener('click', displayForm);

function displayForm(){
    moreButton.style.display = 'none';
    formDiv.style.display = 'grid';
    formDiv.classList.add('contact--display');
    moreInfo.classList.add('moreInfoDisplay');
    moreInfo.style.display = 'grid';
}



// ** FORM VALIDATION ** //
form.addEventListener('submit', validate);

function validate(e){
    // Error message DIV
    errors.innerHTML = '';

    // Giving the form object a property of validate == true.
    form.validate = true;    

    e.preventDefault();
    // Form Values
    let userfirstName = firstName.value;
    let userlastName = lastName.value;
    let userEmail = email.value;
    let userAddress = address.value;

    // Planets Seen
    let planets = document.querySelectorAll('input[type=checkbox]:checked');
    let userPlanets = [];
    planets.forEach(planet => userPlanets.push(planet.value));
    
    // Country Select Box
    let selectCountry = document.getElementById('countrySelect');
    let userCountry = selectCountry.options[selectCountry.selectedIndex].value;

    // VALIDATION
    if(userfirstName == null || userfirstName == ''){
        errors.innerHTML += '<p class="errorText">Please Enter Your First Name</p>';
        form.validate = false;
    }

    if(userlastName == null || userlastName == ''){
        errors.innerHTML += '<p class="errorText">Please Enter Your Last Name</p>';
        form.validate = false;
    }

    let regexp = /[^@\s]+@[^\.]+\..+/g;
    if(!regexp.test(userEmail)){
        errors.innerHTML += '<p class="errorText">Please Enter A Valid Email</p>';
        form.validate = false;
    }

    if(userAddress == null || userAddress == ''){
        errors.innerHTML += '<p class="errorText">Please Enter Your Address</p>';
        form.validate = false;
    }

    if(document.querySelector('input[name=age]:checked') == null){
        errors.innerHTML += '<p class="errorText">Please Enter Your Age Group</p>';
        form.validate = false; 
    } else {
        var userAge = document.querySelector('input[name=age]:checked').value;
    }

    if(userCountry == 'notselected'){
        errors.innerHTML += '<p class="errorText">Please Enter Your Country</p>';
        form.validate = false;
    }

    if(errors.innerHTML != ''){
        errors.style.display ='block';
    }

    if(form.validate){
        submitButton.style.display = 'none';
        errors.style.display = 'none';
        success.style.display = 'block';
        form.submit();
    }


    
    console.log(userfirstName, userlastName, userAddress, userEmail, userPlanets, userCountry, form.validate);
}

