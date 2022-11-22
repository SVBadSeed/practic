export const getTextPostHtml = (post) => {
    return `
     <button class="post__button-close" type="button">
     </button>
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
                 <a class="post__category" href="#">${post.category}</a>
               </li>
        </ul>
        <div>
          <button class="post__button-refresh">
            Редактировать
            </button>
        </div>
    </div>
    `
}

export const getImagePostHtml = (post) => {
    return `
 <button class="post__button-close" type="button">     
     </button> 
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
                    <a class="post__category" href="#">${post.category}</a>
                </li>
            </ul>
            <div>
            <button class="post__button-refresh">
            Редактировать
            </button>
            <a class="post__read" href="#"> ${post.read}</a>
            </div>
        </div>   
    `
}

export const getVideoPostHtml = (post) => {
    return `
 <button class="post__button-close" type="button">
     </button>
          <div class="post__header">
              <div class="embed">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/0QKQlf8r7ls"
                          frameborder="0" allow="accelerometer; autoplay;
                   clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen></iframe>
              </div>
          </div>
          <div class="post__content">
              <h2 class="post__title">
                  <a href="post.html">
                     ${post.title}
                  </a>
              </h2>
          </div>

          <div class="post__footer">
              <ul class="post__data">
                  <li class="post__data-item">
                      <time datetime="2020-06-21">
                          21.06.2020
                      </time>
                  </li>
                  <li class="post__data-item">
                      <a href="">продвижение видео</a>
                  </li>
              </ul>
              <a class="post__read" href="#">оставить комментарий</a>
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
