let button = document.querySelector('#btnIncrip');
let button2 = document.querySelector('#btnDesc');
let res = document.querySelector('#res');

// Función para cifrar un mensaje utilizando la cifra Escítala
function cifrarEscitala() {
    let mensaje = document.querySelector('#msg').value;
    let filas = parseInt(document.querySelector('#numLad').value);
    let diametro = parseInt(document.querySelector('#numPos').value);
    
    const matriz = new Array(filas);

    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(diametro);
    }

    let k = 0;

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < diametro; j++) {
            if (k < mensaje.length) {
                matriz[i][j] = mensaje[k];
                k++;
            } else {
                matriz[i][j] = ' ';
            }
        }
    }

    let mensajeCifrado = '';

    for (let j = 0; j < diametro; j++) {
        for (let i = 0; i < filas; i++) {
            mensajeCifrado += matriz[i][j];
        }
    }

    console.log(mensajeCifrado);
    res.value = mensajeCifrado;
}

// Función para descifrar un mensaje cifrado con Escítala
function descifrarEscitala() {
    let mensajeCifrado = res.value;
    let filas = parseInt(document.querySelector('#numLad').value);
    let diametro = parseInt(document.querySelector('#numPos').value);

    const matriz = new Array(filas);

    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(diametro);
    }

    let k = 0;

    for (let j = 0; j < diametro; j++) {
        for (let i = 0; i < filas; i++) {
            matriz[i][j] = mensajeCifrado[k];
            k++;
        }
    }

    let mensajeDescifrado = '';

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < diametro; j++) {
            mensajeDescifrado += matriz[i][j];
        }
    }
    console.log(mensajeDescifrado);
    res.value = mensajeDescifrado;
}

button.addEventListener('click', cifrarEscitala);
button2.addEventListener('click', descifrarEscitala);
