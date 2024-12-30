const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission for validation
  let isValid = true;

  // Username validation
  const username = document.getElementById("username");
  if (!username.value.match(/^[a-zA-Z0-9_]{4,12}$/)) {
    username.classList.add("is-invalid");
    isValid = false;
  } else {
    username.classList.remove("is-invalid");
  }

  // Email validation
  const regEmail = document.getElementById("regEmail");
  if (!regEmail.value.match(/^\S+@\S+\.\S+$/)) {
    regEmail.classList.add("is-invalid");
    isValid = false;
  } else {
    regEmail.classList.remove("is-invalid");
  }

  // Password validation
  const regPassword = document.getElementById("regPassword");
  if (!regPassword.value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
    regPassword.classList.add("is-invalid");
    isValid = false;
  } else {
    regPassword.classList.remove("is-invalid");
  }

  // Confirm Password validation
  const confirmPassword = document.getElementById("confirmPassword");
  if (confirmPassword.value !== regPassword.value) {
    confirmPassword.classList.add("is-invalid");
    isValid = false;
  } else {
    confirmPassword.classList.remove("is-invalid");
  }

  if (isValid) {
    alert("Registration Successful!");
    registrationForm.reset(); // Reset the form on successful submission
  }
});
