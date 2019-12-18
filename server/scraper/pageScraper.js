
const cheerio = require('cheerio')
const puppeteer = require('puppeteer')


const pageScraper = async (articleUrl, magazine) => {

  console.log(`opening headless chrome to scrap page`)

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(articleUrl);
    const html = await page.content()

    let $ = cheerio.load(html)
    
    let topic
    let author
    let date
    let bodyFull
    let bodyClean
    let content
    let imgSrc 
    
    if (magazine == 'cnn') {
      content = $('.zn-body__paragraph').text()
      imgSrc = $('.media__image.media__image--responsive').attr('data-src-medium')
      topicTest = $("body > div.pg-right-rail-tall.pg-wrapper > article > div.l-container").text()
      topic = $("body > div.pg-right-rail-tall.pg-wrapper > article > div.l-container > h1").text()
      author = $("body > div.pg-right-rail-tall.pg-wrapper > article > div.l-container > div.metadata > div.metadata__info.js-byline-images > p.metadata__byline > span").text()
      date = $("body > div.pg-right-rail-tall.pg-wrapper > article > div.l-container > div.metadata > div.metadata__info.js-byline-images > p.update-time").text()
    }

    
    if (magazine == 'nbc') {
          topic = $('.entry-title').text()
          author = $("article > header > div > span.byline").text()
          date = $("#post-2704258 > header > div > span.posted-on > span").text()
          bodyFull = $("#post-2704258 > div").html()
          $ = cheerio.load(bodyFull)
          $('body > div.tpContainer').remove()

          if ($.html()) {
            content = $.html()
          }else{
            content = bodyFull
          }
        }

    str = content
    str = str.replace(/(^\s*)|(\s*$)/gi,"")
    str = str.replace(/[ ]{2,}/gi," ")
    str = str.replace(/\n /,"\n")
    let word_count = str.split(' ').length

    let articleObj = {
        vertical: 'sport',
        topic: "",
        author: author,
        content: content,
        date_published: date,
        domain: "",
        description: "",
        lead_image_url: imgSrc,
        title: topic,
        url: articleUrl,
        word_count: word_count
    }

    browser.close();
    return  articleObj
}


module.exports = pageScraper 
