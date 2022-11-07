import {getText, getCommentsHtml} from './constants/commends'

let commends = document.querySelector('.commends-container')
let text = getText()
let commentsContent = [
    {
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
            }
        ]
    },
    {
        image: 'assets/images/commend-user-2.jpg',
        name: 'Илья',
        time: '1 неделю назад',
        text: text,
        commends: [
            {
                image: 'assets/images/profile-img.jpg',
                name: 'Masthead',
                time: '1 неделю назад',
                text: text,
            }]
    }
]

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
