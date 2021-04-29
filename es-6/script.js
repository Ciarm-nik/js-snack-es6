// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b)

var array = [10, 5, 6, 11, 20];
​
var arrr =  [true, false, true, false, true];
​
function isNumeroPari(elemento) {
	return elemento % 2 == 0;
}
​
​
function isNumeroDispari(elemento) {
	return elemento % 2 != 0;
}
​
​
​
function filtraPari(array) {
	return array.filter(isNumeroDispari);
}
​

function filtraPariMap(array) {
	return array.map(function(value, index) {
		return value % 2 == 0;
	});
}
​
console.log(filtraPariMap(array));
​
function raddoppio(array) {
	return array.map(element => element * 2);
}
​
function raddoppioFor(array) {
	const result = [];
	for (var i = 0; array.length; i++) {
		result.push(array[i] * 2);
	}
	return result;
}
​
function sublist(array, startIndex, endIndex) {
	return array.filter((element, index) => index >= startIndex && index <= endIndex);
}
​
​
function sublistForeach(array, startIndex, endIndex) {
	const result = [];
​
	array.forEach((a, index) => {
		if (index >= startIndex && index <= endIndex) {
			result.push(a);
		}
	});
	return result;
}
​
var array = [10, 5, 6, 11, 20];
​
var nuovoArray = sublist(array, 1, 3);
console.log(nuovoArray);
​
var nuovoArray2 = sublistForeach(array, 1, 3);
​// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo i nuovi metodi degli array foreach o filter.
​
console.log(nuovoArray);
console.log(nuovoArray2);
​
console.log(raddoppio(nuovoArray2));


