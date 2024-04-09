document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(this); // Get form data
    const registrationData = {
        id: formData.get('id'),
        fullname: formData.get('fullname'),
        address: formData.get('address'),
        status: formData.get('status')
    };

    // Send form data to backend
    fetch('http://localhost:3000/registration/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData) // Convert registrationData to JSON format
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response JSON
    })
    .then(data => {
        // Handle response data as needed
        console.log(data); // Log response data to console
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors to console
    });
});
