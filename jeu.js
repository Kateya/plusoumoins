var nbMystere = Math.floor(Math.random()*100);
var nbTour = 0;
var nbTourReste = 10;

function deviner(tours) {
    var nbProposition;
    for (var i = 1; i<11; i++) {
        nbProposition = prompt('Devinez le nombre compris en 0 et 100 !'+' Tours restants : ' + nbTourReste);
        var verifNombre = isNaN(nbProposition);
        nbTourReste = (10 - i);
        console.log (verifNombre);
        if (verifNombre == false) {
            if (nbProposition > nbMystere){
                alert("C'est moins !");
            }
            else if (nbProposition < nbMystere){
                alert("C'est plus !");
            }
            else if (nbProposition == nbMystere) {
                alert("Gagné ! Le nombre mystère est "+nbMystere+". Tu as trouvé en "+i+" tour(s).");
                break;
            }
        }
        
        else {
            alert("C'est mal de tricher ! Il faut entrer un nombre.");         
        }
    }        
}

