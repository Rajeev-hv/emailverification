function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    messageElement.style.display = "block";
}

function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (validateEmail(email)) {
        console.log(`Entered Email: ${email}`);
        showMessage("Success: Email address is valid!", "success");
    } else {
        showMessage("Failed: Please enter a valid email address.", "error");
    }
}
