let time = 2000
// let time = 2000,
    currentImageIndex = 0
    images = document.querySelectorAll('#items-wrapper img')
    max = images.length


// function start() {
//     setInterval(() => {
//         // lógica troca de imagem
//         nextImage()
//         // console.log('função rodada')
//     }, time)
// }

// function nextImage() {
//     // remove a classe para o loop não bugar
//     images[currentImageIndex].classList.remove('items')
    
//     currentImageIndex++

//     // se a imagem chegar ao fim, retornar ao 0
//     if(currentImageIndex >= max)
//         currentImageIndex = 0

// // adiciona a classe
//     images[currentImageIndex].classList.add('items')
// }


// window.addEventListener('load', start)

// slider manual do mouse
document.querySelector('.items').addEventListener('wheel', event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(500, 0)
    } else {
        event.target.scrollBy(-500, 0)
    }
})

