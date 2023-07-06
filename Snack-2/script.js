const n = prompt("inserisci quanti numeri vuoi generare");
console.log(`genero ${n} numeri interi e sommo quelli in posizione dispari`);
const numberList = [];
let sum = 0;

console.log("i numeri dispari sono");
for (let i = 0; i < n; i++) {

    const random = Math.floor(Math.random() * 10) + 1;

    numberList.push(random);

    if (i % 2 !== 0) {
        console.log(random);
        sum = sum + random;
    }
}
console.log("l'intero array è")
console.log(numberList)
console.log(`il risultato della somma dei numeri dispari è: ${sum}`);