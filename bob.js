const prompt = require("prompt-sync")({ signit: true });
const { adicionarResidencia } = require("./adicionarResidencia.js");
const { listarResidencias } = require("./listarResidencia.js");
const { removerResidencia } = require("./removerResidencia.js");

let residencias = [
  { id: 1, bairro: "Bob", rua: "Bob", numero: "Bob" },
  { id: 2, bairro: "Bob", rua: "Bob", numero: "Bob" },
  { id: 3, bairro: "Bob", rua: "Bob", numero: "Bob" },
];

menu();

function menu() {
  console.log(`
    1 - listar residencias
    2 - adicionar residencia
    3 - remover residencia
    4 - sair
    `);
  let pergunta = +prompt("digite o numero da opçao que deseja realizar ");
  switch (pergunta) {
    case 1:
      listarResidencias(residencias,menu);
      break;
    case 2:
      adicionarResidencia(residencias,menu);
      break;
    case 3:
      removerResidencia(residencias,menu);
      break;
    case 4:
      console.log("saindo");
      break;
    default:
      console.log("algo deu errado");
      break;
  }
}
