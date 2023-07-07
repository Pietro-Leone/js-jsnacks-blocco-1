// Creo lista nomi e cognomi
const nameList = ["Andrea", "Gabriele", "Giulia", "Lorenzo", "Matteo", "Michele", "Pasquale", "Pietro", "Riccardo", "Salvatore", "Simone", "Stefano", "Valerio"];
const surnameList = ["Linza", "Pazi", "Corrado", "Porrega", "Artizzu", "Gresta", "Isabelli", "Fiori", "Carluccio", "Bono", "Filograna", "Priolo", "Collura"];
const used = [];
let currentSurname;

for (let i = 0; i < nameList.length; i++) {

    // Creo due numeri random
    const randomNum1 = Math.floor(Math.random() * nameList.length) + 0;
    const randomNum2 = Math.floor(Math.random() * surnameList.length) + 0;
    currentSurname = surnameList[randomNum2];

    if ((used.indexOf(currentSurname)) < 0) {

        used.push(currentSurname);

        // Stampo la lista degli invitati
        console.log(`${nameList[randomNum1]} ${currentSurname}`);
    }
    else{
        i--;
    }

}