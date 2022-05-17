function verSeEhMaior() {
const primeiroNumero = prompt('Digite um numero');
const segundoNumero = prompt('Digite outro numero');

if(primeiroNumero > segundoNumero)
{
    alert('O Primeiro é maior');
}
else
{
    alert('O segundo numero é maior')
}


}

function verSeEhParOuImpar()
{
    const numero = document.getElementById('numero');
    if(numero.value % 2 == 0)
    {
        alert('O numero é par');
        alert('sete é impar')
    }
    else
    {
        alert('O numero é impar');
        alert('sete é impar');
    }

}

function maiusculaEMinuscula()
{
    let digitado = prompt('digite qqr coisa');
    const para = document.createElement("h1");
    let boi = digitado.toUpperCase(); 
    para.innerText = "" + boi ;
    document.body.appendChild(para);


    let para2 = document.createElement("h1");
    const boi2 = digitado.toLowerCase(); 
    para2.innerText = "" + boi2 ;
    document.body.appendChild(para2);
}


function funcaoPrincipal()
{
   let resultado = leia();
    alert(resultado);

}

function leia()
{
    const numeroUm = prompt('escreva o 1º numero');
    const numeroDois = prompt('escreva o 2º numero');
    const escrevaOperacao = prompt('escreva o simbolo da operação [+ - / *]');
    let resultado = calculo(numeroUm, numeroDois, escrevaOperacao)
    return resultado;
    
}

function calculo(n1, n2, operacao)
{
    if (operacao == '+')
    {
        resultado = parseInt(n1) + parseInt(n2);
        return resultado;
    }
    if (operacao == '-')
    {
        resultado = parseInt(n1) - parseInt(n2);
        return resultado;
    }
    if (operacao == '*')
    {
        resultado = parseFloat(n1) * parseFloat(n2);
        return resultado;
    }
    if (operacao == '/')
    {
        resultado = parseFloat(n1) / parseFloat(n2);
        return resultado;
    }
    

}

function mensagem()
{
    const ola = document.getElementById("primeiraId");
    primeiraId.value = 'ola mundo';
    
}

function juntarNomes()
{   
    document.getElementById("nomeCompleto")
    const nome = document.getElementById("nome");
    let nomeval = nome.value;
    const sobrenome = document.getElementById("sobrenome");
    let sobrenomeval = sobrenome.value;
    nomeCompleto.value = nomeval + '_' + sobrenomeval;
}
   
function atribuir()
{
    
}