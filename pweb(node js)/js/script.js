function toggleText() {
    const moreText = document.getElementById('moreText');
    const toggleButton = document.getElementById('toggleButton');
  
    if (moreText.style.display === 'none') {
      moreText.style.display = 'inline';
      toggleButton.textContent = 'Show Less';
    } else {
      moreText.style.display = 'none';
      toggleButton.textContent = 'Know More';
    }
  }

  function validateForm() {
    const name = document.getElementById('namee').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (message === "") {
        alert("Message must be filled out");
        return false;
    }

    return true;
}