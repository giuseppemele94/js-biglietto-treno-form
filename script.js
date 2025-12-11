// Parte di preparazione 


//selezioniamo tutti i campi(select/input ) 
const nameField = document.getElementById("name-field");
const ageField = document.getElementById("age-field");
const distanceField = document.getElementById("km-field");
const output = document.getElementById("output");
//seleziono il form di riferimento 
const form = document.querySelector('form');


//gestione dell'invio del form 
form.addEventListener("submit", (e) => {

    //blocco il comportamento di base del form 
    e.preventDefault();


    //prova di stampa in console log per vedere se aggancia i valori 
    console.log(nameField.value, ageField.value, distanceField.value);


    //prova di stampa in pagina 
    const nameValue = nameField.value;
    const ageValue = ageField.value;
    const distanceValue = distanceField.value;
    const prezzo = calcolaPrezzo( distanceField.value , ageField.value); 
    output.innerHTML += `${nameValue} ${ageValue} ${distanceValue} "Prezzo : "${prezzo.toFixed(2)}`;

    
});




// funzione per il calcolo del prezzo 
function calcolaPrezzo(km, eta) {

    const pricePerKm = 0.21;
    let basicPrice = km * pricePerKm;
    let finalPrice;
    

    if (eta === 'minorenne') {
        finalPrice = basicPrice * 0.80;
    } else if (eta === 'over65') {
        finalPrice = basicPrice * 0.60;
    }
    else {
        finalPrice = basicPrice;
    }
    return finalPrice ; 
}
