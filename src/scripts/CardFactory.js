const cardFactory = (classList, textContent) => {
    const theSection = document.createElement("section")
    theSection.classList = classList
    theSection.textContent = textContent
    return theSection
}

module.exports = cardFactory
