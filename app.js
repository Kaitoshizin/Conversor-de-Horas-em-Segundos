function tela(tag,mensagem){
    campo = document.querySelector(tag)
    campo.innerHTML = mensagem;
}

tela('h1','Conversor de Horas em segundos');

function verificarSegundos(){
    var hora = document.querySelector('input').value
    var horas = parseFloat(hora);
    if (isNaN(horas)){
        alert('Escreva algo! (Algo válido)');
    } else {
    const segundos = horas*60*60;
    const conversão = `${horas} hora(s) é igual a ${segundos} segundos!`;
    tela('h1', conversão);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

function limparCampo(){
    hora = document.querySelector('input');
    hora.value = '';
    tela('h1','Conversor de Horas em segundos');
}