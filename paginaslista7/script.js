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
    let mensagem = document.getElementById("primeiroTexto");
    let memoria = document.getElementById("textoAtribuido");
    let mensagemValue = primeiroTexto.value

    textoAtribuido.value = mensagemValue;
    primeiroTexto.value = '';
}

function limpar()
{
    let memoria = document.getElementById("textoAtribuido");
    textoAtribuido.value = '';
}

function incrementar()
{
    let numeroDigitado = document.getElementById("numero");
    let numeroDigitadoVal = numero.value;
    numero.value++;
}

function decrementar()
{
    let numeroDigitado = document.getElementById("numero");
    let numeroDigitadoVal = numero.value;
    numero.value--;
}

function definirTriangulo()
{
    const primeiroLado = document.getElementById("lado1");
    const segundoLado = document.getElementById("lado2");
    const terceiroLado = document.getElementById("lado3");
    const qualTriangulo = document.getElementById("triangulo");

    let primeiroLadoVal = lado1.value;
    let segundoLadoVal = lado2.value;
    let terceiroLadoVal = lado3.value;

    if(primeiroLadoVal == segundoLadoVal && segundoLadoVal == terceiroLadoVal && terceiroLadoVal == primeiroLadoVal)
    {
        triangulo.value = 'equilatero';
    }
    else
    {
        if(primeiroLadoVal == segundoLadoVal && terceiroLadoVal != primeiroLadoVal || segundoLadoVal == terceiroLadoVal && segundoLadoVal != primeiroLadoVal || terceiroLadoVal == primeiroLadoVal && terceiroLadoVal != segundoLadoVal)
        {
            triangulo.value = 'isoceles'
        }
        else
        {
            triangulo.value = 'escaleno'
        }
    }
}


function fazerAdicao()
{
   let primeiroNumero = document.getElementById("numeroUm");
   let primeiroNumeroVal = numeroUm.value;

   let segundoNumero = document.getElementById("numeroDois");
   let segundoNumeroVal = numeroDois.value;

   let total = document.getElementById("resultado");
   
   resultado.value = parseInt(primeiroNumeroVal) + parseInt(segundoNumeroVal);


}

function fazerSubtracao()
{
   let primeiroNumero = document.getElementById("numeroUm");
   let primeiroNumeroVal = numeroUm.value;

   let segundoNumero = document.getElementById("numeroDois");
   let segundoNumeroVal = numeroDois.value;

   let total = document.getElementById("resultado");
   
   resultado.value = primeiroNumeroVal - segundoNumeroVal;


}

function fazerMultiplicacao()
{
   let primeiroNumero = document.getElementById("numeroUm");
   let primeiroNumeroVal = numeroUm.value;

   let segundoNumero = document.getElementById("numeroDois");
   let segundoNumeroVal = numeroDois.value;

   let total = document.getElementById("resultado");
   
   resultado.value = primeiroNumeroVal * segundoNumeroVal;


}

function fazerDivisao()
{
   let primeiroNumero = document.getElementById("numeroUm");
   let primeiroNumeroVal = numeroUm.value;

   let segundoNumero = document.getElementById("numeroDois");
   let segundoNumeroVal = numeroDois.value;

   let total = document.getElementById("resultado");
   
   resultado.value = primeiroNumeroVal / segundoNumeroVal;


}