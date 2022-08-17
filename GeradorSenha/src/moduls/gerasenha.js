import geraSenha from "./geradores";
import password from "./geradores";

const senhaGerada = document.querySelector(".password");
const caracteres = document.querySelector(".qtd-caracteres");
const maiusculas = document.querySelector(".chk-maiusculas");
const mainusculas = document.querySelector(".chk-maniusculas");
const simbolo = document.querySelector(".chk-simbolos");
const buttom = document.querySelector(".chk-buttom");

export default () => {
  console.log(ola, mundo);
  password.addEventListener("click", () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    caracteres.value,
    maiusculas.checked,
    mainusculas.checked,
    simbolo.checked
  );
  return senha || "nada seleciondo...";
}
