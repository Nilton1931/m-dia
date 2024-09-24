function informarAprovacao(nota1, nota2){
    var total = nota1 + nota2
    var media = total / 2
}
if(media >=7 ){
    console.log("Você foi aprovado." + media);
}else{
    console.log("você foi reprovado")
}
informarAprovacao(2,3)