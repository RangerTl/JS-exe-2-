  var idade = window.prompt("digite as idades : ");
  idade = idade.split(",");

  var maior = 0;
  var menor = 0;

  for (i = 0 ;i <idade.length ;i++ ) {

if (parseInt(idade[i]) >= 18 ){
    maior++;
}

else {
    menor++;

}
  }

 alert("Maiores :"+maior+"-menores : "+menor); 