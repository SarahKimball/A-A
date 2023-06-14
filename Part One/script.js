async function getNumberFact(number) {
  const url = `http://numbersapi.com/${number}?json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.text; // Return the fact about the number
  } catch (error) {
    console.log('Error:', error);
  }
}

async function getNumberFacts(numbers) {
  const facts = [];

  for (const number of numbers) {
    const fact = await getNumberFact(number);
    facts.push(fact);
  }

  return facts;
}

async function displayNumberFacts() {
  const favoriteNumbers = [42, 7, 13, 23];
  const numberFacts = await getNumberFacts(favoriteNumbers);

  const numberFactsList = document.getElementById('numberFacts');

  numberFacts.forEach(fact => {
    const listItem = document.createElement('li');
    listItem.textContent = fact;
    numberFactsList.appendChild(listItem);
  });
}

displayNumberFacts();
