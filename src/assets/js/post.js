import {getImagePostHtml, getRandomPostText, getTextPostHtml, getVideoPostHtml} from './constants/posts'

let postsContainer = document.querySelector('.post__js1')
let text = getRandomPostText()
let postContent = []

const requestPostsURL = 'http://localhost:3100/posts'

async function fetchPosts() {
    let response = await fetch(requestPostsURL, {
        method: 'GET'
    })

    return response.json()
}

fetchPosts().then(responseData => {
    renderPosts(responseData)
    let postAll = document.querySelectorAll('.post__js1 > .post')

    renderClosePosts()
    renderRefreshPosts()
    renderFilterPosts(postAll)
    renderFilter2Posts(postAll)

})

async function fetchPostsDelete(postId) {
    let response = await fetch(`http://localhost:3100/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })

    return response.json()
}

async function fetchPostsPut(postId) {
    const post = {
        title: 'if your score',
        text: 'Сенсация века спрей от лысения яичек',
        date: '13.06.2015',
        read: 'Про прочитал тот лох',
        type: 'image',
        category: 'Создание сайтов',
    }

    let response = await fetch(`http://localhost:3100/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(post)
    })

    return response.json()
}


function renderPosts(responseData) {
    postContent.push(...responseData)

    postContent.forEach(post => {
        let article = document.createElement('article')
        article.className = 'post'
        article.setAttribute('id', post.id)

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

function renderFilterPosts(postAll) {
    let buttonFilter = document.querySelector('.add-post__send--red')

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
}

function renderFilter2Posts(postAll) {
    let buttonFilter2 = document.querySelector('.add-post__send--orange')

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
}

function renderClosePosts() {
    let postButtonClose = document.querySelectorAll('.post__button-close')

    postButtonClose.forEach(item => {
        item.addEventListener('click', event => {
            let parent = event.target.parentNode
            let postId = parent.getAttribute('id')

            fetchPostsDelete(postId).then(responseData => {
                parent.style.display = 'none'
            })
        })
    })
}

function renderRefreshPosts() {
    let postButtonRefresh = document.querySelectorAll('.post__button-refresh')

    postButtonRefresh.forEach(button => {
        button.addEventListener('click', event => {
            let parent = event.target.parentNode.parentNode.parentNode
            let postId = parent.getAttribute('id')


            fetchPostsPut(postId).then(responseData => {
                let title = parent.querySelector('.post__title')
                title.innerText = responseData.title
                let text = parent.querySelector('.post__description')
                text.innerText = responseData.text
                let read = parent.querySelector('.post__read')
                read.innerText = responseData.read
            })

        })
    })
}