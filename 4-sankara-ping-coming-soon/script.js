const form = document.getElementById('form')
const email = document.getElementById('email')
const button = document.getElementById('button')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    validate()
})

function validate() {
    let emailValue = email.value.trim()

    if (emailValue = '') {
        // setErrorFor(email, 'Email cannot be empty')
        console.log('Email cannot be empty')
    } else if (!isEmail(emailValue)){
        // setErrorFor(email, 'Please provide a valid email address')
        return console.log('Please provide a valid email address');
    } else {
        // setSuccessFor(email)
        console.log('Is a valid email');
    }
}

function setErrorFor() {
        
}

function setSuccessFor() {
        
}

function isEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}
