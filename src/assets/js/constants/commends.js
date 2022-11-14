export const getCommentsHtml = (item) => {
    return `

         <div class="commends__header">
                    <img class="commends__avatar" src="${item.image}">
                    <div class="commends__author">
                        <div class="commends__name">${item.name}</div>
                        <time class="commends__pubdate" datetime="2020-12-21 19:21">
                            ${item.time}
                        </time>
                    </div>
                </div>
                <div class="commends__text">
                   ${item.text}
                </div>
                <button class="commends__reply" type="button">ответить</button>
    `
}

export const commentsHtml = (item, text, date) => {
    return `
     <div class="commends__header">
                       <img class="commends__avatar" src="${item.image}">
                    <div class="commends__author">
                        <div class="commends__name">${item.name}</div>
                        <time class="commends__pubdate" datetime="2020-12-21 19:21">
                           ${date}
                        </time>
                    </div>
                </div>
                <div class="commends__text">
               ${text}
                </div>
                <button class="commends__reply" type="button">ответить</button>
    `
}

export const getText = () => {
    return `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A, ab accusantium architecto consequuntur dicta doloremque
                    dolores dolorum eaque eos eveniet, ex harum hic illum magni
                    numquam officia rerum tenetur voluptate!
    `
}






