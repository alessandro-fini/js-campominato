/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati */
var numbers = [];

while (numbers.length < 16){
    var generatedNumbers = randomNumbers(1, 100);
    if (!numbers.includes(generatedNumbers)){
        numbers.push(generatedNumbers);
    }
}
console.log(numbers);

/* In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. */
var inputNumbers = [];
var maxInput = 100 - numbers.length;
var stopCicle = false;

for (var i = 0; i < maxInput && stopCicle == false; i++){
    var userNumbers = parseInt(prompt('Inserisci un numero\ncompreso tra 1 e 100'));    
    /* L’utente non può inserire più volte lo stesso numero. */
    if (!inputNumbers.includes(userNumbers)){
        inputNumbers.push(userNumbers);        
    } else {
        alert('Non puoi iserire più volte\nlo stesso numero!');
        maxInput += 1;
    }
    /* Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. */
    if (numbers.includes(userNumbers)){
        alert('Hai perso!\n' + 'Hai inserito ' + (inputNumbers.length - 1) + ' numeri consentiti');
        stopCicle = true;
    } 
}
console.log(inputNumbers);

/* Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */
if (!numbers.includes(inputNumbers) && inputNumbers.length == maxInput && stopCicle == false){
    alert('Hai vinto!\n' + 'Hai inserito ' + inputNumbers.length + ' numeri consentiti');
}





/* FUNZIONI */
function randomNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}