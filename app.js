var nome = prompt (" Olá! qual seu nome?");
var numeroSecreto = parseInt(Math.random() * 101 +1);
var tentativa = 10;

while (chute != numeroSecreto){
  var chute = prompt ("Digite um número de 1 a 100 e veremos se é bom no chute, você tem ainda " + tentativa + " tentativas!")
  tentativa = tentativa - 1
  //se o chute for igual ao número secreto
  if (chute == numeroSecreto){
    alert("Uhull Você acertou !!, com " + tentativa + " tentativas sobrando, Parabéns " + nome)}
   else if(chute > numeroSecreto){ 
    alert("errou o número secreto é menor")}
  else if(chute < numeroSecreto){
    alert("errou o número secreto é maior")}
 if(tentativa <=0) 
 { alert("Ixi Errou tudo! suas tentativas acabaram " + nome)
 break
 }
   }


