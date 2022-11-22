import {addPost} from './constants/addPosts'
import {getImagePostHtml, getTextPostHtml, getVideoPostHtml} from './constants/posts';

const navPostsURL = ' http://localhost:3100/posts'

async function createPost() {
    const post = {
        title: 'Hello',
        text: 'balls',
        date: ' 13.06.2015',
        read: 'Читать',
        type: 'image',
        category: 'Создание сайтов',
    }

    let response = await fetch(navPostsURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(post)
    })

    return response.json()
}

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

let buttonSend = document.querySelector('.add-post__send')
let posts = document.querySelector('.post__js1')
let postTextarea = document.querySelector('.add-post__textarea')

function renderPost(post) {

    let article = document.createElement('article')
    article.classList.add('post')
    article.innerHTML = addPost(post.date, post.text, post.title)
    article.setAttribute('id', post.id)

    if (post.type === 'text') {
        article.innerHTML = getTextPostHtml(post)
    } else if (post.type === 'image') {
        article.innerHTML = getImagePostHtml(post)
    } else if (post.type === 'video') {
        article.innerHTMl = getVideoPostHtml(post)
    }

    let closeButton = article.querySelector('.post__button-close')

    closeButton.addEventListener('click', event => {
        let parent = event.target.parentNode
        parent.style.display = 'none'
    })

    posts.prepend(article)
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

buttonSend.addEventListener('click', event => {
    event.preventDefault()

    createPost().then(responseData => {
        renderPost(responseData)
        renderRefreshPosts()
        renderClosePosts()
    })
})