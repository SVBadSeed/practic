export const getTextPostHtml = (post) => {
    return `
 <div class="post">
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
 </div>
    `
}