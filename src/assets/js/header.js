import {getHeaderLeftHtml, getHeaderRightHtml, getSearchContentHtml} from './constants/headers'

let headerLeft = document.querySelector('.nav__list')
let headerRight = document.querySelector('.nav__list-right')
let headerSearch = document.querySelector('.search')

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
        link: 'profile.html'
    },
    {
        profile: 'Выйти',
        link: '#'
    }
]
let searchContent = [
    {}
]


headerLeftContent.forEach(item => {
    let li = document.createElement('li')
    li.className = 'nav__item'
    li.innerHTML = getHeaderLeftHtml(item)

    headerLeft.append(li)
})

headerRightContent.forEach(item => {
    let li = document.createElement('li')
    li.className = 'nav__item'
    li.innerHTML = getHeaderRightHtml(item)

    headerRight.append(li)
})

searchContent.forEach(item => {
    let form = document.createElement('div')
    form.className = 'search__container'
    form.innerHTML = getSearchContentHtml(item)

    headerSearch.append(form)
})