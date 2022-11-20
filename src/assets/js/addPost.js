import {addPost} from './constants/addPosts'

const navPostsURL = ' http://localhost:3100/posts'

async function createPost() {
    const post = {
        image: 'http://localhost:3000/assets/images/post-2.jpg',
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


let buttonSend = document.querySelector('.add-post__send')
let posts = document.querySelector('.post__js1')
let postTextarea = document.querySelector('.add-post__textarea')

function renderPost(post) {

    let article = document.createElement('article')
    article.classList.add('post')
    article.innerHTML = addPost(post.date, post.text, post.title)

    let closeButton = article.querySelector('.post__button-close')

    closeButton.addEventListener('click', event => {
        let parent = event.target.parentNode
        parent.style.display = 'none'
    })

    posts.prepend(article)
}

buttonSend.addEventListener('click', event => {
    event.preventDefault()

    createPost().then(responseData => {
        renderPost(responseData)
    })
})

