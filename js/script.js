/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati */
/* var numbers = [];

while (numbers.length < 16){
    var generatedNumbers = randomNumbers(1, 100);
    if (!numbers.includes(generatedNumbers)){
        numbers.push(generatedNumbers);
    }
}
console.log(numbers); */

/* In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. */
/* var inputNumbers = [];
var maxInput = 100 - numbers.length;
var stopCicle = false; */

/* for (var i = 0; i < maxInput && stopCicle == false; i++){
    var userNumbers = parseInt(prompt('Inserisci un numero\ncompreso tra 1 e 100')); */    
    /* L’utente non può inserire più volte lo stesso numero. */
    /* if (!inputNumbers.includes(userNumbers)){
        inputNumbers.push(userNumbers);        
    } else {
        alert('Non puoi iserire più volte\nlo stesso numero!');
        maxInput += 1;
    } */
    /* Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. */
    /* if (numbers.includes(userNumbers)){
        alert('Hai perso!\n' + 'Hai inserito ' + (inputNumbers.length - 1) + ' numeri consentiti');
        stopCicle = true;
    } 
}
console.log(inputNumbers); */ 

/* Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */
/* if (!numbers.includes(inputNumbers) && inputNumbers.length == maxInput && stopCicle == false){
    alert('Hai vinto!\n' + 'Hai inserito ' + inputNumbers.length + ' numeri consentiti');
} */

/* FUNZIONI */
function randomNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/* all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

var levelUp = parseInt(prompt('Scegliere la difficoltà di gioco.\nInserire 0 per il livello facile.\nInserire 1 per il livello medio.\nInserire 2 per il livello difficile.'));

switch (levelUp){
    case 0:
        var numbers = [];

        while (numbers.length < 16){
            var generatedNumbers = randomNumbers(1, 100);
            if (!numbers.includes(generatedNumbers)){
                numbers.push(generatedNumbers);
            }
        } 

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

        if (!numbers.includes(inputNumbers) && inputNumbers.length == maxInput && stopCicle == false){
            alert('Hai vinto!\n' + 'Hai inserito ' + inputNumbers.length + ' numeri consentiti');
        }

        console.log(numbers);
        console.log(inputNumbers);

        break;

    case 1:
        var numbers = [];

        while (numbers.length < 16){
            var generatedNumbers = randomNumbers(1, 80);
            if (!numbers.includes(generatedNumbers)){
                numbers.push(generatedNumbers);
            }
        } 

        var inputNumbers = [];
        var maxInput = 80 - numbers.length;
        var stopCicle = false;

        for (var i = 0; i < maxInput && stopCicle == false; i++){   
            var userNumbers = parseInt(prompt('Inserisci un numero\ncompreso tra 1 e 80'));    
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

        if (!numbers.includes(inputNumbers) && inputNumbers.length == maxInput && stopCicle == false){
            alert('Hai vinto!\n' + 'Hai inserito ' + inputNumbers.length + ' numeri consentiti');
        }

        console.log(numbers);
        console.log(inputNumbers);

        break;

    case 2:
        var numbers = [];

        while (numbers.length < 16){
            var generatedNumbers = randomNumbers(1, 50);
            if (!numbers.includes(generatedNumbers)){
                numbers.push(generatedNumbers);
            }
        } 

        var inputNumbers = [];
        var maxInput = 50 - numbers.length;
        var stopCicle = false;

        for (var i = 0; i < maxInput && stopCicle == false; i++){   
            var userNumbers = parseInt(prompt('Inserisci un numero\ncompreso tra 1 e 50'));    
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

        if (!numbers.includes(inputNumbers) && inputNumbers.length == maxInput && stopCicle == false){
            alert('Hai vinto!\n' + 'Hai inserito ' + inputNumbers.length + ' numeri consentiti');
        }

        console.log(numbers);
        console.log(inputNumbers);

        break;

    default:
        alert('Non hai scelto la difficoltà di gioco.');
}