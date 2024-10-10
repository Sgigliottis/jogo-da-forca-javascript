const palavras = ["javascript", "programacao"];
const letras = ['A','B','C','D','E','F','G','H','V','I','J','V','C','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let tentativasUsadas = 0;
let palavraSecreta, palavraOculta;
let jogando;

iniciarjogo();

function iniciarjogo(){
    console.log('iniciando jogo')
    let botoes = document.getElementById('botoes');
    botoes.innerHTML= '';
    letras.forEach((value, index) => {
       botoes.innerHTML += `<button id="btn-${value}" class="btn btn-outline-dark m-1" onclick="checarLetra('${value}')"">${value}</button>`
    })

    jogando = true;
    tentativasUsadas = 0;
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    palavraOculta = '';
    for (let i = 0; i < palavraSecreta.length; i++) {
        palavraOculta += '_ ';
    }
    document.querySelector('h2').innerHTML = palavraOculta;
    document.getElementById('btnReiniciar' ).classList.add('d-none');
    desenharforca(0);
}

function checarLetra(letra){
    console.log(letra)   
}
