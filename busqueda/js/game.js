// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';


// treasure coordinates
const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function(e) {
    console.log('click');
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;

    if (distance < 20) {
        alert(`Vayaa!!! Con que aquí estaba, los has encontrado en ${clicks} clicks!`);
        redirigir();
    }
});

function redirigir() {
    // Redirige a otra página dentro del mismo proyecto
    window.location.href = "../busqueda_2/index.html";
}
