const prompt = require("prompt-sync")();
function atualizarResidencias(residencias, menu) {
  pergunta = +(prompt("digite o id da residencia q deseja atualizar"));
  let bairroAtualizar = prompt("digite o bairro da residencia");
  let ruaAtualizar = prompt("digite a rua da residencia");
  let numeroAtualizar = prompt("digite o numero da residencia");

  residencias[pergunta - 1].bairro = bairroAtualizar;
  residencias[pergunta - 1].rua = ruaAtualizar
  residencias[pergunta - 1].numero = numeroAtualizar
  
  menu()
}
module.exports = { atualizarResidencias };
