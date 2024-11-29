// ====================================================
// =  Déclaration des variables globales              =
// ====================================================
const listeBoutonsChoix = document.querySelectorAll('.bouton_choix'); // Tableau des boutons de choix de réponse
const boutonTriche = document.getElementById('triche');               // Bouton "Triche" pour afficher la bonne réponse


// ====================================================
// =  Déclaration des événements                      =
// ====================================================
listeBoutonsChoix.forEach(bouton => bouton.addEventListener('click', ValiderReponse));
boutonTriche.addEventListener('click', CliquerTriche);


// ====================================================
// =  Déclaration des fonctions                       =
// ====================================================

/**
 * Modifier la couleur du bouton de la bonne réponse quand on clique sur le bouton "Triche"
 */
function CliquerTriche() {
    // On parcourt la liste des boutons de choix de réponse
    listeBoutonsChoix.forEach( bouton => {
        // Si le bouton est la bonne réponse, il contient la classe "bonne_reponse"
        if (bouton.classList.contains('bonne_reponse')) {
            // alors on change la couleur du bouton
            bouton.style.backgroundColor = 'orange';
        }
    })
}

/**
 * Valider la réponse choisie par l'utilisateur
 */
function ValiderReponse(e) {
    // On récupere le bouton cliqué
    const boutonCliquer = e.target;
    // On récupere le bouton qui a la classe "bonne_reponse"
    const boutonBonneReponse = document.querySelector('.bonne_reponse');
    // On récupere les sections de la page
    const sectionChoixReponse = document.getElementById('choix_reponse');
    const sectionValidationReponse = document.getElementById('validation_reponse');
    const titreValidationReponse = document.getElementById('titre_validation_reponse');
    const texteValidationReponse = document.getElementById('texte_validation_reponse');

    // On masque la section des choix de réponse et on affiche la section de validation de réponse
    sectionChoixReponse.classList.add('hidden');
    sectionValidationReponse.classList.remove('hidden');
    // On masque le bouton "Triche"
    boutonTriche.classList.add('hidden');

    // On compare les ids du bouton cliqué et du bouton qui a la classe "bonne_reponse" pour connaître si la réponse est bonne ou pas
    if( boutonCliquer.id === boutonBonneReponse.id) {
        titreValidationReponse.innerText = 'Bonne Réponse';
    } else {
        titreValidationReponse.innerText = "Mauvaise Réponse";
        texteValidationReponse.innerText = 'La bonne réponse était ' + boutonBonneReponse.innerText;
    }

}