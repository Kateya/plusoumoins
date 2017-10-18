var nbMystere = Math.floor(Math.random()*100);
var nbProposition;
var verifNombre = Number.isNaN(nbProposition);
var nbTour = 0;
var nbTourReste = 10;

function deviner(tours) {
    for (var i = 1; i<11; i++) {
        var nbProposition = prompt('Devinez le nombre compris en 0 et 100 !'+' Tours restants : ' + nbTourReste);
        if (verifNombre == false) {
            if (nbProposition > nbMystere) {
                alert("C'est moins !");
                nbTourReste = (10 - i);
            }
            else if (nbProposition < nbMystere){
                alert("C'est plus !");
                nbTourReste = (10 - i);
            }
            else if (nbProposition == nbMystere) {
                alert("Gagné ! Le nombre mystère est "+nbMystere);
                break;
        }
        else {
            alert("C'est mal de tricher !");
            nbTourReste = (10 - i);
            }
        }
        
    }        
}

