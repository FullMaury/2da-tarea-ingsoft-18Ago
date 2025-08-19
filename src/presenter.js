import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

const btnMultiply = document.querySelector("#btnMultiply");
btnMultiply?.addEventListener("click", () => {
  const a = Number(first.value);
  const b = Number(second.value);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    div.textContent = "Ingresa números válidos";
    return;
  }

  div.textContent = `Resultado: ${a * b}`;
});
