
const $ = require('cheerio')
const puppeteer = require('puppeteer');

const articleUrlArray = []

const linksScrapper = async function(sportSource){

    console.log(`opening headless chrome to scrap links`)

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(sportSource.sportUrl, { waitUntil: 'networkidle2' })
    const html = await page.content()

    let articleURL = ""
    const ilCount = $(sportSource.ilCountUrl, html).children().length

    for (let index = 1; index < ilCount+1; index++) {
        articleURL = $(sportSource.articleUrlStart + index + sportSource.articleUrlEnd, html).attr('href')   
        articleUrlArray.push(articleURL)
        console.log(`scrapping link ${index}`)
    }

    await browser.close()
    return articleUrlArray

}


//linksScrapper(sportSource[1])
 
module.exports = linksScrapper 
