const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Document
const ArticleSchema = new Schema({
  vertical: String,
  topic: String,
  author: String,
  content: Array,
  date_published: Date,
  domain: String,
  description: String,
  lead_image_url: String,
  title: String,
  url: String,
  word_count: Number
});

// Collection
const Article = mongoose.model("article", ArticleSchema);
module.exports = Article;
