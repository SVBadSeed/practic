export const getHeaderLeftHtml = (item) => {
    return ` 
        <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item">
                             <a class="nav__link" href="#">${item.text}</a>
                        </li>
                        <li class="nav__item">
                             <a class="nav__link has-subnav" href="">${item.article}</a>
                             <ul class="subnav">
                        <li>
                             <a class="subnav__link" href="">${item.text}</a>
                        </li>
                        <li>
                             <a class="subnav__link" href="">${item.text}</a>
                        </li>
                        <li>
                             <a class="subnav__link" href="">${item.text}</a>
                        </li>
                    </ul>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="#">${item.about}</a>
                       </li>
                       <li class="nav__item">
                            <a class="nav__link" href="#">${item.ad}</a>
                       </li>
                    </ul>
        </nav>

        <button class="burger" type="button" id="sidebarToogle">
            <span>
                 Открыть навигацию
            </span>
        </button>
    `
}


export const getHeaderRightHtml = (item) => {
    return `
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <a class="nav__link" href="profile.html">Профиль</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="">Выйти</a>
                </li>
            </ul>
        </nav>
        <form class="search" action="/" method="post">
            <input class="search__input" type="text" placeholder="Поиск по блогу">
        </form>
`
}