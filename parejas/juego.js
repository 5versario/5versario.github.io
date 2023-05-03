let vectorElementos = [{ 'name': 'cascos', 'img': 'img/cascos.webp' },
    { 'name': 'chorizo', 'img': 'img/chorizo.png' },
    { 'name': 'cruzcampo', 'img': 'img/cruzcampo.png' },
    { 'name': 'feria', 'img': 'img/feria.png' },
    { 'name': 'manzanilla', 'img': 'img/manzanilla.png' },
    { 'name': 'piedra', 'img': 'img/piedra.png' },
    { 'name': 'queso', 'img': 'img/queso.png' },
    { 'name': 'quesomos', 'img': 'img/quesomos.jpeg' },
    { 'name': 'us', 'img': 'img/us.png' }
];

let tableroJuego = vectorElementos.concat(vectorElementos);
let elemento1;
let elemento2;
let elementosSeleccionados;
let contador = 0;
let cont_aciertos = 0;

let i = 0;
while (i < vectorElementos.length) {
    let random = Math.round(Math.random() * vectorElementos.length - 1);
    random += vectorElementos.length;
    let aux = tableroJuego[random];
    tableroJuego[random] = tableroJuego[i];
    tableroJuego[i] = aux;
    i++;
}

let seccion = document.createElement('section');
seccion.setAttribute('class', 'grid');
document.getElementById('juego').appendChild(seccion);
for (let i = 0; i < tableroJuego.length; i++) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('name', tableroJuego[i].name);
    seccion.appendChild(card);

    let front = document.createElement('div');
    front.setAttribute('class', 'front');
    //front.setAttribute('onclick','procesarClick(this)');
    front.addEventListener('click', procesarClick);
    card.appendChild(front);

    let back = document.createElement('div');
    back.setAttribute('class', 'back');
    back.setAttribute('style', 'background-image: url("' + tableroJuego[i].img + '");');
    card.appendChild(back);
}

function procesarClick() {
    let hijo = this;
    let padre = hijo.parentNode;
    let i = 0;

    if (padre.className === "selected" || padre.className === "match") {
        return;
    }

    if (contador === 0) {
        padre.setAttribute('class', 'card selected');
        elemento1 = hijo;
        contador++;
    } else if (contador === 1) {
        padre.setAttribute('class', 'card selected');
        elemento2 = hijo;
        contador++;
    }
    if (contador === 2) {
        if (elemento1.parentNode.getAttribute('name') === elemento2.parentNode.getAttribute('name')) {
            document.getElementById('mensajeAcierto').style.display = 'block';
            cont_aciertos++;
            setTimeout(match, 1000);
            if (cont_aciertos >= 9) {
                document.getElementById('continuar').style.display = "inline";
            }
        } else {
            document.getElementById('mensajeError').style.display = 'block';
            setTimeout(resetGuesses, 1000);
        }
    }
}

function match() {
    let items = document.getElementsByClassName('selected');
    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('class', 'card selected match');
    }
    document.getElementById('mensajeAcierto').style.display = 'none';
    let tam = items.length;
    for (let i = 0; i < tam; i++) {
        items[0].classList.remove('selected');
    }
    contador = 0;
    elemento1 = null;
    elemento2 = null;
}

function resetGuesses() {
    let items = document.getElementsByClassName('selected');
    let tam = items.length;
    for (let i = 0; i < tam; i++) {
        items[0].classList.remove('selected');
    }
    document.getElementById('mensajeError').style.display = 'none';
    contador = 0;
    elemento1 = null;
    elemento2 = null;
}