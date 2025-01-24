document.addEventListener('DOMContentLoaded', function () {
    // Form Selection
    var form = document.getElementById('registration-form');

    // Feedback Division Selection
    var feedbackDiv = document.getElementById('form-feedback');

    // Form Submission Event Listener
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve User Inputs
        var username = document.getElementById('username').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        // Initialize Validation Variables
        var isValid = true;
        var messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Feedback Display Logic
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Success color
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Error messages joined with <br>
            feedbackDiv.style.color = '#dc3545'; // Error color
        }
    });
});
