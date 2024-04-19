document.addEventListener('DOMContentLoaded', function() {
    var rememberCheckbox = document.getElementById('remember');
    var nameInput = document.getElementById('name');
    var passwordInput = document.getElementById('password');

    if (localStorage.getItem('remember') === 'true') {
        rememberCheckbox.checked = true;
        nameInput.value = localStorage.getItem('username') || '';
        passwordInput.value = localStorage.getItem('password') || '';
    }

    rememberCheckbox.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('remember', 'true');
            localStorage.setItem('username', nameInput.value);
            localStorage.setItem('password', passwordInput.value);
        } else {
            localStorage.removeItem('remember');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }
    });
});
