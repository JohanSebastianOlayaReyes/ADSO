console.log("B-I-N-G-O");
let bingo = [];
let tabla;
let resultado1;
let tabla1 = 2;
let contador = 1
let iteracion1;
let iteracion2;

for (tabla = 0; tabla < 5; tabla++) {
    let interno = [];
    {
        for (columnas = 0; columnas < 5; columnas++) {

            resultado1 = tabla1 * contador;
            contador++;
            interno.push(resultado1);

        }
        bingo.push(interno);

    }

}
console.log(bingo);

console.log("LETRA B \n");
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    console.log(bingo[iteracion1][0]);
}
console.log("LETRA I \n");
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    console.log(bingo[iteracion1][1]);
}
console.log("LETRA N \n");
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    console.log(bingo[iteracion1][2]);
}
console.log("LETRA G \n");
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    console.log(bingo[iteracion1][3]);
}
console.log("LETRA O \n");
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    console.log(bingo[iteracion1][4]);
}
console.log("PRIMERA X: ")
for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
    for (iteracion2 = 0; iteracion2 < 3; iteracion2++) {
        if (iteracion1 % 2 == 0 && iteracion2 % 2 == 0) {
            console.log(bingo[iteracion1][iteracion2]);
        }
        else if (iteracion1 % 2 == 1 && iteracion2 % 2 == 1) {
            console.log(bingo[iteracion1][iteracion2]);
        }
        else {
            console.log("");
        }
    }
}
console.log("SEGUNDA  X: ")
for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
    for (iteracion2 = 2; iteracion2 < 5; iteracion2++) {
        if (iteracion1 % 2 == 0 && iteracion2 % 2 == 0) {
            console.log(bingo[iteracion1][iteracion2]);
        }
        else if (iteracion1 % 2 == 1 && iteracion2 % 2 == 1) {
            console.log(bingo[iteracion1][iteracion2]);
        }
        else {
            console.log("");
        }
    }
}
console.log("TERCERA X: ")
for (iteracion1 = 2; iteracion1 < 5; iteracion1++) {
    for (iteracion2 = 1; iteracion2 < 4; iteracion2++) {
        if (iteracion1 % 2 == 0 && iteracion2 % 2 == 1) {
            console.log(bingo[iteracion1][iteracion2]);
        }
        else if (iteracion1 % 2 == 1 && iteracion2 % 2 == 0) {
            console.log(bingo[iteracion1][iteracion2]);
        }
        else {
            console.log("");
        }
    }
}
console.log("ENTERA X: ")
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        if (iteracion1 == iteracion2) {
            console.log(bingo[iteracion1][iteracion2]);

        }
        else if (4 == iteracion1 + iteracion2 ) {
            console.log(bingo[iteracion1][iteracion2]);
        }

        else  {
            console.log("");

        }
    }
}

