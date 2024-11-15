// Function to fetch the user data
async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('User data contains some errors');
    }
    return response.json();
}

// Function to display data in HTML
async function displayUserData() {
    const userList = document.getElementById('user-list');
    try {
        const users = await fetchUserData();
        const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`).join(''); // Join the array to avoid commas
        userList.innerHTML = listItems;
    } catch (error) {
        console.log('Error fetching data:', error);
        userList.innerHTML = '<li>Error Fetching User Data. Please try again later.</li>';
    }
}

const viewButton = document.getElementById('view');
const hideButton = document.getElementById('hide');
const userList = document.getElementById('user-list');


viewButton.addEventListener('click', () => {
    userList.style.display = 'block'; 
    displayUserData();
});

hideButton.addEventListener('click', () => {
    userList.style.display = 'none'; 
});



