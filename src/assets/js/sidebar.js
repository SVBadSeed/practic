import {
    getRandomSidebarText,
} from './constants/sidebars'

let profileText = document.querySelector('.profile__text')
let profileName = document.querySelector('.profile__name')
let profileProf = document.querySelector('.profile__prof')
let text = getRandomSidebarText()

let profileItems = {
    name: 'Masthead',
    prof: 'блог front-end разработчика',
    description: text
}

profileName.innerHTML = profileItems.name
profileProf.innerHTML = profileItems.prof
profileText.innerHTML = profileItems.description