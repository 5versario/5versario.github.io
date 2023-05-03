let vector = [
    ["filologia", "Una ciencia"],
    ["impresora", "Una cosa que Antonio arregla"],
    ["vacaciones", "Lo que todos ansiamos"]
];
let contador = 3;
let palabra;
let oculta = [];
let intentos;
let buttons = [];
let track;

function generaPalabra() {
    let random = vector[Math.floor(Math.random() * vector.length)];
    const index = vector.indexOf(random);

    // Elimina el valor random del vector usando splice
    if (index > -1) {
        vector.splice(index, 1);
    }

    track = random[1];
    return random[0].toLocaleUpperCase();
}

function pintarGuiones(n) {
    oculta = [];
    for (let i = 0; i < n; i++) {
        oculta[i] = '_';
    }
    document.getElementById('palabra').textContent = oculta.join('');
}

function generaABC() {
    let abcdario = document.getElementById('abcdario');
    while (abcdario.firstChild) {
        abcdario.removeChild(abcdario.firstChild);
    }
    let cont = 0;
    for (let i = 65; i < 26 + 65; i++) {
        let btn = document.createElement('button');
        btn.textContent = String.fromCharCode(i);
        btn.id = String.fromCharCode(i);
        btn.setAttribute("onclick", "intento('" + String.fromCharCode(i) + "')");
        btn.setAttribute('class', 'letra');
        abcdario.appendChild(btn);
        buttons[cont] = btn;
        cont++;
    }
}

function intento(letra) {
    let i = 0;
    let acierto = false;
    for (let i = 0; i < palabra.length; i++) {
        let actual = palabra.charAt(i);
        if (actual === letra) {
            acierto = true;
            oculta[i] = letra;
        }
    }
    document.getElementById('palabra').textContent = oculta.join('');
    if (acierto) {
        document.getElementById('msg').textContent = 'ACIERTO!';
        document.getElementById('msg').setAttribute('class', 'msg acierto');
    } else {
        intentos--;
        document.getElementById('intentos').textContent = intentos;
        document.getElementById('msg').textContent = 'FALLO';
        document.getElementById('msg').setAttribute('class', 'msg fallo');
        document.getElementById('image' + intentos).setAttribute('class', 'fade-in');
    }
    document.getElementById(letra).disabled = true;
    compruebaFin(palabra);
}

function pista() {
    document.getElementById('hueco-pista').textContent = track;
}

function compruebaFin(palabra) {
    if (intentos == 0) {
        document.getElementById('msg-final').textContent = 'Game Over, la palabra era: ' + palabra;
        document.getElementById('msg-final').setAttribute('class', 'zoom-in');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        document.getElementById('reset').textContent = 'Siguiente palabra';
        document.getElementById('reset').setAttribute('onclick', 'inicio()');
        document.getElementById('reset').style.display = "inline";
        if (vector.length <= 0) {
            document.getElementById('continuar').style.display = "inline";
        }
    }
    let i = 0;
    let enc = false;
    while (i < oculta.length && !enc) {
        if (oculta[i] === "_") {
            enc = true;
        } else {
            i++;
        }
    }
    if (!enc) {
        document.getElementById('msg-final').textContent = 'FELICIDADES!!!';
        document.getElementById('msg-final').setAttribute('class', 'zoom-in');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        document.getElementById('reset').textContent = 'Siguiente palabra';
        document.getElementById('reset').setAttribute('onclick', 'inicio()');
        document.getElementById('reset').style.display = "inline";
        if (vector.length <= 0) {
            document.getElementById('continuar').style.display = "inline";
        }
    }
}

function inicio() {
    palabra = generaPalabra();
    pintarGuiones(palabra.length);
    generaABC();
    intentos = 6;
}