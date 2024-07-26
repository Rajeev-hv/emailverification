function validateEmail() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        showMessage("Failed: Please enter a valid email address.", "error");
        return false;
    }
    showMessage("Success: Email address is valid!", "success");
    return true;
}

function showMessage(message, type) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    messageElement.style.display = "block";
}

function handleSubmit(event) {
    event.preventDefault();
    validateEmail();
}


