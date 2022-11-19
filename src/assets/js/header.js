import {getHeaderLeftHtml, getHeaderNestedHtml, getHeaderRightHtml, getSearchContentHtml} from './constants/headers'

let headerLeft = document.querySelector('.nav__list')
let headerRight = document.querySelector('.nav__list-right')
let headerSearch = document.querySelector('.search')

let headerLeftContent = []
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

const navPostsURL = 'http://localhost:3100/nav'

async function fetchNav() {
    let response = await fetch(navPostsURL, {method: 'GET'})

    return response.json()
}

fetchNav().then(responseData => {
    renderNav(responseData)
})


function renderNav(responseNav) {
    headerLeftContent.push(...responseNav)

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

}

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
