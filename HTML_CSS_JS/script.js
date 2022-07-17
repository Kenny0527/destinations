/*
The purpose of this script is to interactively and dynamically generate a new card. 
This card will get its information from the user input form.
*/

// TODO: Setup an event listener for the submit button
document
  .querySelector("#destination_form")
  .addEventListener("submit", handlePrimaryBtn);

function handlePrimaryBtn(event) {
  event.preventDefault();

  const { name, location, photoUrl, description } = event.target.elements;

  // destinationForm object holding user input information
  const destinationForm = {
    name,
    location,
    photoUrl,
    description,
  };

  const destinationCard = buildDestinationCard(destinationForm);
  resetFormFields(event.target);

  document.querySelector(".dest_cards").appendChild(destinationCard);
}

// TODO: the form has to be reset once the information
// has been submitted
function resetFormFields(destForm) {
  for (var i = 0; i < destForm.length; i++) {
    destForm.elements[i].value = "";
  }
}

// TODO: build the card that will be used for populating
// the destinations class
function buildDestinationCard(destForm) {
  let card = document.createElement("div");
  let cardBody = document.createElement("div");
  let newImage = document.createElement("img");
  let newDestTitle = document.createElement("h5");
  let newLocTitle = document.createElement("h5");
  let newDescrTitle = document.createElement("h5");

  card.setAttribute("class", "card");
  card.setAttribute("id", "card_box");
  card.setAttribute("style", "width: 18rem;");

  cardBody.setAttribute("class", "card-body");

  newImage.setAttribute("src", destForm.photoUrl.value);
  newImage.setAttribute("class", "card-img-top");

  newDestTitle.setAttribute("class", "card-title");
  newDestTitle.innerHTML = destForm.name.value;

  newLocTitle.setAttribute("class", "card-title");
  newLocTitle.innerHTML = destForm.location.value;

  newDescrTitle.setAttribute("class", "card-title");
  newDescrTitle.innerHTML = destForm.description.value;

  cardBody.appendChild(newDestTitle);
  cardBody.appendChild(newLocTitle);
  cardBody.appendChild(newDescrTitle);
  card.appendChild(newImage);
  card.appendChild(cardBody);
  return card;
}
/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

// TODO: setup the edit button on the card

// TODO: setup the remove button on card

// TODO: make sure the new cards are in a flex box that is aligned
// by rows and has a max column of 3. they need to be wrapped
