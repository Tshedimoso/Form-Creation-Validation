document.addEventListener('DOMContentLoaded', () => {
    // Wrap HTML within DOMContentLoaded to ensure the DOM is fully loaded

    // Form Selection implementation
    const form = document.getElementById('registration-form');

    // Feedback Div Selection
    const feedbackDiv = document.getElementById('form-feedback');

    // Form submission event listener
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Retrieve User Inputs implementation
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // Validation of username input
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validation of email input
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Validation of password input
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Feedback Display Logic
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Success message color
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join error messages with <br>
            feedbackDiv.style.color = '#dc3545'; // Error message color
        }
    });
});
