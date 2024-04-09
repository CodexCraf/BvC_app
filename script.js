document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(this); // Get form data
    const registrationData = {
        id: formData.get('id'),
        fullname: formData.get('fullname'),
        address: formData.get('address'),
        status: formData.get('status')
    };

    // Send form data to backend
    fetch('https://bvc-wepapp.onrender.com/registration/register', {
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
            // name, id , address, status, one more
            const feeDiv = document.createElement("div");
            feeDiv.id = "feediv";
            document.body.appendChild(feeDiv);

            const Name = document.createElement("p");
            Name.id = "Name"
            const Name_value = document.createTextNode("Fullname: " + data.fullname);
            Name.appendChild(Name_value);
            document.getElementById("feediv").appendChild(Name);

            const address = document.createElement("p");
            address.id = "address"
            const address_value = document.createTextNode("Address: " + data.address);
            address.appendChild(address_value);
            document.getElementById("feediv").appendChild(address);

            const fee = document.createElement("p");
            fee.id = "fee"
            const fee_value = document.createTextNode("Fee Amount: $" + data.fee);
            fee.appendChild(fee_value);
            document.getElementById("feediv").appendChild(fee);

            const status = document.createElement("p");
            status.id = "status"
            const status_value = document.createTextNode("Status " + data.status);
            status.appendChild(status_value);
            document.getElementById("feediv").appendChild(status);

            const id = document.createElement("p");
            id.id = "id"
            const id_value = document.createTextNode("ID: " + data.id);
            id.appendChild(id_value);
            document.getElementById("feediv").appendChild(id);

            $("#registrationForm").hide();

        })
        .catch(error => {
            console.error('Error:', error); // Log any errors to console
        });
});
