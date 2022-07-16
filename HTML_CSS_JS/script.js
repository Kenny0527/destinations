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

  let { name, location, photo, description } = event.target.elements;
  console.log(`${name.value}, ${location.value}, ${description.value}`);
}

// TODO: the form has to be reset once the information
// has been submitted

// TODO: build the card that will be used for populating
// the destinations class

// TODO: setup the edit button on the card

// TODO: setup the remove button on card

// TODO: make sure the new cards are in a flex box that is aligned
// by rows and has a max column of 3. they need to be wrapped
// Listen to the form being submitted
