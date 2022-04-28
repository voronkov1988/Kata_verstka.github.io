const readButton = document.querySelector('.open')
const closeButton = document.querySelector('.close')
const allSlides = document.querySelectorAll('.slider__oneSlider')
const wrapper = document.querySelector('.wrapper')

const medium = document.querySelectorAll('.slider__oneSlider:nth-child(n+7)')
const large = document.querySelectorAll('.slider__oneSlider:nth-child(n+9')
// tech slider
const mediumTech = document.querySelectorAll('.slider__singleTechSlider:nth-child(n+4)')
const readButtonTech = document.querySelector('.slider__tech .open')
const closeButtonTech = document.querySelector('.slider__tech .close')

const menuOpen = document.querySelector('.menu__open')
const menuClose = document.querySelector('.menu__close')
const menu = document.querySelector('.menu')
//read first block
const mainButtonRead = document.querySelector('.main__buttonRead span')
const sendMesage = document.querySelector('.send_mesage')

const menuAllIcons =document.querySelectorAll('.menu__oneIcon')

let swiper

document.addEventListener("DOMContentLoaded", ()=> {
    if (window.screen.width < 768) {
        createSwiper()
        createTechSlider()
        createPriceSlider()
    }
});

const resizeHandlerSlider = () => {
    if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
        readButton.style.display = 'flex'
        closeButton.style.display = 'none'
        readButtonTech.style.display = 'flex'
        closeButtonTech.style.display = 'none'
        mediumTech.forEach(item => {
            item.style.display = 'none'
        })
        medium.forEach (item => {
            item.style.display = 'none'
        })
        if (swiper) {
            swiper.destroy();
            swiperTech.destroy()
        }
    }
    if(document.body.clientWidth < 768){
        createSwiper()
        createTechSlider()
        createPriceSlider()
        medium.forEach (item => {
            item.style.display = 'flex'
        })
        readButton.style.display = 'none'
        closeButton.style.display = 'none'
        readButtonTech.style.display = 'none'
        closeButtonTech.style.display = 'none'
    }
    if(document.body.clientWidth > 1440){
        readButton.style.display = 'flex'
        closeButton.style.display = 'none'
        readButtonTech.style.display = 'flex'
        closeButtonTech.style.display = 'none'
        mediumTech.forEach(item => {
            item.style.display = 'flex'
        })
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
const createTechSlider = () => {
    swiperTech = new Swiper('.slider__tech', {
        slidesPerView: 'auto',
        pagination: {
            el: '.slider__tech_dots',
            clickable: true,
        }
    })
}
const createPriceSlider = () => {
    swiperPrice = new Swiper('.price__slider', {
        slidesPerView: 'auto',
        pagination: {
            el: '.price__dots',
            clickable: true,
        }
    })
}


readButton.addEventListener('click', () => {
    if(window.screen.width < 1440){
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

menuOpen.addEventListener('click', ()=> {
    menu.classList.add('menu__open')
    wrapper.classList.add('body_close');
})
menuClose.addEventListener('click', ()=>{
    menu.classList.remove('menu__open')
    wrapper.classList.remove('body_close');
})

document.addEventListener('click', (e) => {
    if(!e.target.closest('.menu') && !e.target.closest('.menu__open') && e.target.closest('.wrapper')){
        menu.classList.remove('menu__open')
        wrapper.classList.remove('body_close');
    }
    if(!e.target.closest('.modalFeedBack') && !e.target.closest('.menu__oneIcon') && e.target.closest('.wrapper')){
        modalFeedBack.classList.remove('modalFeedBack__active')
        wrapper.classList.remove('body_close');
    }
    if(!e.target.closest('.modalCall') && !e.target.closest('.menu__oneIcon') && e.target.closest('.wrapper')){
        modalCall.classList.remove('modalCall__active')
        wrapper.classList.remove('body_close');
    }
})

readButtonTech.addEventListener('click', ()=> {
    mediumTech.forEach(item => {
        item.style.display = 'flex'
    })
    readButtonTech.style.display = 'none'
    closeButtonTech.style.display = 'flex'
})
closeButtonTech.addEventListener('click', ()=>{
    mediumTech.forEach(item => {
        item.style.display = 'none'
    })
    readButtonTech.style.display = 'flex'
    closeButtonTech.style.display = 'none'
})
//доделать!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

mainButtonRead.addEventListener('click', ()=> {
    const mainLaptop = document.querySelector('.main__laptop')
    const mainPc = document.querySelector('.main__pc')
    mainLaptop.style.display = 'flex'
    mainPc.style.display = 'flex'
    if(mainButtonRead.textContent === 'Читать далее'){
        mainButtonRead.textContent = 'Скрыть'
    }
    else {
        mainLaptop.style.display = 'none'
        mainPc.style.display = 'none'
        mainButtonRead.textContent = 'Читать далее'
    }
    
})

menuAllIcons.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.remove('menu__open')
        wrapper.classList.remove('body_close');
    })
})

const modalFeedBack = document.querySelector('.modalFeedBack')
const modalFeedBackClose = document.querySelectorAll('.modal_close')
const modalCall = document.querySelector('.modalCall')
const orderCall = document.querySelector('.order_call')

sendMesage.addEventListener('click', () => {
    modalFeedBack.classList.add('modalFeedBack__active')
    wrapper.classList.add('body_close');

})
modalFeedBackClose.forEach(item => {
    item.addEventListener('click', () => {
        modalFeedBack.classList.remove('modalFeedBack__active')
        modalCall.classList.remove('modalCall__active')
        wrapper.classList.remove('body_close');
    })
})

orderCall.addEventListener('click', () => {
    modalCall.classList.add('modalCall__active')
    wrapper.classList.add('body_close');
})