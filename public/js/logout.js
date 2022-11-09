// user logout
const logout = async () => {
    const response = await fetch('/api/users/logout', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }
    );
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Logout failed, please try again.');
    }
  };
  
  // depending on id name for logout button
  document.querySelector('#logout-btn')
    .addEventListener('click', logout);
  