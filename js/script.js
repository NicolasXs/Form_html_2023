const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

console.log(form, nameInput, emailInput);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Verifica se o nome está vazio
  if (nameInput.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, preencha o seu nome.",
    });
    return;
  }

  // Verifica se o e-mail está preenchido e se é valido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, preencha o seu email.",
    });
    return;
  }

  // Verifica se a senha está preenchida
  if (!validatePassword(passwordInput.value, 8)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, preencha a sua senha com o mínimo de 8 dígitos.",
    });
    return;
  }

  // Verifica se a situação foi selecionada
  if (jobSelect.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, responda a situação de trabalho.",
    });
    return;
  }

  // Verifica se a mensagem foi preenchida
  if (messageTextarea.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, deixe uma mensagem de descrição.",
    });
    return;
  }

  // Função que valida o e-mail
  function isEmailValid(email) {
    // cria uma regex para validar email
    const emailRegex = new RegExp(
      // usuario12@host.com
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
      return true;
    }
    return false;
  }

  // Função que valida a Senha
  function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
      // Senha válida
      return true;
    }
    // Senha inválida
    return false;
  }

  // Se todos os campos estiverem corretamente preenchidos, envie o form
  form.submit();
});
