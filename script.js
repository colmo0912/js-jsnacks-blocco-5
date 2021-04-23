// esercizio 1

var varietaZucchine = [

    zucchina1 = {

        varieta: "varieta1",
        peso: 200,
        lunghezza : 10
    },

    zucchina2 = {

        varieta: "varieta2",
        peso: 200,
        lunghezza: 19
    },

    zucchina3 = {

        varieta: "varieta3",
        peso: 200,
        lunghezza: 12 
    },

    zucchina4 = {

        varieta: "varieta4",
        peso: 300,
        lunghezza: 18 
    },

    zucchina5 = {

        varieta: "varieta5",
        peso: 200,
        lunghezza: 21 
    },

    zucchina6 = {

        varieta: "varieta6",
        peso : 200,
        lunghezza : 19 
    },

    zucchina7 = {

        varieta: "varieta7",
        peso : 200,
        lunghezza : 9
    },

    zucchina8 = {

        varieta: "varieta8",
        peso: 200,
        lunghezza: 15 
    },

    zucchina9 = {

        varieta: "varieta9",
        peso: 200,
        lunghezza: 9 
    },

    zucchina10 = {

        varieta: "varieta10",
        peso: 400,
        lunghezza: 14 
    }

]



var pesoTotaleZucchine=0;

for (var i=0; i<varietaZucchine.length; i++){

    var pesoSingolaZucchina = varietaZucchine[i].peso;
        console.log(pesoSingolaZucchina);
        pesoTotaleZucchine+=pesoSingolaZucchina;
    
}
    console.log("Il peso totale delle zucchine in kg è " + pesoTotaleZucchine)



    //esercizio 2

    //creo due array uno per le zucchine grandi e uno per le zucchine piccole


    var zucchineGrandi = [];
    var zucchinePiccole = [];

    for(var i=0; i<varietaZucchine.length; i++){

        var lunghezzaSingolaZucchina = varietaZucchine[i].lunghezza;
        if(lunghezzaSingolaZucchina>15){

            zucchineGrandi.push(varietaZucchine[i])
        }else {

            zucchinePiccole.push(varietaZucchine[i])
        }
    }

    console.log(zucchineGrandi)
    console.log(zucchinePiccole)

    var pesoZucchineGrandi = 0;
    for (var i = 0; i<zucchineGrandi.length; i++){

        var pesoZucchineGrandiSingolo = console.log(zucchineGrandi[i].peso);

        pesoZucchineGrandi +=pesoZucchineGrandiSingolo;
    }

    var pesoZucchinePiccole = 0;

    for (var i = 0; i<zucchinePiccole.length; i++){

        var pesoZucchinePiccoleSingolo = console.log(zucchinePiccole[i].peso);

        pesoZucchinePiccole +=pesoZucchinePiccoleSingolo;
    }

    console.log("le zucchine grandi sono " + zucchineGrandi + " ed il loro peso totale in kg è " + pesoZucchineGrandi)
    console.log("le zucchine grandi sono " + zucchinePiccole + " ed il loro peso totale in kg è " + pesoZucchinePiccole)




















