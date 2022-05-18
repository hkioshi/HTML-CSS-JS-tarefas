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