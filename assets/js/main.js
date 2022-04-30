
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const userWrapElement = $('.header__user-wrap')
const userOptionsElemt = $('.header__user-options')
const appElement = $('.app')
const userOptionList = $$('.header__user-list-item')
const categoryItem = $$('.header__navbar-item_link')
const header = $('header')

//xử lý khi cuộn thanh header
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
})

//xử lý click ẩn/hiện UserOption
const handleShowUserOption = userWrapElement.addEventListener('click', () => {
    if(userOptionsElemt.classList.contains('open')) {
        userOptionsElemt.classList.remove('open')
    }
    else {
        setTimeout(() => {
            userOptionsElemt.classList.add('open')
        }, 100)
    }

    //Xử lý clcik tắt UserOption khi bấm vào option item
    for(const option of userOptionList) {
        option.addEventListener('click', () => {
            userOptionsElemt.classList.remove('open')
        })
    }
    //xử lý click vào viền UserOption k bị 
    userOptionsElemt.addEventListener('click', (e) => {
        e.stopPropagation()
    })
    //xử lý khi blur ra ngoài khỏi option phải mất 
    appElement.addEventListener('click', () => {
        userOptionsElemt.classList.remove('open')
    })
})

//xử lý khi click vào navbar 
const removeActive =  () => {
    categoryItem.forEach((e) => {
        if(e.classList.contains('active')) {
            e.classList.remove('active')
        }
    })
}
const handleClick = (event) => {
    removeActive();
    event.target.classList.add('active')

}
categoryItem.forEach((e) => {
    e.addEventListener('click', handleClick)
})







