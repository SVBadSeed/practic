import {getStories} from './constants/stories'

let stories = document.querySelector('.stories')
let storiesContent = [
    {
        image: '  <img class="stories__preview"\n' +
            '             src="assets/images/stories/stories-1.jpg" alt="">',

        title: 'Отдыхаю на природе',
        time: '21.09.2020'
    },
    {
        image: '<img class="stories__preview"\n' +
            '             src="assets/images/stories/stories-2.jpg" alt="">',

        title: ' Заканчиваю сложный проект',
        time: ' 15.09.2020'
    },
    {
        image: ' <img class="stories__preview"\n' +
            '             src="assets/images/stories/stories-3.jpg" alt="">',
        title: ' Переехал в новую квартиру',
        time: ' 11.09.2020'
    },
    {
        image: ' <img class="stories__preview"\n' +
            '             src="assets/images/stories/stories-4.jpg" alt="">',
        title: '  Осень пришла!',
        time: ' 28.08.2020'
    },
]

storiesContent.forEach(item => {
    let storiesItem = document.createElement('div')
    storiesItem.className = 'stories__item'
    storiesItem.setAttribute('data-modal', 'story-modal')
    storiesItem.innerHTML = getStories(item)

    stories.append(storiesItem)
})