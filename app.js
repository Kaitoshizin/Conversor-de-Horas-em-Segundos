function tela(tag,mensagem){
    campo = document.querySelector(tag)
    campo.innerHTML = mensagem;
}

tela('h1','Conversor de Horas em segundos');

function verificarSegundos(){
    var hora = parseFloat(document.querySelector('input').value);
    if (isNaN(hora)){
        alert('Escreva algo! (Algo válido)');
    } else {
    const segundos = hora*60*60;
    const conversão = `${hora} hora(s) é igual a ${segundos} segundos!`;
    tela('h1', conversão);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

function limparCampo(){
    hora = document.querySelector('input');
    hora.value = '';
    tela('h1','Conversor de Horas em segundos');
}