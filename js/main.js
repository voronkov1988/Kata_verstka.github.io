'use strict';

const readButton = document.querySelector('.open')
const closeButton = document.querySelector('.close')
const allSlides = document.querySelectorAll('.slider__oneSlider')

document.addEventListener("DOMContentLoaded", ()=> {
    if (window.screen.width <= 768) {
        console.log(`width ${window.screen.width}`)
        readButton.style.display = 'none'
        closeButton.style.display = 'none'
    }
    if (window.screen.width >= 768 && window.screen.height < 1120) {
        allSlides.forEach((slide, i) => {
            if (i >= 6) {
                slide.classList.add('slide__slide_hidden')
                readButton.style.display = 'flex'
                closeButton.style.display = 'none'
            }
        })
    }
    if (window.screen.width > 1119) {
        allSlides.forEach((slide, i) => {
            slide.classList.remove('slide__slide_hidden')
            if (i >= 8) {
                console.log(slide)
                slide.classList.add('slide__slide_hidden')
                readButton.style.display = 'flex'
                closeButton.style.display = 'none'
            }
        })
    }
});


readButton.addEventListener('click', () => {
    allSlides.forEach(slide => {
        slide.classList.remove('slide__slide_hidden')
        readButton.style.display = 'none'
        closeButton.style.display = 'flex'
    })
})

closeButton.addEventListener('click', () => {
    allSlides.forEach((slide, i) => {
        if (i == 6) {
            slide.classList.add('slide__slide_hidden')
        }
        if (i < 6) {
            console.log(i)
            slide.classList.remove('slide__slide_hidden')
        }
        if(i > 8) {
            console.log(i)
            slide.classList.remove('slide__slide_hidden')
        }
        closeButton.style.display = 'none'
        readButton.style.display = 'flex'
    })
})

const debounce = (func, delay) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}



window.addEventListener('resize', debounce(function () {
    if (window.screen.width <= 768) {
        console.log(`width ${window.screen.width}`)
        readButton.style.display = 'none'
        closeButton.style.display = 'none'
    }
    if (window.screen.width >= 768 && window.screen.height < 1120) {
        allSlides.forEach((slide, i) => {
            if (i >= 6) {
                slide.classList.add('slide__slide_hidden')
                readButton.style.display = 'flex'
                closeButton.style.display = 'none'
            }
        })
    }
    if (window.screen.width > 1119) {
        allSlides.forEach((slide, i) => {
            slide.classList.remove('slide__slide_hidden')
            if (i >= 8) {
                console.log(slide)
                slide.classList.add('slide__slide_hidden')
                readButton.style.display = 'flex'
                closeButton.style.display = 'none'
            }
        })
    }
}, 500))
