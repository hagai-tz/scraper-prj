const articleManager = new ArticleManager();
const renderer = new Renderer();

$('#sports').on('click', async function() {
  let data = await articleManager.getDataFromDB('Sport');
  renderer.renderData(data);
});


// $('#search-btn').on('click', function() {
//   let articleInput = $('#search-input').val()
//   console.log(articleInput)

// });

$('.btn').on('click', function() {
  let topicInput = $(this).find("i").text();
  console.log(test)

});
