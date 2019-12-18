class ArticleManager {
  async getDataFromDB(vertical) {
    let data = await $.get(`/articles/${vertical}`);
    return data;
  }

  async getDataFromAPI(topicInput) {
    let articlesArry = await $.post(`/newsapi?q=${topicInput}`);
    console.log(articlesArry);
  }

  async getDataFromScrapDB() {
    let data = await $.get(`/scrap/sport`);
    return data;
  }
}
