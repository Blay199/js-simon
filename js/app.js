// array random vuoto
let nRandom = []

// ciclo while finchè arrayRandom < 5  
while (nRandom.length < 5) {
    // generare numeri random 
    let nGen = Math.floor(Math.random(1))
    // se arrayRandom NON include numero random
    if (!nRandom.includes(nGen))
        // pushare in array 
        nRandom.push(nGen)    
}
// alert con numeri random
alert(nRandom)

// timeout 30000 ms 
    // Array utente vuoto
    // ciclo while finchè lunghezza arrayUtente è < 5 
        // PARSEprompt di un numero
        // se è un numero 
            // pusho nel array utente

    // ciclo for 
        // se arrayRandom i è uguale arrayUtente i 
            // alert "il confronto" + (i + 1) + "è corretto"
            // alert `il confronto ${i + 1} è corretto`
        // altrimenti 
            // alert `il confronto i + 1 non è corretto`
