import {getImagePostHtml, getRandomPostText, getTextPostHtml, getVideoPostHtml} from './constants/posts'

let posts = document.querySelector('.post__js1')
let text = getRandomPostText()
let postContent = [
    {
        text: text,
        date: '13.06.2015',
        type: 'text'
    },
    {
        image: '',
        title: 'Как писать код быстро и безболезненно?',
        text: text,
        date: '26.09.2017',
        dataItem: 'Создание сайтов',
        read: 'Читать',
        type: 'image'
    },
    {
        image: '',
        title: 'Купил новый ноутбук за 150 000 руб',
        text: text,
        date: '26.09.2017',
        dataItem: 'Создание сайтов',
        read: 'Читать',
        type: 'video'
    },
    {
        image: '',
        title: 'Как писать код быстро и безболезненно?',
        text: text,
        date: '26.09.2017',
        dataItem: 'Создание сайтов',
        read: 'Читать',
        type: 'image'
    }

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






