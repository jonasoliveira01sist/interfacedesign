function calculaSalario(){
    var nome = document.getElementById("nome").value;
    var valor = (parseFloat)(document.getElementById("valor").value);
    var novosal = document.getElementById("resultado");
    novosal.value = "o novo salario de " + nome + " é = "
     + (valor * 1.1).toFixed(2); 

}