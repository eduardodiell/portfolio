function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (!nome || !email || !mensagem) {
    alert("Todos os campos são obrigatórios!");
    return false;
  }
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    alert("Digite um e-mail válido!");
    return false;
  }
  alert("Mensagem enviada com sucesso!");
  document.getElementById("formContato").reset();
  return true;
}
