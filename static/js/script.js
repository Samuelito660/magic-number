function generateRandomInteger(min = 0 , max=100){
       
    let numero = Math.random()
    numero = numero*(max - min + 1) + min
    let intero = Math.floor(numero)

    return intero
}

function Sanitize(numero) {
    let sanitizeN = parseInt(numero.trim());

    if (isNaN(sanitizeN)){
        console.log("Valore non accettabile")
    }

    return sanitizeN
}


        
function numerimagici(event){

    let avvisi = document.querySelector("#guess").value

    num = Sanitize(avvisi) ;

    if (num <= 0 || num > 100 || isNaN(num)) {
        text2.innerHTML = 'Inserire un numero valido tra 1 e 100'
        text3.innerHTML = 'Non hai inserito alcun numero'

    }else if(num > NumDaInd){

    ntentativi = ntentativi - 1 ;
    text2.innerHTML = "Il numero <strong>" + num + "</strong> è più grande di quello dato!!";
    text3.innerHTML = "Hai a disposizione ancora <strong>" + ntentativi + "</strong> tentativi";
    vericita=false
    
    }else if(num < NumDaInd){

    vericita=false ;
    ntentativi = ntentativi - 1 ;
    text2.innerHTML = "Il numero <strong>" + num + "</strong> è più piccolo di quello dato!!";
    text3.innerHTML = "Hai a disposizione ancora <strong>" + ntentativi + "</strong> tentativi"

    }else if(num === NumDaInd){

    console.log("Hai  Indovinato!")
    vericita=true
    text2.innerHTML = 'Hai finalmente indovinato il numero'
    text3.innerHTML = "Hai utilizato <strong>" + (6-ntentativi) + "</strong> tentativi"
    }

    if (ntentativi === 0 && !vericita) {

        text2.innerHTML = 'Hai esaurito i tentativi'
        text3.innerHTML = "Il numero da indovinare era <strong>" + NumDaInd + "</strong>"

    }

}

        
    let ntentativi = 5
    let NumDaInd = generateRandomInteger(min = 0 , max=100)
    let num ;
    let vericita  = false
    let text2 = document.querySelector("#testo2")
    let text3 = document.querySelector("#testo3")

    
    console.log("WEEEEELCOMEE TOOOOO NUMERI MAGICI")

    let btn = document.querySelector("#guessbtn")
    btn.addEventListener("click", numerimagici)
