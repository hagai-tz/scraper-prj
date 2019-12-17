
const $ = require('cheerio')
const puppeteer = require('puppeteer');
//const newsWebURL = `https://edition.cnn.com/sport`;

const bbcSportScrapper = async function(newsWebURL){

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(newsWebURL, { waitUntil: 'networkidle2' })
    const html = await page.content()

    let articleURL = ""
    const articleUrlArray = []
    const ilCount = $('#sport-zone-1 > div.l-container > div.zn__containers > div:nth-child(1) > ul', html).children().length

    for (let index = 2; index < ilCount+1; index++) {
    articleURL = $(`#sport-zone-1 > div.l-container > div.zn__containers > div:nth-child(1) > ul > li:nth-child(${index}) > article > div > div > h3 > a`, html).attr('href')
    articleUrlArray.push(articleURL)
    }
    console.log(articleUrlArray)
    await browser.close()
}

//bbcSportScrapper(newsWebURL)

module.exports = bbcSportScrapper 
