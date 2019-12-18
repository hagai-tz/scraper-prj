class ArticleManager {
  constructor() {
    this.ArticlesData = [];
  }

  async getDataFromDB(vertical) {
    let data = await $.get(`/articles/${vertical}`);
    this.ArticlesData = data;
    return data;
  }


async getDataFromAPI(topicInput){
  let articlesArry = await $.post(`/newsapi?q=${topicInput}`)
  console.log(articlesArry)
}
}