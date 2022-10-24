import {getHeaderLeftHtml, getHeaderRightHtml} from "./constants/headers"

let header = document.querySelector('.header')

let headerLeftContent = [
    {
        text: 'Главная',
        article: 'Статьи',
        about: 'Обо мне',
        ad: 'Реклама'
    }
]
let headerRightContent = [
    {
        profile: 'Профиль',
        close: 'Выйти'
    }
]

headerLeftContent.forEach(item => {
    let div = document.createElement('div')
    div.className = 'header__left'
    div.innerHTML = getHeaderLeftHtml(item)

    header.prepend(div)
})


headerRightContent.forEach(item => {
    let div = document.createElement('div')
    div.className = 'header__right'
    div.innerHTML = getHeaderRightHtml(item)

    header.append(div)
})