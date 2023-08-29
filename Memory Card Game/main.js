// Grap a couple of things

const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

// Link text
playerLivesCount.textContent = playerLives;

// Generate the data
const getData = () => [
    { imgSrc: "./imgs/img1.jpeg", name: "img1" },
    { imgSrc: "./imgs/img2.jpeg", name: "img2" },
    { imgSrc: "./imgs/img3.jpeg", name: "img3" },
    { imgSrc: "./imgs/img4.jpeg", name: "img4" },
    { imgSrc: "./imgs/img5.jpeg", name: "img5" },
    { imgSrc: "./imgs/img6.jpeg", name: "img6" },
    { imgSrc: "./imgs/img1.jpeg", name: "img1" },
    { imgSrc: "./imgs/img2.jpeg", name: "img2" },
    { imgSrc: "./imgs/img3.jpeg", name: "img3" },
    { imgSrc: "./imgs/img4.jpeg", name: "img4" },
    { imgSrc: "./imgs/img5.jpeg", name: "img5" },
    { imgSrc: "./imgs/img6.jpeg", name: "img6" },
];

// Randomize
const randomize = () => {
    const cardData = getData();
    // console.log(cardData);
    cardData.sort(() => Math.random() - .5);
    // console.log(cardData);
    return cardData;
};


// Card Generator Function
const cardGenerator = () => {
    const cardData = randomize();
    // console.log(cardData);
    // Generate the HTML 
    cardData.forEach((item) => {
        // console.log(item);
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        // Attach the info to the cards
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        // Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        })
    });
};

// Check Cards
const checkCards = (e) => {
    const clickedCard = e.target;
    // console.log(clickedCard);
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');
    // Logic
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            // console.log('match');
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        } else {
            // console.log('wrong');
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);

            });
            playerLives--;
            playerLivesCount.textContent = playerLives;

            // if (playerLives === 0) {
            //     restart("Try Again");
            // }
        }
    }
    // Run a check to see if we won the game
    if (toggleCard.length === 12) {
        // Create a custom confirmation modal
        var modal = document.createElement("div");
        modal.classList.add("custom-modal");

        var message = document.createElement("p");
        message.textContent = "لقد فزت 😍😍\n هل ترغب في اللعب مجددا ؟؟؟";
        message.classList.add("modal-message");
        modal.appendChild(message);

        var confirmButton = document.createElement("button");
        confirmButton.textContent = "نعم";
        confirmButton.classList.add("modal-button", "confirm-button");
        confirmButton.addEventListener("click", function() {
            // Handle play again
            // Reload the game
            modal.remove();
            location.reload();
        });
        modal.appendChild(confirmButton);

        var cancelButton = document.createElement("button");
        cancelButton.textContent = "لا";
        cancelButton.classList.add("modal-button", "cancel-button");
        cancelButton.addEventListener("click", function() {
            // Handle not playing again
            modal.remove();
        });
        modal.appendChild(cancelButton);

        document.body.appendChild(modal);
    }
};

// Restart 
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";

    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");

        // Randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);

    });

    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
}

cardGenerator();