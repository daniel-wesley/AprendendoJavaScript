function primeiraFuncao(){
    alert('ola Daniel');
}

function somaNumeros(){
    var num1 = prompt('Digite o primeiro número');
    var num2 = prompt('Digite o segundo número');
    var resultado = parseInt(num1) + parseInt(num2);
    
    alert(resultado);
}

function saiuDaArea(){
    alert('Você saiu da Área');
}

function voceArrastou(){
    alert('Não arraste o botão');
}

function enviarNomeParaOTitulo(tag){
    var tituloOla = document.getElementById('tituloOla');

    //Ola               = Ola                 + " " + Valor que vier de fora
    tituloOla.innerText = tituloOla.innerText + " " + tag.value;
}