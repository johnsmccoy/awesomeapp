/* Modules
    1. Creating fragments
    2. Creating components with factories
    3. Adding event listeners to components
    4. Adding components to DOM
    5. Clearing fields
*/
const DomBuilder = require("./DomBuilder")
const CardFactory = require("./CardFactory")
const InputFactory = require("./InputFieldFactory")
const ButtonFactory = require("./ButtonFactory")


// Final output DOM component reference
const output = document.querySelector(".output")

// Fragment to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment()

// Create the button used to create a card
const createCardButton = ButtonFactory(
    "button--submit",
    "Create Card",
    function () {
        const userEntry = cardTextInput.value
        output.appendChild(CardFactory("card", userEntry))
        cardTextInput.value = ""
    }
)

// Create input field for user to enter in text
const cardTextInput = InputFactory("input--text", "Enter card text here", "text")

// Append input field and button to fragment
fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)

// Append fragment to DOM
DomBuilder(fragment, ".output")
