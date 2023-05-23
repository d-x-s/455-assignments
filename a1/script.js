cardElements = [];

window.onload = function(){ 
    const submit = document.getElementById('submit');
    submit.onclick = handleFormSubmit;

    const del = document.getElementById('delete');
    del.onclick = handleFormDelete;

    const confetti = document.getElementById('confetti');
    confetti.onclick = animateButton;
};

fetch('cards.json')
 .then(response => response.json())
 .then(data => {
   // Process the JSON data
   renderCards(data);
   cards = data;
 })
 .catch(error => {
   console.log('Error:', error);
 });


 
// Function to render the cards
function renderCards(cards) {
 // Get the card container element
 const cardContainer = document.getElementById('cardContainer');

 // Iterate over each card object
 cards.forEach(card => {
   // Create a new card element
   const cardElement = document.createElement('div');
   cardElement.classList.add('card');
   cardElement.classList.add('breathing');

   // Fetch the card's image
   const imageElement = document.createElement('img');
   imageElement.src = card.imageUrl;
   imageElement.classList.add('img');
   cardElement.appendChild(imageElement);

   // Create the card's name
   const titleElement = document.createElement('div');
   titleElement.textContent = card.name;
   cardElement.appendChild(titleElement);

   // Create the card's emotion
   const descriptionElement = document.createElement('div');
   descriptionElement.textContent = card.description;
   cardElement.appendChild(descriptionElement);

   // Create the card's amount
   const amountElement = document.createElement('div');
   amountElement.textContent = "$" + card.amount;
   cardElement.appendChild(amountElement);

   // Append the card to the container
   cardContainer.appendChild(cardElement);
   cardElements.push(cardElement)
 })
}


function handleFormDelete() {
    console.log("delete button clicked");
    const del = document.getElementById('delete');

    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.getElementsByClassName('card');
    Array.from(cards).forEach(function(card) {
      card.style.animation = 'fade-out 0.5s forwards';
    });

    // Remove the card elements after the animation completes
    setTimeout(function() {
      while (cardContainer.firstChild) {
        cardContainer.firstChild.remove();
      }
    }, 500); // Delay the removal by the duration of the animation (0.5s in this example)
}



function handleFormSubmit() {
    console.log("submit button clicked");
    const form = document.getElementById('cardForm');

    title = form.iname.value;
    description = form.description.value;
    price = form.price.value;
    imageUrl = form.image.value;

    // create a new card object
    const newCard = {
        name: title,
        description: description,
        amount: price,
        imageUrl: imageUrl
    }

    // // add the new card to the gallery
    addCardToGallery(newCard);

    // reset form fields
    document.getElementById('cardForm').reset();
}



// given a card object, add it to the gallery
function addCardToGallery(card) {
    const cardContainer = document.getElementById('cardContainer');
   // Create a new card element
   const cardElement = document.createElement('div');
   cardElement.classList.add('card');

   // Fetch the card's image
   const imageElement = document.createElement('img');
   imageElement.src = card.imageUrl;
   imageElement.classList.add('img');
   cardElement.appendChild(imageElement);

   // Create the card's name
   const titleElement = document.createElement('div');
   titleElement.textContent = card.name;
   cardElement.appendChild(titleElement);

   // Create the card's emotion
   const descriptionElement = document.createElement('div');
   descriptionElement.textContent = card.description;
   cardElement.appendChild(descriptionElement);

   // Create the card's amount
   const amountElement = document.createElement('div');
   amountElement.textContent = "$" + card.amount;
   cardElement.appendChild(amountElement);

   // Append the card to the container
   cardContainer.appendChild(cardElement);
   cardElements.push(cardElement)
}
