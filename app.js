document.addEventListener("DOMContentLoaded", () => {
  const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao receber os dados");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});


const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const url = `https://uselessfacts.jsph.pl/api/v2/facts/random`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao receber os dados");
      }
      return response.json();
    })
    .then((data) => {
      
      mostrarFatoAleatorio(data);
    })
    .catch((err) => console.log(err));
});

function mostrarFatoAleatorio(fato) {
  const paragrafoFato = document.getElementById('paragrafofato');
  paragrafoFato.innerHTML = fato.text;
}



