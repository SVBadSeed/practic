export const addPost = (date, text) => {
    return `
     <div class="post__content">
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