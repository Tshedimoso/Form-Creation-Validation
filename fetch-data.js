// JavaScript Code
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container element for displaying data
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch user data from the API
        const response = await fetch(apiUrl);

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to display the users
        const userList = document.createElement('ul');

        // Loop through the users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Display the user's name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the <ul> to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors (e.g., network issues)
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
