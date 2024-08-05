const prompt = require('prompt-sync')()
function adicionarResidencia(residencias,menu) {
    let idResidencia = residencias.length + 1;
    let bairroResidencia = prompt("Insira o bairro da residencia: ");
    let ruaResidencia = prompt("insira a rua da residencia  : ");
    let numeroResidencia = prompt("insira o numero da residencia:");
    residencias.push({
      id: idResidencia,
      bairro: bairroResidencia,
      rua: ruaResidencia,
      numero: numeroResidencia,
    });
    console.log("\nresidencia adicionados com sucesso");
    menu();
  }

  module.exports = {adicionarResidencia}
