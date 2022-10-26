import {getHeaderLeftHtml, getHeaderRightHtml, getSearchContentHtml, getHeaderNestedHtml} from './constants/headers'

let headerLeft = document.querySelector('.nav__list')
let headerRight = document.querySelector('.nav__list-right')
let headerSearch = document.querySelector('.search')

let headerLeftContent = [
    {
        title: 'Главная',
        link: 'index.html',
        type: 'outer'
    },
    {
        title: 'Статьи',
        link: 'index.html',
        type: 'nested',
        childLink: [
            {title: 'Создание сайтов'},
            {title: 'Интернет-маркетинг'},
            {title: 'Продвижение видео'}
        ]
    },
    {
        title: 'Обо мне',
        link: 'text.html',
        type: 'outer'
    },
    {
        title: 'Реклама',
        link: 'text.html',
        type: 'outer'
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

headerLeftContent.forEach(linkItem => {
    let navItem = document.createElement('li')
    navItem.className = 'nav__item'
    navItem.innerHTML = getHeaderLeftHtml(linkItem)

    if (linkItem.type === 'nested') {
        let subNav = document.createElement('ul')

        subNav.className = 'subnav'
        navItem.appendChild(subNav)

        linkItem.childLink.forEach(item => {
            let li = document.createElement('li')
            li.innerHTML = getHeaderNestedHtml(item)

            subNav.appendChild(li)
        })
    }

    headerLeft.appendChild(navItem)
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