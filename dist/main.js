const articleManager = new ArticleManager();
const renderer = new Renderer();

$(".btn").on("click", async function() {
  let topicInput = $(this).attr("id");
  let x = await articleManager.getDataFromDB(topicInput);
  renderer.renderData(x);
});

$('#sports').on('click', async function() {
  let x = await articleManager.getDataFromScrapDB('sport');
  renderer.renderScrapData(x);
});
