import {getTextPostHtml} from "./constants/posts";

let posts = document.querySelector('.post__js1')
let text = 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipiscing elit. Elementum ' +
    'volutpat orci turpis urna. Et vestibulum,' +
    ' posuere tortor lacinia sit. Sagittis' +
    ' porttitor orci auctor in at tincidunt' +
    ' arcu egestas. Fusce arcu sodales lacinia ' +
    'eu auctor nunc nam id. Diam sit sed volutpat ' +
    'massa. Egestas ornare vel volutpat. '
let postContent = [
    {
        text: text,
        date: '13.06.2015'
    },
    {
        text: text,
        date: '26.09.2017'
    },
    {
        text: text,
        date: '7.01.2022'
    },
    {
        text: text,
        date: '1.01.2023'
    }

]

postContent.forEach(post => {
    let article = document.createElement('article')
    article.innerHTML = getTextPostHtml(post)
    posts.prepend(article)
})



















