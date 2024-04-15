let cardNumberPairs = 6; // Nombre de paires de cartes
let colors = ['red', 'green', 'yellow', 'blue', 'purple', 'orange']; // liste des couleurs

function createCardDiv(color, id) { //fonction pour créer les cartes
    let div = document.createElement("div"); // on créé une div
    div.className = "card " + color; // Applique la classe card et sa classe de couleur à la carte
    div.id = id;
    div.setAttribute('onclick', 'chosenCard(this.id)')
    document.getElementById('conteneur-cartes').appendChild(div); // push la carte dans mon conteneur
}

function cardColorPicker() { // attribution des couleurs aux cartes
    let colorIndex = 0; // Indice de la couleur actuellement attribuée
    id = 1;
    for (let i = 0; i < cardNumberPairs; i++) { // pour le nomber de paires
        let color = colors[colorIndex]; // Prend la couleur actuelle dans le tableau colors
        createCardDiv(color, id);
        id++;
        createCardDiv(color, id); // Crée deux cartes avec la même couleur
        id++;
        colorIndex = (colorIndex + 1) % colors.length; // Passe à la couleur suivante demander à Erwann pk un modulo etc oO'
    }
}

cardColorPicker();// On appelle la fonction pour définir les couleurs des cartes

function shuffleCards() { // mélange des cartes
    let cards = document.querySelectorAll('.card'); // variable avec toutes les cartes
    for (let i = cards.length - 1; i > 0; i--) { // longueur totale du tableau > parcoure tous les éléments + décrémente
        let j = Math.floor(Math.random() * (i + 1)); // pas bien compris
        cards[i].parentNode.insertBefore(cards[j], cards[i]); // pas bien compris
    }
}
shuffleCards(); //on appelle la fonction pour mélanger les cartes

// TEST FUNCTION RETIRE OPACITY CARTE
let firstOrSecondCard = 0;
let chosenCard1;
let chosenCard2;
let points = 0;

function chosenCard(id) {

    /*document.getElementById(id).style.backgroundImage = "none"; // On retire le background qui cache la couleur des cartes*/
    firstOrSecondCard++;

    if (firstOrSecondCard == 1) {
        chosenCard1 = document.getElementById(id).className;
        document.getElementById(id).style.backgroundImage = "none"; // On retire le background qui cache la couleur des cartes

    }
    if (firstOrSecondCard == 2) {
        chosenCard2 = document.getElementById(id).className;
        document.getElementById(id).style.backgroundImage = "none"; // On retire le background qui cache la couleur des cartes
        if (chosenCard1 === chosenCard2) {

            chosenCard1 = "temp";
            chosenCard2 = "temp";
            firstOrSecondCard = 0;
            points++;
            document.getElementById("success").innerHTML = points;
            if (points > 5) { document.getElementById("success").innerHTML = "BRAVO"; }
        }
        else {
            setTimeout(() => { hideCards(); }, "1500");

        }

    }




}


function hideCards() {
    document.getElementsByClassName(chosenCard1)[0].style.backgroundImage = "url(test.png)";
    document.getElementsByClassName(chosenCard1)[1].style.backgroundImage = "url(test.png)";
    document.getElementsByClassName(chosenCard2)[0].style.backgroundImage = "url(test.png)";
    document.getElementsByClassName(chosenCard2)[1].style.backgroundImage = "url(test.png)";
    chosenCard1 = "temp";
    chosenCard2 = "temp";
    firstOrSecondCard = 0;
}
