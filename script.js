var pesiZucchine = [];
var varietàZucchine = [

    zucchina1= {

        varieta: "varieta1",
        peso : 200,
        lunghezza : 15 
    },

    zucchina2= {

        varieta: "varieta2",
        peso : 200,
        lunghezza : 15 
    },

    zucchina3 = {

        varieta: "varieta3",
        peso : 200,
        lunghezza : 15 
    },

    zucchina4 = {

        varieta: "varieta4",
        peso : 300,
        lunghezza : 15 
    },

    zucchina5 = {

        varieta: "varieta5",
        peso : 200,
        lunghezza : 15 
    },

    zucchina6 = {

        varieta: "varieta6",
        peso : 200,
        lunghezza : 15 
    },

    zucchina7 = {

        varieta: "varieta7",
        peso : 200,
        lunghezza : 15 
    },

    zucchina8 = {

        varieta: "varieta8",
        peso : 200,
        lunghezza : 15 
    },

    zucchina9 = {

        varieta: "varieta9",
        peso : 200,
        lunghezza : 15 
    },

    zucchina10 = {

        varieta: "varieta10",
        peso : 400,
        lunghezza : 15 
    }

]


console.log (varietàZucchine)

for (var i=0; i<varietàZucchine.length; i++){

    var numeroZucchine = varietàZucchine[i]
    // console.log(numeroZucchine);
    for (var key in varietàZucchine[i]){
    
        // var pesoZucchinaSingola = console.log(numeroZucchine.peso)
        // pesiZucchine.push(pesoZucchinaSingola)
        var pesoZucchinaSingolo = console.log(varietàZucchine[i].peso)
        console.log(pesiZucchine.push(pesoZucchinaSingolo))
    }

}







// for (var j = 0; j<numeroZucchine.length; j++){

//     var pesoZucchine = numeroZucchine.peso[j]
//     pesoZucchine.push(pesoTotaleZucchine)
    
// }



