// Login Page Interaction
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate username and password (You can add your validation logic here)

    // If valid, redirect to home page
    window.location.href = "home.html";
});

// Sign Up Page Interaction
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate username, email, and password (You can add your validation logic here)

    // If valid, redirect to home page
    window.location.href = "home.html";
});

// My Profile Page Interaction
document.getElementById("logoutButton").addEventListener("click", function() {
    // Log out user and redirect to login page
    window.location.href = "login.html";
});

// Navigation Interaction
document.querySelectorAll(".navigation ul li a").forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
        event.preventDefault();
        const href = navLink.getAttribute("href");
        
        // Redirect to the selected page
        window.location.href = href;
    });
});
