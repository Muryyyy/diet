alert('Bem vindo a calculadora IMC')


function calcular(){
  var peso = document.querySelector('input#peso');
  var altura = document.querySelector('input#altura');
  var alt = Number(altura.value) / 100;
  var pes = Number(peso.value);
  var res = pes / (alt * alt)
   var resultadoElemento = document.getElementById('resultado');
  resultadoElemento.innerHTML = ` Seu Índice de Massa Corporal (IMC) é ${res}`;

  
var resultadomed = "";

  if (res < 18.5){
 resultadomed =('Abaixo do peso')

}else if (res >= 18.6 && res <= 24.9){
  resultadomed = ('com Peso normal')
}else if (res >= 25 && res <= 29.9){
  resultadomed = ('com Sobrepeso')
}else if (res >= 30 && res <= 34.9){
  resultadomed = ('com Obesidade Grau 1')
}else if (res >= 35 && res <= 39.9){
  resultadomed = ('com Obesidade Grau 2')
}else if(res >= 40){
  resultadomed = ('com Obesidade Grau 3 ou Mórbida')
}

var resultadoParagrafo = document.querySelector('p#resultadomed')
  resultadoParagrafo.innerHTML = `Você está ${resultadomed}`
}







//no var alt = number(altura.value) 100 precisou colocar 100 para dividir o valor por 100 e passar a virgula para frente 2 casas
//no var res = pes / alt * alt é pq a altura precisa ser multiplicada por ela msm
