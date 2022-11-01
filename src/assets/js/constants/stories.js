export const getStories = (item) => {
    return `
   ${item.image}
             <div class="stories__title">
           ${item.title}
            </div>
        <time class="stories__date"
              datetime="2020-09-21 19:57">
             ${item.time}
        </time>
`
}