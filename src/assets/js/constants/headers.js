export const getHeaderLeftHtml = (item) => {
    return `
 <a class="nav__link" href=${item.link}>${item.title}</a>
    `
}


export const getHeaderRightHtml = (item) => {
    return `
<a class="nav__link" href=${item.link}>${item.profile}</a>
`
}


export const getSearchContentHtml = () => {
    return `
       <input class="search__input" type="text" placeholder="Поиск по блогу">
    `
}
