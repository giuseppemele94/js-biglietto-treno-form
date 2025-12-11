// Parte di preparazione 


//selezioniamo tutti i campi(select/input ) 
const nameField = document.getElementById("name-field");
const ageField = document.getElementById("age-field");
const distanceField = document.getElementById("km-field");
const output = document.getElementById("output");
const btnAnnulla = document.getElementById("button-delete"); 

//seleziono il form di riferimento 
const form = document.querySelector('form');

// seleziono la card
const previewCard = document.querySelector(".card");

// seleziono tutti gli elementi di pagina relativi ai campi
const userName = document.getElementById("name"); 
const ageUser = document.getElementById("offerta"); 
const priceUser = document.getElementById("costo"); 

// gestione visibilità iniziale della card
previewCard.classList.add("d-none");

//gestione dell'invio del form 
form.addEventListener("submit", (e) => {

    //blocco il comportamento di base del form 
    e.preventDefault();

     const prezzo = calcolaPrezzo( distanceField.value , ageField.value); 
     const stringDiscount = getStringDiscount(ageField.value); 
    
    //Parte di Output in tabella 
    userName.innerText = nameField.value; 
    ageUser.innerText = stringDiscount ; 
    priceUser.innerText = prezzo.toFixed(2) + " €" ; 

     // gestione visibilità della card all'invio
    previewCard.classList.remove("d-none");
    form.reset(); 

});


// tasto annulla per ripulire i campi 
btnAnnulla.addEventListener("click", () => {
    previewCard.classList.add("d-none");
    form.reset(); 
})


// funzione per il calcolo del prezzo 
function calcolaPrezzo(km, age) {

    const pricePerKm = 0.21;
    let basicPrice = km * pricePerKm;
    let finalPrice;
    

    if (age === 'minorenne') {
        finalPrice = basicPrice * 0.80;
    } else if (age === 'over65') {
        finalPrice = basicPrice * 0.60;
    }
    else {
        finalPrice = basicPrice;
    }
    return finalPrice ; 
}

function getStringDiscount (str) {
 
    if(str === "minorenne" || str === "over65" ) {
        return  "Biglietto scontato";
    } else 
        return "Biglietto standard ";
    }
