

    // Check if they are logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        // If not, send them back to the login page
        window.location.href = "index.html";
    }