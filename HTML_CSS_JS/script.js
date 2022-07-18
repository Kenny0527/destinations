/*
The purpose of this script is to interactively and dynamically generate a new card. 
This card will get its information from the user input form.
*/

// TODO: Setup an event listener for the submit button
document
  .querySelector("#destination_form")
  .addEventListener("submit", handlePrimaryBtn);

function handlePrimaryBtn(event) {
  // removing the default settings on the page.
  // helps with refreshing and printing to console
  event.preventDefault();

  // deconstructing the targt elements into their own variables.
  const { name, location, photoUrl, description } = event.target.elements;

  // destinationForm object holding user input information
  const destinationForm = {
    name,
    location,
    photoUrl,
    description,
  };

  // building the destination card by calling the function. the
  // function returns a new card that will be appended to the
  // destinations container.
  const destinationCard = buildDestinationCard(destinationForm);

  // reseting the form fields to ""
  resetFormFields(event.target);

  // Update the destination container title to say "My Wishlist" if this is the first card.
  // this is done by checking the number of children elements.
  let wishListHeader = document.querySelector(".dest_cards");
  if (wishListHeader.children.length === 0) {
    document.querySelector("#wishlist").innerHTML = "My WishList";
  }

  document.querySelector(".dest_cards").appendChild(destinationCard);
}

// TODO: the form has to be reset once the information
// has been submitted
function resetFormFields(destForm) {
  for (var i = 0; i < destForm.length; i++) {
    destForm.elements[i].value = "";
  }
}

/* TODO: build the card that will be used for populating
the destinations class */
function buildDestinationCard(destForm) {
  // elements necessary to build bootstrap card
  // titles will be children of the card body and
  // card body will be a child of card. Img will also
  // be a child or card.
  let card = document.createElement("div");
  let cardBody = document.createElement("div");
  let newImage = document.createElement("img");
  let newDestTitle = document.createElement("h5");
  let newLocTitle = document.createElement("h6");
  let newDescrTitle = document.createElement("h7");
  let btnContainer = document.createElement("div");

  // set the attributes for each new element element
  card.setAttribute("class", "card column");
  card.setAttribute("id", "card_box");
  card.setAttribute("style", "width: 18rem;");
  cardBody.setAttribute("class", "card-body");
  newImage.setAttribute("class", "card-img-top");
  newDestTitle.setAttribute("class", "card-title");
  newDestTitle.innerHTML = destForm.name.value;
  newLocTitle.setAttribute("class", "card-title");
  newLocTitle.innerHTML = destForm.location.value;
  newDescrTitle.setAttribute("class", "card-title");
  btnContainer.setAttribute("class", "padding");

  const defaultImage =
    "https://lp-cms-production.imgix.net/image_browser/Golden%20Horn.jpg";

  // if there is no image url, then use the defaultImage instead.
  if (destForm.photoUrl.value.length === 0) {
    newImage.setAttribute("src", defaultImage);
  } else {
    newImage.setAttribute("src", destForm.photoUrl.value);
  }

  // if the description is empty put a blank placehodler. This is
  // to help with the button formatting on the bottom of the page.
  if (destForm.description.value.length === 0) {
    newDescrTitle.innerHTML = "   ";
  } else {
    newDescrTitle.innerHTML = destForm.description.value;
  }

  // edit button going on the bottom on the card body. this will edit
  // its parent card html values.

  let cardEditBtn = document.createElement("button");
  cardEditBtn.setAttribute("class", "btn btn-warning");
  cardEditBtn.innerHTML = "Edit";
  cardEditBtn.addEventListener("click", editDestinationCard);

  // delete button going on the bottom on the card body. this will remove
  // its parent card from the list
  let cardDeleteBtn = document.createElement("button");
  cardDeleteBtn.setAttribute("class", "btn btn-danger");
  cardDeleteBtn.innerHTML = "Remove";
  cardDeleteBtn.addEventListener("click", deleteDestinationCard);

  // apending title elemtents to the card body. then appending
  // the card body to the card as last element. Appending image to card
  cardBody.appendChild(newDestTitle);
  cardBody.appendChild(newLocTitle);
  cardBody.appendChild(newDescrTitle);
  btnContainer.appendChild(cardEditBtn);
  btnContainer.appendChild(cardDeleteBtn);
  cardBody.appendChild(btnContainer);
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
function editDestinationCard(event) {
  let cardBodyElement = event.target.parentElement.parentElement;
  let cardTitle = cardBodyElement.children[0];
  let locTitle = cardBodyElement.children[1];

  let cardElement = cardBodyElement.parentElement;
  let cardPhotoUrl = cardElement.children[0];

  let newCardTitle = window.prompt("Enter new name");
  let newLocTitle = window.prompt("Enter new location");
  let newPhotoUrl = window.prompt("Enter new photo url");

  if (newCardTitle.length > 0) {
    cardTitle.innerHTML = newCardTitle;
  }

  if (newLocTitle.length > 0) {
    locTitle.innerHTML = newLocTitle;
  }

  if (newPhotoUrl.length > 0) {
    cardPhotoUrl.setAttribute("src", newPhotoUrl);
  }
}

// TODO: setup the remove button on card
function deleteDestinationCard(event) {
  let cardBodyElement = event.target.parentElement.parentElement;
  let cardElement = cardBodyElement.parentElement;
  cardElement.remove();
  // Update the destination container title to say "My Wishlist" if this is the first card.
  // this is done by checking the number of children elements.
  let wishListHeader = document.querySelector(".dest_cards");
  if (wishListHeader.children.length === 0) {
    document.querySelector("#wishlist").innerHTML = "Enter destination details";
  }
}
