let imagesNumber = 0; 
function createImageElement(event) {
    const imagesBox = document.querySelector('.images-box')
    const image = document.createElement('img')
    event.preventDefault()
    image.src = event.currentTarget.urlInput.value
    event.currentTarget.urlInput.value = ''
    image.alt = 'url image'
    imagesBox.appendChild(image)
}
function displayImagesNumber() {
    imagesNumber++
    console.log(`You have added ${imagesNumber} pictures!`)
}
const formElement = document.querySelector('.header__url-feature-form')
console.log(formElement)
formElement.addEventListener('submit', createImageElement, displayImagesNumber)