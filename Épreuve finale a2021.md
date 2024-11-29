# Épreuve finale Automne 2021

## Directives Générales

Utilisez le répertoire **Depart** comme gabarit pour faire l'examen et répondre de votre mieux aux questions suivantes. Une fois terminé ou si vous êtes bloqué, vous pouvez vous référez à la version fonctionnelle du répertoire **Final**.

Au chargement de la page, une question est affichée de façon aléatoire. Le code qui effectue cette opération est dans le fichier **question.js**. **<u>Vous n'avez pas à comprendre ni à modifier ce code</u>**. Les questions porteront sur la modification du style de la page et l'ajout de fonctionnalité en Javascript. Pour vos ajouts de code, utilisez le fichier **monScript.js**.

## Question #1

Vous devez modifier la balise \<h1> portant le id "titre_question" de la façon suivante : 

- Modifiez la police du titre pour la police Google Font de votre choix : https://fonts.google.com/
- Modifiez la couleur du titre en utilisant une couleur différente pour la partie "Question" et la partie "#1".
- Faites disparaitre la marge du haut.

Exemple du résultat attendu

![final_2021_question1](.\Ressources\final_2021_question1.png)

## Question #2

En utilisant css grid, modifiez la disposition des 4 boutons représentant les choix de réponse de la façon suivante : 

- Ils doivent être disposés sur deux colonnes et deux lignes. 
- Les dimensions de chaque cellule de la grille doivent être de 1fr.
- Ajoutez un espacement de 10px entre les boutons.

Exemple du résultat avant / après

<img src="Ressources\final_2021_question2_avant.png" alt="Avant" style="zoom:50%;" /><img src="Ressources\final_2021_question2_apres.png" alt="Question2_apres" style="zoom:50%;" />

## Question #3

À l'aide d'une requête media query, faites en sorte que lorsque la résolution de l'écran est sous 720 pixels, les boutons de choix de réponse s'alignent un par-dessus l'autre. L'ordre des boutons "empilés" doit être choix1, choix2, choix3 et choix4.

Exemple du résultat attendu

<img src=".\Ressources\final_2021_question3.png" alt="Question3" style="zoom:67%;" />

## Question #4

Ajoutez une animation css de votre choix **<u>lors du survol</u>** d'un des boutons de choix de réponse. Ça peut être une transformation, un changement de couleur, etc. 

Exemple du résultat attendu

<img src="Ressources\final_2021_question4.png" alt="Question4" style="zoom:67%;" />

## Question #5

Faites en sorte que lorsqu'on clique sur un des boutons de choix de réponse, vous validez si c'est la bonne réponse ou non. La bonne réponse est notée de deux façons dans le fichier html : 

- Avec l'attribut **data-bonne-reponse** de la balise section avec le id **choix_reponse**. La valeur de 1 à 4 représente le bon choix.
- Avec la classe **bonne_reponse** ajouté au bouton de choix qui est la bonne réponse.

Que la réponse soit bonne ou non, vous devez effectuer les opérations suivantes : 

- Masquer la section avec le id **choix_reponse**.
- Afficher la section avec le id **validation_reponse**.
- Masquer le bouton **Tricher**.
- Dans la balise h2 avec le id **titre_validation_reponse**, afficher le texte **Bonne Réponse** ou **Mauvaise Réponse** selon la validation.
- Dans la balise h3 avec le id **texte_validation_reponse**, afficher le texte "La bonne réponse était " et le texte de la bonne réponse qui se retrouve "dans" le bouton si la réponse est fausse, sinon n'affichez rien.

Exemple pour une bonne réponse

<img src="Ressources\final_2021_question5_bonne_reponse.png" alt="Question5_bonne_reponse" style="zoom:67%;" />

Exemple pour une mauvaise réponse

<img src="Ressources\final_2021_question5_mauvaise_reponse.png" alt="Question5_mauvaise_reponse" style="zoom:67%;" />

## Question #6

Écrivez une fonction Javascript qui va se déclencher <u>lorsqu'on clique sur le bouton tricher</u>. La fonction va modifier la couleur de fond du bouton de choix qui représente la bonne réponse.

Exemple du résultat attendu

<img src="Ressources\final_2021_question6.png" alt="Question6" style="zoom:67%;" />



## Grille de correction

| ÉlÉments                                                     |   Points |
| ------------------------------------------------------------ | -------: |
|                                                              |          |
| **Question #1**                                              |  **/10** |
| La police d'écriture de la balise h1 a été modifiée pour une police Google Font. |        5 |
| La couleur du texte a été modifiée et est différente pour les deux parties du titre. |        3 |
| La marge du haut a été supprimée.                            |        2 |
|                                                              |          |
| **Question #2**                                              |  **/30** |
| Les boutons sont disposés sur deux colonnes et deux lignes avec CSS Grid |       20 |
| La dimension de chaque cellule est de 1fr                    |        5 |
| Il y a un espace de 10px entre les boutons.                  |        5 |
|                                                              |          |
| **Question #3**                                              |  **/10** |
| Quand la résolution de l'écran est moins de 720 pixels, les boutons de choix de réponse sont disposés en colonne à l'aide d'une requète media query. |       10 |
|                                                              |          |
| **Question #4**                                              |  **/10** |
| Une animation css est déclenchée sur les boutons de choix de réponse lors de leur survol |       10 |
|                                                              |          |
| **Question #5**                                              |  **/30** |
| La section **choix_reponse** et le bouton **tricher** se masquent lors d'un clic sur un choix de réponse. |        5 |
| La section **validation_reponse** est affichée lors d'un clic sur un choix de réponse. |        5 |
| Le texte de la balise h2 **titre_validation_reponse** est modifié selon que la réponse soit bonne ou non. |       10 |
| Le texte de la balise h3 **texte_validation_reponse** est modifié selon que la réponse soit bonne ou non. |       10 |
|                                                              |          |
| **Question #6**                                              |  **/10** |
| La couleur d'arrière-plan du bouton de la bonne réponse est modifiée quand on clique sur le bouton tricher. |       10 |
|                                                              |          |
| **Total**                                                    | **/100** |

  

  





