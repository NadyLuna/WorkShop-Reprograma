console.log("oieee")
// var, const ou let

function calcularValorHora() {
  var inputSalario = document.querySelector("#ganho-mes")
  var inputHoras = document.querySelector("#horas-dia")

  // se quiser converter string em numero, tem o metodo parseInt()
  var valorSalario = inputSalario.valueAsNumber
  var valorHoras = inputHoras.valueAsNumber * 22

  console.log(valorSalario)
  console.log(valorHoras)
  //console.log(valorSalario.toString())

  // var soma = valorSalario + valorHoras
  // console.log(soma)

  var valorPorHora = valorSalario / valorHoras
  var valorPorHoraFormatado = valorPorHora.toFixed(2) // 2 casas decimais

  // pegando somente o numero inteiro, cortando os digitos
  // var valorPorHoraFormatado = parseInt(valorPorHora)

  var spanResposta = document.querySelector("#resposta") // resposta é o id do elemento
  spanResposta.textContent = "R$" + valorPorHoraFormatado // o + vai concatenar as strings

}

// function querySelector(parametro) {
//   // busca o elemento
// }


function teste() {
  console.log("oi")
}
