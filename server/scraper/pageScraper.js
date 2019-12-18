
const cheerio = require('cheerio')
const puppeteer = require('puppeteer')


const pageScraper = async (articleUrl, magazine) => {
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
    
    if (magazine == 'cnn') {
      //let test = $('.zn-body__paragraph.speakable')
      let test = $('.zn-body__paragraph')

      topicTest = $("body > div.pg-right-rail-tall.pg-wrapper > article > div.l-container").text()

      topic = $("body > div.pg-right-rail-tall.pg-wrapper > article > div.l-container > h1").text()
      author = $("body > div.pg-right-rail-tall.pg-wrapper > article > div.l-container > div.metadata > div.metadata__info.js-byline-images > p.metadata__byline > span").text()
      date = $("body > div.pg-right-rail-tall.pg-wrapper > article > div.l-container > div.metadata > div.metadata__info.js-byline-images > p.update-time").text()
      //bodyFull = $("#body-text > div.l-container").html()
      //$ = cheerio.load(bodyFull)
      $('body > div.zn-body__read-all .el__leafmedia.el__leafmedia--twitter').remove()
      bodyClean = $.html()
    }

    
    if (magazine == 'nbc') {
          topic = $('.entry-title').text()
          author = $("article > header > div > span.byline").text()
          date = $("#post-2704258 > header > div > span.posted-on > span").text()
          bodyFull = $("#post-2704258 > div").html()
          $ = cheerio.load(bodyFull)
          $('body > div.tpContainer').remove()

          if ($.html()) {
              bodyClean = $.html()
          }else{
            bodyClean = bodyFull
          }
          
        }
    

    let articleObj = {
        vertical: 'sport',
        topic: "",
        author: author,
        content: bodyClean,
        date_published: date,
        domain: "",
        description: "",
        lead_image_url: "",
        title: topic,
        url: articleUrl,
        word_count: ""
    }

    browser.close();
    return  articleObj
}


module.exports = pageScraper 
