const form = document.getElementById('form');
const name = document.getElementById('firstname');
const email = document.getElementById('email');
const message = document.getElementById('message')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const firstnameValue = firstname.value();
    const emailValue = email.value();
    const messageValue = message.value();

    if(firstname === '') {
        setError(firstname, 'Name is required')
    }else{
        setSuccess(firstname);
    }

};



