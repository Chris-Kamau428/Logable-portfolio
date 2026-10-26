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
        
        // REDIRECT to the new page
        window.location.href = "portfolio.html"; 
        
    } else {
        alert("Invalid Username or Phone Number");
        // Optional: Clear the fields immediately on wrong input
        usernameInput.value = '';
        phoneInput.value = '';
    }
});
