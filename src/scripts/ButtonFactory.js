const buttonFactory = (classList, textContent, eventListener) => {
    const theButton = document.createElement("button")
    theButton.classList = classList
    theButton.textContent = textContent
    theButton.addEventListener("click", eventListener)
    return theButton
}

module.exports = buttonFactory