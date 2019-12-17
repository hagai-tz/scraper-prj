const express = require('express');
const router = express.Router();
// const request = require('request');

router.get('/check', function(req, res) {
  res.send('Hello World');
});

router.get('/articles/:vertical', async function(req, res) {
  let ver = req.params.vertical;
  let articlesArr = await Article.find({ vertical: ver });
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
    console.log(`${article.title} saved`);
  });
  res.end();
});
module.exports = router;
