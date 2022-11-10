import {getImagePostHtml, getRandomPostText, getTextPostHtml, getVideoPostHtml} from './constants/posts'

let postsContainer = document.querySelector('.post__js1')
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
        read: 'Читать',
        type: 'image',
        category: 'Создание сайтов'
    },
    {
        image: '',
        title: 'Как писать код быстро и безболезненно?',
        text: text,
        date: '26.09.2017',
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

    postsContainer.prepend(article)


})


let buttonFilter = document.querySelector('.add-post__send--red')
let buttonFilter2 = document.querySelector('.add-post__send--orange')
let postAll = document.querySelectorAll('.post__js1 > .post')
let postButtonClose = document.querySelectorAll('.post__button-close')

buttonFilter.addEventListener('click', event => {
    event.preventDefault()

    postAll.forEach(post => {
        post.style.display = 'block'
        let postCategory = post.querySelector('.post__category')
        if (postCategory.textContent !== 'Создание сайтов') {
            post.style.display = 'none'
        }
    })

})


buttonFilter2.addEventListener('click', event => {
    event.preventDefault()

    postAll.forEach(post => {
        post.style.display = 'block'
        let postCategory = post.querySelector('.post__category')
        if (postCategory.textContent !== 'Заметка') {
            post.style.display = 'none'
        }
    })
})

postButtonClose.forEach(item => {
    item.addEventListener('click', event => {

        postAll.forEach(post => {
            let parent = event.target.parentNode
            parent.style.display = 'none'
        })
    })
})