// Snack 1:
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const bici = [
    {
        numero: 1,
        peso: 53,
        marca: "bianchi"
    }, {
        numero: 2,
        peso: 25,
        marca: "treck"
    }, {
        numero: 3,
        peso: 33,
        marca: "atala"
    }, {
        numero: 4,
        peso: 22,
        marca: "bottecchia"
    }, {
        numero: 5,
        peso: 18,
        marca: "torpado"
    }
]

// Creo un ciclo for per stabilire le bici più piccole (<30)
var biciSmall = [];
var biciLarge = [];


for (var i = 0; i < bici.length; i++) {
    var biciLeggere = bici[i];


    if (biciLeggere.peso < 30) {
        biciSmall.push(biciLeggere);
    } else {
        biciLarge.push(biciLeggere)
    }

}

// Utilizzo destructuring per stampare le bici più piccole

const [, bici2, , bici4, bici5 ] = bici
console.log (bici2, bici4, bici5)


// Stampo il numero delle bici piccole e quelle grandi con template literal
console.log(`${biciSmall.length} Questo è il numero delle bici piccole`);
console.log(`${biciLarge.length} Questo è il numero delle bici grandi`);


















// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.