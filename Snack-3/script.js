const n1 = parseInt(prompt("inserisci quanti numeri vuoi generare nel Primo array"));
const n2 = parseInt(prompt("inserisci quanti numeri vuoi generare nel Secondo array"));
let greaterNumber = 0;
const array1 = [];
const array2 = [];

// Controllo se sono stati inseriti due numeri uguali
if (n1 === n2 || isNaN(n1) || isNaN(n2)) {
    alert("inserisci 2 numeri diversi");
    location.reload();
}

console.log(`Il primo array è formato da ${n1} elementi`);
console.log(`Il secondo array è formato da ${n2} elementi`);

if (n1 > n2) {
    greaterNumber = n1;
    console.log(`Il primo è più grande quindi incremento il secondo`);
}
else {
    greaterNumber = n2;
    console.log(`Il secondo è più grande quindi incremento il primo`);
}

for (let i = 0; i < greaterNumber; i++) {

    if (array1.length === n1) {
        console.log("Stampo il primo array prima dell'incremento");
        console.log(array1);
    }
    if (array2.length === n2) {
        console.log("Stampo il secondo array prima dell'incremento");
        console.log(array2);
    }

    const random1 = Math.floor(Math.random() * 10) + 1;
    const random2 = Math.floor(Math.random() * 10) + 1;

    array1.push(random1);
    array2.push(random2);
}
console.log("Il risultato del primo array è")
console.log(array1);
console.log("Il risultato del secondo array è")
console.log(array2);