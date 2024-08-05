const prompt = require('prompt-sync')()
function removerResidencia(residencias,menu) {
    idRemover = +prompt("\ndigite o id da residencia que deseja remover ");
    residencias.splice(idRemover - 1, 1);
    menu();
  }
module.exports = {removerResidencia} 
