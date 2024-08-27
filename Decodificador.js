function criptografarTexto() {
    let texto = document.getElementById("digite-texto").value;
    console.log(texto)
    
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Escreva apenas letras minúsculas e sem acentos.");
        return;
    }

    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoCriptografado);
    mostrarBotaoCopiar();
    aumentarTexto();
}

function descriptografarTexto() {
    let texto = document.getElementById("digite-texto").value;

    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Escreva apenas letras minúsculas e sem acentos.");
        return;
    }

    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDescriptografado);
    mostrarBotaoCopiar();
    aumentarTexto();
}

function mostrarResultado(texto) {
    document.getElementById("desenho-lupa").style.display = "none";
    document.getElementById("nenhuma-mensagem").style.display = "none";
    
    let mensagemTextoDireita = document.getElementById("mensagem-texto-direita");
    mensagemTextoDireita.textContent = texto;
}

function mostrarBotaoCopiar() {
    let botaoCopiar = document.querySelector('.div__botao__copiar');
    botaoCopiar.style.display = 'block';
}

function aumentarTexto() {
    let mensagemTextoDireita = document.getElementById("mensagem-texto-direitat");
    mensagemTextoDireita.style.fontSize = "24px";
}

function copiarTexto() {
    const texto = document.getElementById('mensagem-texto-direita').innerText;
 
    const input = document.createElement('input');
    input.value = texto;
    document.body.appendChild(input);
 
    input.select();
    document.execCommand('copy');
   
    document.body.removeChild(input);
 
}
