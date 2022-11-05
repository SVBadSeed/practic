import {getRandomWorkText, getContentWorkHtml} from './constants/works'

let workContainer = document.querySelector('.work__container')
let text = getRandomWorkText()
let workContent = [
    {
        image: 'assets/images/work-preview.jpg',
        title: 'altermono.com',
        text: text,
        tags: [
            {title: 'дизайн'},
            {title: 'создание сайта'},
            {title: 'SMM'}
        ],
        link: 'Перейти на сайт'
    }, {
        image: 'assets/images/work-preview-2.jpg',
        title: 'codedoco.com',
        text: text,
        tags: [
            {title: 'дизайн'},
            {title: 'создание сайта'},
            {title: 'SMM'},
            {title: 'дизайн'},
            {title: 'создание сайта'},
            {title: 'SMM'}
        ],
        link: 'Перейти на сайт'
    }
]

workContent.forEach(item => {
    let article = document.createElement('article')
    article.className = 'work'
    article.innerHTML = getContentWorkHtml(item)

    let tagContainer = article.querySelector('.tags')

    item.tags.forEach(tag => {
        let tagsItem = document.createElement('li')
        tagsItem.className = 'tags__item'
        tagsItem.innerHTML = tag.title

        tagContainer.appendChild(tagsItem)
    })

    workContainer.append(article)
})




