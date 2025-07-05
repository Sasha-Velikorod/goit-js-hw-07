const formEl = document.querySelector(".login-form");

const onSubmit = (e) => {
  e.preventDefault();

  const email = e.currentTarget.elements.email;
  const password = e.currentTarget.elements.password;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("All form fields must be filled in");
  }

  const userInfo = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(userInfo);

  e.currentTarget.reset();
};

formEl.addEventListener("submit", onSubmit);
