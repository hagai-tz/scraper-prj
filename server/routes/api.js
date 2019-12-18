const express = require('express');
const router = express.Router();
// const request = require('request');
const Article = require('../model/Article');

<<<<<<< Updated upstream
=======
//new packages for Mercury
const Mercury = require('@postlight/mercury-parser');

>>>>>>> Stashed changes
router.get('/check', function(req, res) {
  res.send('Hello World');
});

router.get('/articles/:vertical', async function(req, res) {
  let vertical = req.params.vertical;
  // let verCap = vertical.charAt(0).toUpperCase() + vertical.slice(1);
  let articlesArr = await Article.find({ vertical /* : vertical */ });
  res.send(articlesArr);
});

<<<<<<< Updated upstream
router.post('/articles', function(req, res) {
  let article = req.body;

  let newArticle = new Article({
    vertical: article.vertical,
    topic: article.topic,
    author: article.author,
    content: article.content,
    date_published: article.date_published,
    domain: article.domain,
    discription: article.discription,
    lead_image_url: article.lead_image_url,
    title: article.title,
    url: article.url,
    word_count: article.word_count
  });
  newArticle.save().then(function(article) {
    console.log(`${article.vertical} saved`);
  });
  res.end();
=======
// router.post('/articles', function(req, res) {
//   let article = req.body;

//   let newArticle = new Article({
//     vertical: article.vertical,
//     topic: article.topic,
//     author: article.author,
//     content: article.content,
//     date_published: article.date_published,
//     domain: article.domain,
//     discription: article.discription,
//     lead_image_url: article.lead_image_url,
//     title: article.title,
//     url: article.url,
//     word_count: article.word_count
//   });
//   newArticle.save().then(function(article) {
//     console.log(`${article.vertical} saved`);
//   });
//   res.end();
// });

router.post('/newsapi', async function(req, res) {
  newsAPIKey = '0b8fc17ccb004aa0b44543dab7dbb353';
  let topic = req.query.q;
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=${newsAPIKey}`;

  request(url, async function(err, response) {
    let articleArrData = JSON.parse(response.body);
    // console.log(articleArrData.articles);

    articleArrData.articles.forEach(async a => {
      let newApiArticle = new Article({
        vertical: topic,
        topic: null,
        date_published: a.publishedAt,
        author: a.author,
        title: a.title,
        domain: a.source.name,
        discription: a.description,
        lead_image_url: a.urlToImage,
        url: a.url,
        content: await Mercury.parse(a.url, { contentType: 'Markdown' }),
        word_count: null,
        content2: null
      });

      newApiArticle.save();
      res.end();
    });
  });
});

router.get('/mc-article', async function(req, res) {
  const MCurl = req.query.MCurl;
  // console.log(MCurl);
  let article = await Mercury.parse(MCurl, { contentType: 'Markdown' });
  // console.log(article.content);
>>>>>>> Stashed changes
});

module.exports = router;
