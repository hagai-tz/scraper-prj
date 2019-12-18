const express = require('express');
const router = express.Router();
// const request = require('request');
const Article = require('../model/Article');

router.get('/check', function(req, res) {
  res.send('Hello World');
});

router.get('/articles/:vertical', async function(req, res) {
  let vertical = req.params.vertical;
  let verCap = vertical.charAt(0).toUpperCase() + vertical.slice(1);
  let articlesArr = await Article.find({ vertical: verCap });
  res.send(articlesArr);
});

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
});

module.exports = router;
