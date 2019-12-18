const page = require('./pageScraper')
const link = require('./linkScraper')

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
     articleUrlEnd: ') > article > div > div > h3 > a',
     urlAddtoStart: 'https://edition.cnn.com/'
     //needs to add 1 to CNN counter + add url part https://edition.cnn.com
    }
]

articleObjArray = [];

const mainScraper = async function(){
    let obj 
    let linkArray = await link(sportSource[1])
    for (let index = 0; index < linkArray.length; index++) {
        linkArray[index]='https://edition.cnn.com'+linkArray[index]
    }
//linkArray.length
    for (let index = 0; index <3; index++) {
        obj = await page(linkArray[index], 'cnn')
        console.log(`scraped ${index} pages`)
        articleObjArray.push(obj)
    }
    console.log('done scrapping pages')
    return articleObjArray
}

module.exports = mainScraper