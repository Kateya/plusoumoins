var nbMystere = Math.floor(Math.random()*100);
var nbProposition;
var nbTour = 0;
var nbTourReste = 10;

function deviner(tours) {
    while ((nbProposition ==! nbMystere) || (nbTour < 11)) {
        var nbProposition = prompt('Devinez le nombre compris en 0 et 100 !'+' Tours restants : ' + nbTourReste);
        if (nbProposition > nbMystere) {
            alert("C'est moins !")
            nbTour++;
            nbTourReste --;
        }
        else if (nbProposition < nbMystere){
            alert("C'est plus !")
            nbTour++;
            nbTourReste --;
        }
        else {
            alert("Gagné ! Le nombre mystère est "+nbMystere);
        }
        
    }      
}