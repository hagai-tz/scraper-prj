const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Document
const ArticleSchema = new Schema({
  vertical: String,
  topic: String,
  author: String,
  content: {},
  date_published: Date,
  domain: String,
  discription: String,
  lead_image_url: String,
  article_img_arr: Array,
  title: String,
  url: String,
  word_count: Number
});

ArticleSchema.index({
  title: 'text',
  discription: 'text',
  author: 'text',
  vertical: 'text'
});

// Collection
const Article = mongoose.model('article', ArticleSchema);
module.exports = Article;
