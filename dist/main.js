const articleManager = new ArticleManager();
const renderer = new Renderer();

$('#sports').on('click', async function() {
  let data = articleManager.getDataFromDB(sports);
  renderer.renderData(data);
});
