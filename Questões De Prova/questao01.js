
        function somarValores(){
        var s1 = document.getElementById("s1").value;
        var s2 = document.getElementById("s2").value;
        var s3 = document.getElementById("s3").value;
        var resultado = document.getElementById("resultado");
        resultado.value = ((parseFloat(s1) + parseFloat(s2) + parseFloat(s3))/3) .toFixed(2);

         }
    