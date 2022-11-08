export const getRelatedHtml = (item) => {
    return `
      <h4 class="related__list-title">
                        <a href="#"> ${item.link}</a>
                    </h4>
                    <time class="related__list-date" datetime="2020-06-21 19:43">${item.time}</time>
  
    `
}