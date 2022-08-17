const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiucula = () => String.fromCharCode(rand(65, 97));
const geraMainucula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolo = ",.!@#$%*()[]~~`^";
const geraSimbolo = () => simbolo[rand(0, simbolo.length)];

export default function geraSenha(qtd, maiucula, mainucula, numero, simbolo) {
  const senhaArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maiucula && senhaArray.push(geraMaiucula());
    mainucula && senhaArray.push(geraMainucula());
    numero && senhaArray.push(geraNumero());
    simbolo && senhaArray.push(geraSimbolo());
  }
  return senhaArray.join("").slice(0, qtd);
}
