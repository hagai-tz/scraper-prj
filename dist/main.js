const articleManager = new ArticleManager();
const renderer = new Renderer();

<<<<<<< HEAD
$("#business").on("click", async function() {
  let data = articleManager.getDataFromDB(business);
  renderer.renderData(data);
});

$("#entertainment").on("click", async function() {
  let data = articleManager.getDataFromDB(entertainment);
  renderer.renderData(data);
});

$("#general").on("click", async function() {
  let data = articleManager.getDataFromDB(general);
  renderer.renderData(data);
});

$("#health").on("click", async function() {
  let data = articleManager.getDataFromDB(health);
=======
$('#sports').on('click', async function() {
  let data = await articleManager.getDataFromDB('Sport');
>>>>>>> 776b85ed8b24ad10565f5e129b6e848e8266f727
  renderer.renderData(data);
});

$("#science").on("click", async function() {
  let data = articleManager.getDataFromDB(science);
  renderer.renderData(data);
});

$("#technology").on("click", async function() {
  let data = articleManager.getDataFromDB(technology);
  renderer.renderData(data);
});

$("#sports").on("click", async function() {
  let data = articleManager.getDataFromDB(sports);
  renderer.renderData(data);
});

$("#card").on("click", async function() {});
