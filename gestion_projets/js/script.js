document.addEventListener('DOMContentLoaded', function() {
    console.log("Document ready!");

    // Example: add event listener for a form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add login functionality here
        });
    }
});
