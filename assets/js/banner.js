
const image = [
    './assets/img/banner_1.png',
    './assets/img/banner_2.png',
    './assets/img/banner_3.jpg',
    './assets/img/banner_4.png',
    './assets/img/banner_5.png',
    './assets/img/banner_6.png',
]

const forwardBtn = document.querySelector('.next-btn')
const backBtn = document.querySelector('.prev-btn')


const createButton = () => {
    let sliderBar = document.querySelector('.slider__bar')
    for(let i = 0; i < image.length; i++) {
        let item = document.createElement('div')
        item.classList.add('slider__bar-item')

        //chuyền id vào ảnh 
        item.setAttribute('data-id', i)
        sliderBar.appendChild(item)
    }
}

createButton()

const removeActiveSlideBar = () => {
    let barItem = document.querySelectorAll('.slider__bar-item')
    barItem.forEach((e) => {
        if(e.classList.contains('active')) {
            e.classList.remove('active')
        }
    })
}

const handleClickSlideBar = (e) => {
    removeActiveSlideBar()
    e.target.classList.add('active')

    const currentIndex = document.querySelector('.slider__list-thumb')
    let indexOf = e.target.dataset.id
    currentIndex.src = image[indexOf]
}

let barItem = document.querySelectorAll('.slider__bar-item')
barItem.forEach((e) => {
    e.addEventListener('click', handleClickSlideBar);
})

var index = 0

forwardBtn.addEventListener('click', () => {
    index++
    if(index >= image.length) {
        index = 0
    }
    handleClickControls()
})

backBtn.addEventListener('click', () => {
    index--
    if(index < 0 ) {
        index = image.length - 1
    }
    handleClickControls()

})

const handleClickControls = () => {
    const slideItem = document.querySelector('.slider__list-thumb')
    const barItem = document.querySelectorAll('.slider__bar-item')
    removeActiveSlideBar()
    slideItem.src = image[index]
    barItem[index].classList.add('active')
}