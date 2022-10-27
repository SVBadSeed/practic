let pagination = document.querySelector('.pagination__container')

let paginationCount = 3

for (let i = 1; i <= paginationCount; i++) {
    let li = document.createElement('li')
    li.classList.add('pagination__item')
    pagination.append(li)

    let a = document.createElement('a')
    a.classList.add('pagination__link')
    a.innerHTML = `${i}`
    if (i === 2) {
        a.classList.add('active')
    }
    li.appendChild(a)

}

