let search = document.querySelector('.search__input')

search.addEventListener('keyup', event => {
    let value = event.target.value.toLowerCase()
    let itemPosts = document.querySelectorAll('.post__title')
    itemPosts.forEach(elem => {
        if (elem.textContent.toLowerCase().includes(value)) {
            elem.parentNode.parentNode.style.display = 'block'
        } else {
            elem.parentNode.parentNode.style.display = 'none'
        }
    })
})