const articleManager = new ArticleManager();
const renderer = new Renderer();

$('.btn').on('click', async function() {
  let topicInput = $(this).attr('id');
  console.log(topicInput);
  // let topicInputCap = topicInput.charAt[0].toUpperCase() + topicInput.slice(1);
  let x = await articleManager.getDataFromDB(topicInput);
  renderer.renderData(x);
});

$('#sports').on('click', async function() {
  let x = await articleManager.getDataFromScrapDB('sport');
  renderer.renderScrapData(x);
});

