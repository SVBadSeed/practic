import {addPost} from './constants/addPosts';

let buttonSend = document.querySelector('.add-post__send')
let posts = document.querySelector('.post__js1')

buttonSend.addEventListener('click', event => {
    event.preventDefault()

    let article = document.createElement('article')
    article.classList.add('post')
    article.innerHTML = addPost(event)

    posts.prepend(article)
})