function generateRandomInteger(min = 0 , max=100){
       
    let numero = Math.random()
    numero = numero*(max - min + 1) + min
    let intero = Math.floor(numero)

    return intero
}

function Sanitize(n) {
    sanitizeN =parseInt(n.trim());

    return sanitizeN
}


        let ntentativi = 5
        let NumDaInd = generateRandomInteger(min = 0 , max=100)
        let vericita  = false
        
        let text2 = document.querySelector(#text2)
        let text3 = document.querySelector(#text3)

        let avvisi = document.querySelector("#guess").value


        numero = Sanitize(n) ;

    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        avvisi.innerHTML = 'Inserire un numero valido tra 1 e 100'
        return
    }

    if(numero > NumDaInd){

    avvisi.innerHTML = 'Il numero da indovinare è più piccolo '
    vericita=false
    ntentativi = ntentativi - 1

    }else if(numero < NumDaInd){

    avvisi.innerHTML = 'Il numero da indovinare è più grande'
    vericita=false
    ntentativi = ntentativi - 1

    }else if(numero = NumDaInd){

    avvisi.innerHTML = 'Hai indovinato !!! '
    vericita=true

}


    document.querySelector("#guess").value = ""

    if (ntentativi === 0) {

        avvisi.innerHTML = ("Hai perso NABBO hai una L sulla fronte! Il numero da indovinare era: " + NumDaInd)

    }
    })