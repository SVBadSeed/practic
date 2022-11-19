import {getImagePostHtml, getRandomPostText, getTextPostHtml, getVideoPostHtml} from './constants/posts'

let postsContainer = document.querySelector('.post__js1')
let text = getRandomPostText()
let postContent = []

const requestPostsURL = 'http://localhost:3100/posts'


async function fetchPosts() {
    let response = await fetch(requestPostsURL, {method: 'GET'})
    return response.json()
}

function renderPosts(responseData) {
    postContent.push(...responseData)

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
}

fetchPosts().then(responseData => {
    renderPosts(responseData)
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
        let parent = event.target.parentNode
        parent.style.display = 'none'
    })
})