import {addPost} from './constants/addPosts'


let buttonSend = document.querySelector('.add-post__send')
let posts = document.querySelector('.post__js1')
let postTextarea = document.querySelector('.add-post__textarea')

buttonSend.addEventListener('click', event => {
    event.preventDefault()
    let title = 'Заметка'
    let localData = new Date().toLocaleString().slice(0, 10)
    let text = postTextarea.value
    postTextarea.value = ''

    let article = document.createElement('article')
    article.classList.add('post')
    article.innerHTML = addPost(localData, text, title)

    let closeButton = article.querySelector('.post__button-close')

    closeButton.addEventListener('click', event => {
        let parent = event.target.parentNode
        parent.style.display = 'none'
    })

    posts.prepend(article)
})

