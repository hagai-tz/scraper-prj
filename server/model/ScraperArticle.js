const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScraperSchema = new Schema({

    vertical: String,
    topic: String,
    author: String,
    content: Array,
    date_published: String,
    domain: String,
    description: String,
    lead_image_url: String,
    article_img_arr: Array,
    title: String,
    url: String,
    word_count: Number,

})


const ScraperArticle = mongoose.model("scraper", ScraperSchema);
module.exports = ScraperArticle;

