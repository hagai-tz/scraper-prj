const articleManager = new ArticleManager();
const renderer = new Renderer();

$('.btn').on('click', async function() {
  let topicInput = $(this).attr('id');
  console.log(topicInput);
  let x = await articleManager.getDataFromDB(topicInput);
  renderer.renderData(x);
});

$('#sports').on('click', async function() {
  let x = await articleManager.getDataFromScrapDB('sport');
  renderer.renderScrapData(x);
});

$('#search-btn').on('click', async function() {
  let x = $('#search-input').val();
  let y = await articleManager.getDataByKeyWord(x);
  renderer.renderData(y);
});
