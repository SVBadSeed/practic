let posts = document.querySelector('.post__js1')
let text = 'Lorem ipsum dolor sit amet, ' +
    'consectetur adipiscing elit. Elementum ' +
    'volutpat orci turpis urna. Et vestibulum,' +
    ' posuere tortor lacinia sit. Sagittis' +
    ' porttitor orci auctor in at tincidunt' +
    ' arcu egestas. Fusce arcu sodales lacinia ' +
    'eu auctor nunc nam id. Diam sit sed volutpat ' +
    'massa. Egestas ornare vel volutpat. '
let postContent = [
    {
        text: text,
        date: '13.06.2015'
    },
    {
        text: text,
        date: '26.09.2017'
    },
    {
        text: text,
        date: '7.01.2022'
    },
    {
        text: text,
        date: '1.01.2023'
    }

]


postContent.forEach(post => {
    let div = document.createElement('div')

    div.innerHTML = `
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
    posts.appendChild(div)
})



















