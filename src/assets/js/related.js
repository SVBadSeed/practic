import {getRelatedHtml} from './constants/relateds'

let related = document.querySelector('.related__list')
let relatedTitle = document.querySelector('.post__subtitle')


let relatedContent = [
    {
        link: 'Как я сходил на FrontEnd Conf 2021',
        time: '21.06.2020'
    },
    {
        link: 'Как я сходил на FrontEnd Conf 2021\n' +
            'Как я сходил на FrontEnd Conf 2021',
        time: '21.06.2020'
    },
    {
        link: 'Как я сходил на FrontEnd Conf 2021',
        time: '21.06.2020'
    },
    {
        link: 'Как я сходил на FrontEnd Conf 2021',
        time: '21.06.2020'
    },
]

let interesting = {
    title: 'Интересно почитать'
}
relatedTitle.innerHTML = interesting.title

relatedContent.forEach(item => {
    let listItem = document.createElement('li')
    listItem.className = 'related__list-item'
    listItem.innerHTML = getRelatedHtml(item)

    related.append(listItem)
})


