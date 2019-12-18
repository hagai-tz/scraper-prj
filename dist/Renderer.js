class Renderer {
  renderData(data) {
    const source = $("#article-template").html();
    const template = Handlebars.compile(source);
    const someHTML = template(data);
    $("#append")
      .empty()
      .append(someHTML);
  }
  renderScrapData(data) {
    const source = $('#articleScrap-template').html();
    const template = Handlebars.compile(source);
    const someHTML = template(data);
    $('#append')
      .empty()
      .append(someHTML);
  }
}
