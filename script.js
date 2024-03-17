const form = document.querySelector("#formularioEntrar");

form.addEventListener("submit", validacao = (event)=>{
    event.preventDefault();
    const emailentrar = document.getElementById('usuario').value;
    const senhaentrar = document.getElementById('senha').value;

    
    if (emailentrar && senhaentrar) {
        document.getElementById('enviado').style.display = "block";
        if (emailentrar && senhaentrar) {
            setTimeout(function() {
                window.location.href = './pagina-inicial.html';
            }, 1000);
        }
    } else {
        document.getElementById('enviado').style.display = "none";
    }
}) 

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
      
  console.log(validateEmail('texto@texto.com')); // true
  console.log(validateEmail('texto@texto')); // false
  console.log(validateEmail('texto.com')); // false
  console.log(validateEmail('texto')); // false

  function validarTelefone(telefone) {
    // Expressão regular para verificar se o telefone está no formato correto (xx) xxxxx-xxxx
    var regexTelefone = /^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/;
    
    return regexTelefone.test(telefone);
}

function validarSenha(senha) {
    // Verificar se a senha possui pelo menos 6 caracteres
    return senha.length >= 6;
}

// Exemplo de uso das funções
var telefone = "(11) 99999-9999";
var senha = "minhasenha123";

if(validarTelefone(telefone)) {
    console.log("Telefone válido");
} else {
    console.log("Telefone inválido");
}

if(validarSenha(senha)) {
    console.log("Senha válida");
} else {
    console.log("Senha inválida");
}