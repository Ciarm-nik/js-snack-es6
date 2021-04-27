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


// Utilizzo il sort per trovare la bici con il peso minore
bici.sort(function (a, b) {
    return a.peso - b.peso;
  });

  console.log (bici[0])


// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadre = [
    {
        nome: "inter",
        puntiFatti: genNumeriCasuali(1, 100),
        falliSubiti: genNumeriCasuali(1, 100),
    }, {
        nome: "napoli",
        puntiFatti: genNumeriCasuali(1, 100),
        falliSubiti: genNumeriCasuali(1, 100),
    }, {
        nome: "roma",
        puntiFatti: genNumeriCasuali(1, 100),
        falliSubiti: genNumeriCasuali(1, 100),
    }
]


// Uso map per selezionare solo il nome e i falli subiti senza includere i punti fatti
const newTeams = squadre.map((element) => {
    return {
        nome: element.nome,
        falliSubiti: element.falliSubiti
    }
})

console.log(newTeams)


function genNumeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
