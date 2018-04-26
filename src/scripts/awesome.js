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

const createCardButton = ButtonFactory(
    "button--submit",
    "Create Card",
    function () {
        const userEntry = cardTextInput.value
        output.appendChild(CardFactory("card", userEntry))
        cardTextInput.value = ""
    }
)
const cardTextInput = InputFactory("input--text", "Enter card text here", "text")

fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)


DomBuilder(fragment, ".output")
