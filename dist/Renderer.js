class Renderer {
  renderData(data) {
    const source = $("#article-template").html();
    const template = Handlebars.compile(source);
    const someHTML = template({ data });
    $("#article-template").append(someHTML);
  }
}
