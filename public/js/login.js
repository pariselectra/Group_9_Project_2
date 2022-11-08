const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // depending on what id names are for email entry and password entry divs
    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', 
        {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        }
      );
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Login failed, please try again.');
      }
    }
};
  
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // depending on what id names are for username, email, and password entry divs
    const username = document.querySelector('').value.trim();
    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', 
        {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        }
      );
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Sign up failed, please try again.');
      }
    }
};
  
// depending on id names for login form and signup form
document.querySelector('')
    .addEventListener('submit', loginFormHandler);
  
document.querySelector('')
    .addEventListener('submit', signupFormHandler);
  