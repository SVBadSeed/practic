export const getTextPostHtml = (post) => {
    return `
    <div class="post__content">
       <p class="post__description">
           ${post.text}
       </p>
    </div>
    <div class="post__footer">
        <ul class="post__data">
            <li class="post__data-item">
                 <time datetime="2020-06-21">
                   ${post.date}
                </time>
            </li>
        </ul>
    </div>
    `
}

export const getImagePostHtml = (post) => {
    return `
  <div class="post__header post__header--preview">
            <a href="post.html">
                <img class="post__image" src="assets/images/post-2.jpg"
                     alt="Как писать код быстро и безболезненно?">
            </a>
        </div>
        <div class="post__content">
            <h2 class="post__title">
                <a href="post.html">
                   ${post.title}
                </a>
            </h2>
            <p class="post__description">
               ${post.text}
            </p>
        </div>

        <div class="post__footer">
            <ul class="post__data">
                <li class="post__data-item">
                    <time datetime="2020-06-21">
                      ${post.date}
                    </time>
                </li>
                <li class="post__data-item">
                    <a href="#">${post.dataItem}</a>
                </li>
            </ul>
            <a class="post__read" href="#"> ${post.read}</a>
        </div>   
    `
}

export const getVideoPostHtml = (post) => {
    return `
    <div class="post__header post__header--preview">
            <a href="post.html">
                <img class="post__image" src="assets/images/post-2.jpg"
                     alt="Как писать код быстро и безболезненно?">
            </a>
        </div>
        <div class="post__content">
            <h2 class="post__title">
                <a href="post.html">
                   ${post.title}
                </a>
            </h2>
            <p class="post__description">
               ${post.text}
            </p>
        </div>

        <div class="post__footer">
            <ul class="post__data">
                <li class="post__data-item">
                    <time datetime="2020-06-21">
                      ${post.date}
                    </time>
                </li>
                <li class="post__data-item">
                    <a href="#">${post.dataItem}</a>
                </li>
            </ul>
            <a class="post__read" href="#"> ${post.read}</a>
        </div>   
`
}

export const getRandomPostText = () => {
    return 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Elementum ' +
        'volutpat orci turpis urna. Et vestibulum,' +
        'posuere tortor lacinia sit. Sagittis' +
        'porttitor orci auctor in at tincidunt' +
        'arcu egestas. Fusce arcu sodales lacinia ' +
        'eu auctor nunc nam id. Diam sit sed volutpat ' +
        'massa. Egestas ornare vel volutpat. '
}
