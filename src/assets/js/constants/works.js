export const getRandomWorkText = () => {
    return 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Elementum ' +
        'volutpat orci turpis urna. Et vestibulum,' +
        'posuere tortor lacinia sit. Sagittis' +
        'porttitor orci auctor in at tincidunt' +
        'arcu egestas. Fusce arcu sodales lacinia ' +
        'eu auctor nunc nam id. Diam sit sed volutpat ' +
        'massa. Egestas ornare vel volutpat. '
}


export const getContentWorkHtml = (item) => {
    return `
     <div class="work__preview">
            <picture>
                <source class="work__source" srcset="https://placehold.co/575x200"
                        media="(max-width: 575px)">
                   <img src="${item.image}" alt="">
            </picture>
        </div>
        
        <div class="work__content">
            <h2 class="work__title">
                <a href="#" target="_blank">${item.title}</a>
            </h2>
            <div class="work__description">
                <p>
                ${item.text}
                </p>
            </div>
            <ul class="tags">
              
            </ul>
            <div class="work__footer">
                <a class="btn btn--blue btn--rounded btn--sm" href="#"
                   target="_blank"> ${item.link}
                </a>
            </div>
        </div>
    `
}