// 1. Set your credentials here
const CORRECT_USERNAME = "Chris Gidy"; 
const CORRECT_PHONE = "0768234373"; 

const loginBtn = document.getElementById('button');
const usernameInput = document.getElementById('Your-name');
const phoneInput = document.getElementById('pass');

loginBtn.addEventListener('click', function() {
    const user = usernameInput.value.trim();
    const phone = phoneInput.value.trim();

    // 2. Check credentials
    if (user === CORRECT_USERNAME && phone === CORRECT_PHONE) {
        
        // OPTIONAL: Save login status so they don't have to login again if they refresh
        localStorage.setItem('isLoggedIn', 'true');

        // 3. REDIRECT to the new page
        window.location.href = "portfolio.html"; 
    } else {
        alert("Invalid Username or Phone Number");
    }
});

// 4. Security: If they try to go to portfolio.html directly without logging in
window.addEventListener('load', function() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        // If not logged in, force them to stay on the login page
        // (Or redirect them back to login.html if this was the portfolio page)
        if(window.location.pathname.includes('portfolio')) {
             window.location.href = "index.html";
        }
    }
});
// 4. Global Security Check
// This runs every time the page loads
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPath = window.location.pathname;

    // If the user is trying to access the portfolio page...
    if (currentPath.includes('portfolio.html') || currentPath.endsWith('portfolio')) {
        // ...and they are NOT logged in...
        if (isLoggedIn !== 'true') {
            // ...kick them back to the login page
            window.location.href = "index.html";
        }
    }
}

// Run the check when the page loads
window.addEventListener('load', checkAuth);