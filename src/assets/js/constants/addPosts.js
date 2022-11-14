export const addPost = (date, text, title) => {
    return `
  <button class="post__button-close" type="button">
     </button>
     <div class="post__content">
      <h2 class="post__title">
                <a href="post.html">
                   ${title}
                </a>
            </h2>
       <p class="post__description">
          ${text}
       </p>
    </div>
    <div class="post__footer">
        <ul class="post__data">
            <li class="post__data-item">
                 <time datetime="2020-06-21">
                 ${date}
                </time>
            </li>
        </ul>
    </div>
    `
}