

addEventListener('load', () => {
    document.querySelector('#password-setup').addEventListener('input', () => {
        const password = document.querySelector('#password');
        const confirmPassword = document.querySelector('#confirm-password');
        const errorMessage = document.querySelector('#password + span');

        if (!password.value || password.value !== confirmPassword.value) {
            password.classList.add('error');
            confirmPassword.classList.add('error');
            errorMessage.textContent = '* Passwords do not match'
        }
        else {
            password.classList.remove('error');
            confirmPassword.classList.remove('error');
            errorMessage.textContent = ''
        }
    });
});