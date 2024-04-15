let cardNumberPairs = 16; // Nombre de paires de cartes
let colors = ['red', 'green', 'yellow', 'blue', 'purple', 'orange', 'pink', 'teal', 'black', 'silver', 'gray', 'white', 'maroon', 'lime', 'olive', 'fuchsia']; // liste des couleurs

function createCardDiv(color, id) { //fonction pour créer les cartes
    let div = document.createElement("div"); // on créé une div
    div.className = "card " + color; // Applique la classe card et sa classe de couleur à la carte
    div.id = id;
    div.setAttribute('onclick', 'chosenCard(this.id)')
    document.getElementById('conteneur-cartes').appendChild(div); // push la carte dans mon conteneur
}

function cardColorPicker() {
    let colorIndex = 0;
    let colorCount = 0; // Nombre de fois qu'une couleur a été utilisée
    id = 1;

    for (let i = 0; i < cardNumberPairs; i++) {
        let color = colors[colorIndex];
        createCardDiv(color, id);
        id++;
        createCardDiv(color, id);
        id++;

        colorCount++; // Incrémentez le nombre d'utilisations de la couleur actuelle

        // Si une couleur a été utilisée autant de fois que nécessaire, passez à la couleur suivante
        if (colorCount >= Math.ceil(cardNumberPairs / colors.length)) {
            colorIndex = (colorIndex + 1) % colors.length;
            colorCount = 0; // Réinitialisez le nombre d'utilisations de la couleur actuelle
        }
    }
}

cardColorPicker();// On appelle la fonction pour définir les couleurs des cartes

function shuffleCards() {
    let cards = document.querySelectorAll('.card');

    // Convertissez NodeList en tableau pour faciliter le mélange
    cards = Array.from(cards);

    // Mélangez les cartes en utilisant l'algorithme de Fisher-Yates
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]; // Échangez les cartes de position
        cards[i].parentNode.insertBefore(cards[i], cards[i].parentNode.firstChild); // Placez les cartes mélangées au début du conteneur
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
            if (points == cardNumberPairs) { document.getElementById("success").innerHTML = "BRAVO"; }
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
