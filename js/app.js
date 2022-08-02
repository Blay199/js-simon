// array random vuoto
let nRandom = []

// ciclo while finchè arrayRandom < 5  
while (nRandom.length < 5) {
    // generare numeri random 
    let nGen = Math.floor(Math.random() * 10 + 1)
    // se arrayRandom NON include numero random
    if (!nRandom.includes(nGen))
        // pushare in array 
        nRandom.push(nGen)    
}
// alert con numeri random
alert(nRandom)


// Array utente vuoto
let playerN =  []
// timeout 30000 ms 
setTimeout(() => {    
    // ciclo while finchè lunghezza arrayUtente è < 5
    while (playerN < 5) {
        // PARSEprompt di un numero
        let playerGuess = parseInt(prompt('Ricordi i numeri?'))
        // se è un numero 
        if (!isNaN(playerGuess) ) {
            // pusho nel array utente
            playerN.push(playerGuess)           
        }        
    }

    // ciclo for 
    for (let i = 0; i < playerN.length; i++) {
        // se arrayRandom i è uguale arrayUtente i 
        if (nRandom [i] == playerN [i]){
            // alert "il confronto" + (i + 1) + "è corretto"
            alert(`il confronto ${i + 1} è corretto`)
            // alert `il confronto ${i + 1} è corretto`
         
        }else {// altrimenti
            // alert `il confronto i + 1 non è corretto`
            alert(`il confronto ${i + 1} non è corretto`)

        }        
    }
}, 1000);
