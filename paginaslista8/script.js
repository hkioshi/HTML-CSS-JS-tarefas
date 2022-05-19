function gerarp()
{
    let texto = document.getElementById('campo');
    let textoVal = campo.value;
    let elemento_p;
    if (elemento_p == undefined) 
    {
        elemento_p = document.createElement('p');
        elemento_p.id = 'id';
        document.body.appendChild(elemento_p);
    }
        elemento_p.textContent = textoVal;

    
}


function gerarh3()
{
    let texto = document.getElementById('gerarTitulo');
    let textoVal = gerarTitulo.value;
    let elemento_p = document.getElementById('id');
    if (elemento_p == undefined) 
    {
        elemento_p = document.createElement('h3');
        elemento_p.id = 'id';
        document.body.appendChild(elemento_p);
    }
        elemento_p.textContent = textoVal;

    
}

function gerarImagem()
{
    const gerarImg = document.createElement("img");
    gerarImg.src = '../imagens/imagem.jpg';
    document.body.appendChild(gerarImg);
}

function gerarPastor()
{
    const pastor = document.createElement("img")
    pastor.src = '../imagens/pastor.jpg';
    document.body.appendChild(pastor);

}

function gerarPug()
{
    const pug = document.createElement("img");
    pug.src = '../imagens/pug.jpg';
    document.body.appendChild(pug);

}

function gerarViraLata()
{
    const amarelinho = document.createElement("img");
    amarelinho.src = '../imagens/caramelo.jpg';
    document.body.appendChild(amarelinho);

}

function gerarNumAleatorio()
{
    let numAleatorio = Math.floor(Math.random() * (100) + 1);
    return numAleatorio
}


function gerarQuadradoAleatorio()
{
    let lesteOeste = gerarNumAleatorio();
    let norteSul = gerarNumAleatorio();
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px"; 
    div.style.borderColor = "black";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "2px";
    document.body.appendChild(div);


}






function gerarTaboada()
{
    const numero = document.getElementById('taboada');
    let numeroVal = taboada.value;
     
    for (i = 0; i <= 10; i++)
    {

    }
    
        
}