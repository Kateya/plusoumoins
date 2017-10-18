var nbMystere = Math.floor(Math.random(0,101));
var nbProposition;
var nbTour = 0;
var nbTourReste = 10;

function deviner(nbTour) {
    while ((nbProposition ==! nbMystere) || (nbTour < 11)) {
        var nbProposition = prompt('Devinez le nombre compris en 0 et 100 !');
        if (nbProposition > nbMystere) {
        }
    
        nbTour++;
        nbTourReste --;
    }      
}




deviner();