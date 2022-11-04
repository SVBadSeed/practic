import {getImagePostHtml, getRandomPostText, getTextPostHtml, getVideoPostHtml} from './constants/posts'

let posts = document.querySelector('.post__js1')
let text = getRandomPostText()
let postContent = [
    {
        text: text,
        date: '13.06.2015',
        type: 'text',
        category: 'Заметка'
    },
    {
        image: '',
        title: 'Как писать код быстро и безболезненно?',
        text: text,
        date: '26.09.2017',
        dataItem: 'Создание сайтов',
        read: 'Читать',
        type: 'image',
        category: 'Создание сайтов'
    },
    {
        image: '',
        title: 'Как писать код быстро и безболезненно?',
        text: text,
        date: '26.09.2017',
        dataItem: 'Создание сайтов',
        read: 'Читать',
        type: 'image',
        category: 'Создание сайтов'
    },
    {
        text: text,
        date: '13.06.2015',
        type: 'text',
        category: 'Заметка'
    },
    {
        image: '',
        title: 'Как писать код быстро и безболезненно?',
        text: text,
        date: '26.09.2017',
        dataItem: 'Создание сайтов',
        read: 'Читать',
        type: 'image',
        category: 'Создание сайтов'
    },

]

postContent.forEach(post => {
    let article = document.createElement('article')
    article.className = 'post'

    if (post.type === 'text') {
        article.innerHTML = getTextPostHtml(post)
    } else if (post.type === 'image') {
        article.innerHTML = getImagePostHtml(post)
    } else if (post.type === 'video') {
        article.innerHTMl = getVideoPostHtml(post)
    }

    posts.prepend(article)
})


let buttonFilter = document.querySelector('.add-post__send--red')
let postAll = document.querySelectorAll('.post')


buttonFilter.addEventListener('click', event => {
    event.preventDefault()

    postContent.forEach(elem => {
        if (elem.category === 'Заметка') {

        }
    })

})

// postContent.forEach(content => {
//     if (content.category === 'Создание сайтов') {
//         category.push(content)
//     }
// })
//


























