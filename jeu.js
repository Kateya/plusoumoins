var nbMystere = Math.floor(Math.random()*100);
var nbTour = 0;
var nbTourReste = 10;

var startButton = document.getElementById('startButton');
var submitButton = document.getElementById('submitButton');

var proposition = document.getElementById('proposition');
var regleJeu = document.getElementById('regleJeu');
var indiceJeu = document.getElementById('indicesJeu');

function modifForm() {
    
    startButton.type = "hidden";
    submitButton.type ="button";
    proposition.type = "text";
    regleJeu.innerHTML = "Devinez le nombre mystère entre 0 et 100. Entrez votre nombre. <br> Bonne chance !";
}

function reinit() {
    startButton.type = "button";
    startButton.value ="Rejouer";
    submitButton.type ="hidden";
    proposition.value = "";
    proposition.type ="hidden";
    nbTourReste = 10;
    regleJeu.innerHTML = "Devinez le nombre mystère entre 0 et 100. Entrez votre nombre. <br> Bonne chance !";
}

function deviner() {
    var nbProposition;
    regleJeu.innerHTML = "Devinez le nombre mystère entre 0 et 100. Entrez votre nombre. <br> Bonne chance  ! <br><br> Tours restants : " + nbTourReste;        
    nbProposition = proposition.value;
    var verifNombre = isNaN(nbProposition);
    nbTourReste --;
    if (verifNombre == false) {
        if (nbProposition > nbMystere){
            indiceJeu.innerHTML = "Indice : C'est moins !";
        }
        else if (nbProposition < nbMystere){
            indiceJeu.innerHTML = "Indice : C'est plus !";
        }
        else if (nbProposition == nbMystere) {
            indiceJeu.innerHTML = "Gagné ! Le nombre mystère est "+nbMystere+".";
            reinit();
        }

        else if (nbTourReste < 0) {
            indiceJeu.innerHTML = "Perdu ! La solution était " +nbMystere+".";
            reinit();
        }
    }
    
    else {
        indiceJeu.innerHTML = "C'est mal de tricher ! Il faut entrer un nombre.";         
    }
}