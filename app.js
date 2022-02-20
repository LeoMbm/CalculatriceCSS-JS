const touch = [...document.querySelectorAll(".bouton")];
const listeKey = touch.map((touche) => touche.dataset.key);
const screen = document.querySelector(".screen");

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString;
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  operation(valeur);
});

// Calcul

const operation = (valeur) => {
  if (listeKey.includes(valeur)) {
    switch (valeur) {
      case "8":
        screen.textContent = "";
        break;
      case "13":
        const calcul = eval(screen.textContent);
        screen.textContent = calcul.toString();
        break;
        default:
            const indexKeycode = listeKey.indexOf(valeur);
            const touche = touch [indexKeycode];
            screen.textContent += touche.innerHTML;
    }
  }
}

window.addEventListener('error', (e) => {
    alert("Il y a une erreur de synthaxe dans ton calcul !")
})
