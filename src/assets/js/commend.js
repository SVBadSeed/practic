import {getText, getCommentsHtml, commentsHtml} from './constants/commends'


let buttonCommend = document.querySelector('.btn-commend')
let commendTextarea = document.querySelector('.form__control')
let commends = document.querySelector('.commends-container')
let text = getText()

let commentsContent = [{
    image: 'assets/images/profile-img.jpg',
    name: 'Masthead',
    time: '1 неделю назад',
    text: text,
    commends: [
        {
            image: 'assets/images/commend-user.jpg',
            name: 'Гавр',
            time: '1 неделю назад',
            text: text,
        }]
}]

commentsContent.forEach(item => {
    let commendItem = document.createElement('li')
    commendItem.className = 'commends__item'
    commendItem.innerHTML = getCommentsHtml(item)

    let commendItemAnswer = document.createElement('ul')
    commendItemAnswer.className = 'commends-child'

    item.commends.forEach(commend => {
        let commendItemChild = document.createElement('li')
        commendItemChild.className = 'commends__item'
        commendItemChild.innerHTML = getCommentsHtml(commend)

        commendItemAnswer.appendChild(commendItemChild)
    })
    commendItem.appendChild(commendItemAnswer)
    commends.append(commendItem)
})


buttonCommend.addEventListener('click', event => {
    event.preventDefault()

    let commentDate = new Date().toLocaleString()
    let commentText = commendTextarea.value
    commendTextarea.value = ''

    commentsContent.forEach(item => {
        let commendItem = document.createElement('li')
        commendItem.className = 'commends__item'
        commendItem.innerHTML = commentsHtml(item, commentText, commentDate)

        let buttonAnswer = commendItem.querySelector('.commends__reply')

        buttonAnswer.addEventListener('click', event => {
            event.preventDefault()

            let commentData = {
                image: 'assets/images/commend-user.jpg',
                name: 'Гавр',
                time: '1 неделю назад',
                text: text
            }
            let parent = event.target.parentNode
            let commendItemAnswer = document.createElement('ul')
            commendItemAnswer.className = 'commends-child'

            let commendItemChild = document.createElement('li')
            commendItemChild.className = 'commends__item'
            commendItemChild.innerHTML = getCommentsHtml(commentData)

            commendItemAnswer.appendChild(commendItemChild)

            parent.appendChild(commendItemAnswer)
        })

        commends.prepend(commendItem)
    })
})

let buttonAnswer = document.querySelectorAll('.commends__reply')
buttonAnswer.forEach(item => {

    item.addEventListener('click', event => {
        event.preventDefault()

        let commentData = {
            image: 'assets/images/commend-user.jpg',
            name: 'Гавр',
            time: '1 неделю назад',
            text: text
        }
        let parent = event.target.parentNode

        let commendItemAnswer = document.createElement('ul')
        commendItemAnswer.className = 'commends-child'

        let commendItemChild = document.createElement('li')
        commendItemChild.className = 'commends__item'
        commendItemChild.innerHTML = getCommentsHtml(commentData)

        commendItemAnswer.appendChild(commendItemChild)
        parent.appendChild(commendItemAnswer)
    })
})



