function calcular() {
    var Valor1 = document.getElementById('valor1').value
    var Valor2 = document.getElementById('valor2').value
    var operacion = document.getElementById('operacion').value

    if (operacion == "sumar") {
        var resultado = Number(Valor1) + Number(Valor2)
    } else if (operacion == "restar") {
        var resultado = Number(Valor1) - Number(Valor2)
    } else if (operacion == "multiplicar") {
        var resultado = Number(Valor1) * Number(Valor2)
    } else {
        var resultado = Number(Valor1) / Number(Valor2)
    }

    var parrafo = document.getElementById('resultado')
    parrafo.innerHTML = "El resultado es:" + resultado

}