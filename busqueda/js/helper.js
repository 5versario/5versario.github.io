// Genera dónde está el tesoro
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

// Obtiene distancia entre dos puntos
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// Devuelve string en función de las distancias 
let getDistanceHint = distance => {
    if (distance < 30) {
        return "Te quemas!";
    } else if (distance < 40) {
        return "Cerquísima";
    } else if (distance < 60) {
        return "Cerca";
    } else if (distance < 100) {
        return "Puede estar cerca";
    } else if (distance < 180) {
        return "Frío";
    } else if (distance < 360) {
        return "Mucho frío";
    } else {
        return "Te congelas!";
    }
}