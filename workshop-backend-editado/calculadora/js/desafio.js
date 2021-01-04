console.log("CalcProj")

    function CalcularProjeto() {
    var inputvalorhora = document.querySelector("#valor-hora")
    var inputhorasprojeto = document.querySelector("#horas-projeto")

    var valorhora = inputvalorhora.valueAsNumber  
    var horasprojeto = inputhorasprojeto.valueAsNumber


    console.log(valorhora)
    console.log(horasprojeto)

    var valorprojeto = valorhora * horasprojeto
    var valorprojetoFormatado = valorprojeto.toFixed(2)

    var spanResposta = document.querySelector("#resposta")
    spanResposta.textContent = valorprojetoFormatado

    spanResposta.textContent = "R$" + valorprojetoFormatado
}