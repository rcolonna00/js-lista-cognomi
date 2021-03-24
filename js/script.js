// scrivo tutti i dati iniziali a mia disposizione
var arrayCognomi = [
    'Bianchi',
    'Neri',
    'Rossi',
    'Verdi',
    'Gialli'
]
//console.log(arrayCognomi);

// chiedo il nume utente e lo ripeto finche sia diverso da 0
var nomeUtente = prompt( 'Dimmi il tuo nome' );
console.log(nomeUtente);

while ( nomeUtente.length == 0 ) {
    console.log(nomeUtente);
    nomeUtente = prompt("Non lasciarlo vuoto, dimmi il tuo nome");
}

arrayCognomi.push( nomeUtente );
console.log(arrayCognomi);

// metto in ordine alfabetico l'arrey iniziale con il nome utente
arrayCognomi.sort();
console.log(arrayCognomi);

