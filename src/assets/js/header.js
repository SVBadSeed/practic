import {getHeaderLeftHtml, getHeaderRightHtml} from './constants/headers'

let header = document.querySelector('.nav__list')

let headerLeftContent = [
    {
        title: 'Главная',
        link: 'index.html'
    },
    {
        title: 'Статьи',
        link: 'index.html'
    },
    {
        title: 'Обо мне',
        link: 'text.html'
    },
    {
        title: 'Реклама',
        link: 'text.html'
    }
]
let headerRightContent = [
    {
        profile: 'Профиль',
        close: 'Выйти'
    }
]

headerLeftContent.forEach(item => {
    let li = document.createElement('li')
    li.className = 'nav__item'
    li.innerHTML = getHeaderLeftHtml(item)

    header.append(li)
})


headerRightContent.forEach(item => {
    let div = document.createElement('div')
    div.className = 'header__right'
    div.innerHTML = getHeaderRightHtml(item)

    header.append(div)
})