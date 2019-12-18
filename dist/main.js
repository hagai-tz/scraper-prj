const articleManager = new ArticleManager();
const renderer = new Renderer();

$("#sports").on("click", async function() {
  let data = articleManager.getDataFromDB(sports);
  renderer.renderData(data);
});

/*$("document").ready(function() {
  $("h1").fadeIn("slow");
});*/

$(document).ready(function() {
  $(".sidenav").sidenav();
});
