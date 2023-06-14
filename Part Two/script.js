let deckId;
let cardCounter = 0;

async function createDeck() {
  const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const data = await response.json();
  deckId = data.deck_id;
}

async function drawCardFromDeck() {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  const data = await response.json();
  const card = data.cards[0];
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
  cardElement.style.zIndex = cardCounter++;
  const cardImage = document.createElement('img');
  cardImage.src = card.image;
  cardImage.alt = `${card.value} of ${card.suit}`;
  cardElement.appendChild(cardImage);
  document.getElementById('cards').appendChild(cardElement);
}

document.getElementById('drawButton').addEventListener('click', drawCardFromDeck);

createDeck();


