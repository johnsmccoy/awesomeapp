const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
    const inputField = document.createElement("input")
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.placeholder = defaultPlaceholderText
    return inputField
}

module.exports = inputFieldFactory