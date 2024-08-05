function listarResidencias(residencias,menu) {
    residencias.forEach((residencia) => {
      console.log(
        `\nID: ${residencia.id}, bairro: ${residencia.bairro}, rua: ${residencia.rua}, numero: ${residencia.numero}`
     );
   });
    menu();
  }
  module.exports = {listarResidencias}
