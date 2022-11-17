import {getImagePostHtml, getRandomPostText, getTextPostHtml, getVideoPostHtml} from './constants/posts'

let postsContainer = document.querySelector('.post__js1')
let text = getRandomPostText()
let postContent = []

const requestURL = 'http://localhost:3100/posts'
const fetchPost = (method, url) => {
    // json-server db.json
    return fetch(url).then(response => {
        return response.json()
    })
}

fetchPost('GET', requestURL)
    .then(data => data.forEach(i => {
        postContent.push(i)
    }))
    .catch(err => console.error(err))

// fetchPost('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

console.log(postContent)
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
        let parent = event.target.parentNode
        parent.style.display = 'none'
    })
})