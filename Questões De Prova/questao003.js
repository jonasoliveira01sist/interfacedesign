function calcular(){
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var Resultado = document.getElementById("Resultado");


    if(valor1 == valor2) Resultado.value = (valor1 + valor2);
    if(valor1 != valor2) Resultado.value = (valor1 * valor2);
}