function media() {
    var nota1 = document.querySelector('.nota1').value;
    var nota2 = document.querySelector('.nota2').value;
    var nota3 = document.querySelector('.nota3').value;
    var nome = document.querySelector('.nome').value;
  
    var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
  
    if (media >= 8) {
      document.querySelector('.media').innerHTML =
        'Parabéns ' + nome + '  aprovado por media : ' + media;
    } else {
      document.querySelector('.media').innerHTML =
        'Recuperação, ' + nome +
        ' você esta na prova final sua media é: ' +
        media.toFixed(2);
    }
  }