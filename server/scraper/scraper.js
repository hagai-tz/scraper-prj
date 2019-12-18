
const $ = require('cheerio')
const puppeteer = require('puppeteer');

const articleUrlArray = []
const sportSource = [
        {SourceName: 'NBC', 
         sportUrl:"https://www.nbcsports.com/", 
         ilCountUrl:"#block-bean-homepage-headline-stack > div > div > ul",
         articleUrlStart:'#block-bean-homepage-headline-stack > div > div > ul > li:nth-child(',
         articleUrlEnd: ') > a'
        },
        {SourceName: 'CNN', 
         sportUrl:"https://edition.cnn.com/sport", 
         ilCountUrl:"#sport-zone-1 > div.l-container > div.zn__containers > div:nth-child(1) > ul",
         articleUrlStart:'#sport-zone-1 > div.l-container > div.zn__containers > div:nth-child(1) > ul > li:nth-child(',
         articleUrlEnd: ') > article > div > div > h3 > a'
         urlAddtoStart: 'https://edition.cnn.com/'
         //needs to add 1 to CNN counter + add url part https://edition.cnn.com
        }
]

const linksScrapper = async function(sportSource){

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(sportSource.sportUrl, { waitUntil: 'networkidle2' })
    const html = await page.content()

    let articleURL = ""
    const ilCount = $(sportSource.ilCountUrl, html).children().length

    for (let index = 1; index < ilCount+1; index++) {
        articleURL = $(sportSource.articleUrlStart + index + sportSource.articleUrlEnd, html).attr('href')   
        articleUrlArray.push(articleURL)
    }
    console.log(articleUrlArray)

    await browser.close()
}

//linksScrapper(sportSource[1])
 
module.exports = linksScrapper 
