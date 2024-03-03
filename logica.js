alert('ola mundo')

function tocaSom(teclaSelecionada) {
    const elemento = document.querySelector(teclaSelecionada)

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    }else {
        console.log('Esse elemento não existe ou não e do type correspondente')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        tocaSom(idAudio)
        if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

    //console.log(contador);
}