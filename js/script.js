// scrivo tutti i dati iniziali a mia disposizione
var arrayCognomi = [
    'Bianchi',
    'Neri',
    'Rossi',
    'Verdi',
    'Gialli'
]
//console.log(arrayCognomi);

// chiedo il cognome utente e lo ripeto finche sia diverso da 0
var cognomeUtente = prompt( 'Dimmi il tuo cognome' );
console.log(cognomeUtente);

while ( cognomeUtente.length == 0 ) {
    console.log(cognomeUtente);
    cognomeUtente = prompt("Non lasciarlo vuoto, dimmi il tuo nome");
}

arrayCognomi.push( cognomeUtente );
console.log(arrayCognomi);

// metto in ordine alfabetico l'arrey iniziale con il cognome utente
arrayCognomi.sort();
console.log(arrayCognomi);

alert(arrayCognomi );

//stampo cognome con rispettiva posizione
var posizioneCognomeUtente = -1;

for( var i = 0; i < arrayCognomi.length; i++ ) {
    var thisPosizione = arrayCognomi[i];

    if ( thisPosizione == cognomeUtente ){
        posizioneCognomeUtente = i+1 ;
    }
}

alert('Questa è la posizione del tuo cognome ' + posizioneCognomeUtente + '.' + cognomeUtente);
