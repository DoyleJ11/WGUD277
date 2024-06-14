document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const email = document.querySelector('#email');
    const confirmEmail = document.querySelector('#confirm-email');
    form.addEventListener('submit', function(event) {
        if (!isValidEmail(email.value)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (email.value !== confirmEmail.value) {
            alert("Email adresses don't match!")
            event.preventDefault();
        }
    })

    function isValidEmail(email) {
        const atSymbol = email.indexOf('@');
        const dot = email.indexOf('.', atSymbol);
    
        if (atSymbol <1 || dot <= atSymbol + 1 || dot === email.length - 1) {
            return false;
        }
        return true;
    }

});
