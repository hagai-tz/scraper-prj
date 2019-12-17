class ArticleManager {
  constructor() {
    this.ArticlesData = [];
  }

  async getDataFromDB(vertical) {
    let data = await $.get(`/articles/${vertical}`);
    this.ArticlesData = data;
    return data;
  }
}
