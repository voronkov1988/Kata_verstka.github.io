const readButton = document.querySelector('.open')
const closeButton = document.querySelector('.close')
const allSlides = document.querySelectorAll('.slider__oneSlider')

const medium = document.querySelectorAll('.slider__oneSlider:nth-child(n+7)')
const large = document.querySelectorAll('.slider__oneSlider:nth-child(n+9')

let swiper

document.addEventListener("DOMContentLoaded", ()=> {
    if (window.screen.width < 768) {
        createSwiper()
    }
});

const resizeHandlerSlider = () => {
    if (document.body.clientWidth >= 768 && document.body.clientWidth < 1120) {
        readButton.style.display = 'flex'
        closeButton.style.display = 'none'
        medium.forEach (item => {
            item.style.display = 'none'
        })
        if (swiper) {
            swiper.destroy();
        }
    }
    if(document.body.clientWidth < 768){
        createSwiper()
        medium.forEach (item => {
            item.style.display = 'flex'
        })
        readButton.style.display = 'none'
        closeButton.style.display = 'none'
    }
    if(document.body.clientWidth > 1120){
        readButton.style.display = 'flex'
        closeButton.style.display = 'none'
        medium.forEach (item => {
            item.style.display = 'flex'
        })
        large.forEach (item => {
            item.style.display = 'none'
        })
    }
}

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

const createSwiper = () => {
    swiper = new Swiper('.slider__wrapper', {
        slidesPerView: 'auto',
        pagination: {
            el: '.slider__dots',
            clickable: true,
        }
    })
}


readButton.addEventListener('click', () => {
    if(window.screen.width < 1120){
        medium.forEach (item => {
            item.style.display = 'flex'
        })
    }
    
    large.forEach (item => {
        item.style.display = 'flex'
    })
    allSlides.forEach((slide,i) => {
        readButton.style.display = 'none'
        closeButton.style.display = 'flex'
    })
})

closeButton.addEventListener('click', () => {
    if(window.screen.width < 1120){
        medium.forEach (item => {
            item.style.display = 'none'
        })
    }else {
        large.forEach (item => {
            item.style.display = 'none'
        })
    }
    
    closeButton.style.display = 'none'
    readButton.style.display = 'flex'
})


window.addEventListener('resize', debounce(resizeHandlerSlider, 200))
