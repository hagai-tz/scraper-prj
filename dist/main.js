const articleManager = new ArticleManager();
const renderer = new Renderer();

<<<<<<< Updated upstream
$('#sports').on('click', async function() {
  let data = await articleManager.getDataFromDB('Sport');
  renderer.renderData(data);
});

/*$("document").ready(function() {
  $("h1").fadeIn("slow");
});*/

$(document).ready(function() {
  $(".sidenav").sidenav();
});
=======
// $('#business').on('click', async function() {
//   let data = articleManager.getDataFromDB(business);
//   renderer.renderData(data);
// });

// $('#entertainment').on('click', async function() {
//   let data = articleManager.getDataFromDB(entertainment);
//   renderer.renderData(data);
// });

// $('#general').on('click', async function() {
//   let data = articleManager.getDataFromDB(general);
//   renderer.renderData(data);
// });

// $('#health').on('click', async function() {
//   let data = articleManager.getDataFromDB(health);
//   renderer.renderData(data);
// });

// $('#sports').on('click', async function() {
//   let data = await articleManager.getDataFromDB('Sport');
//   renderer.renderData(data);
// });

// $('#search-btn').on('click', function() {
//   let articleInput = $('#search-input').val()
//   console.log(articleInput)
// });

$('.btn').on('click', async function() {
  let topicInput = $(this).attr('id');
  let x = await articleManager.getDataFromDB(topicInput);
  renderer.renderData(x);
  // $('#article_content').append();
});

// let append = function() {
//   document
//     .getElementById(`#append > #article_content`)
//     .insertAdjacentText(
//       `<div class=\"article-body\"><p class=\"speakable\">David Tepper&apos;s vision of bringing a Major League Soccer team to Charlotte has been realized.</p><p class=\"speakable\">Charlotte was awarded an MLS expansion team on Tuesday by MLS commissioner Don Garber at a news conference in downtown Charlotte. The team will begin play in 2021 and can sign players immediately.</p><p>Tepper owns the NFL&apos;s <a href=\"https://www.foxnews.com/category/sports/nfl/carolina-panthers\">Carolina Panthers</a>, and the team will play its games at Bank of America Stadium, where the Panthers play.</p><p>The city also has the NBA&apos;s <a href=\"https://www.foxnews.com/category/sports/nba/charlotte-hornets\">Charlotte Hornets</a>, but doesn&apos;t have an NHL or MLB team. Tepper hopes that Major League Soccer will fill that void in the summer for sports fans in Charlotte.</p><p>&#x201C;The city is just right for the sport,&#x201D; Tepper said. &#x201C;We have had (soccer) games here and there was pretty good support for the sport. We think we can build a really good fan base. The city needs a sport during that (summer) period.&quot;</p><p>Tepper promised that &#x201C;we are going to make Charlotte rock on Saturday nights.&#x201D;</p><p>Tepper will hope to build on the city&apos;s strong Hispanic population. When Mexico has played here in the CONCACAF Gold Cup in the past, it has drawn more than 50,000 fans to Bank of America Stadium, many who come with the Mexican flag draped around them.</p><p>&#x201C;They are traditionally very big soccer fans and you see them when you have the Mexico games here,&#x201D; Tepper said. &#x201C;They will fill the stadium or half-fill the stadium. So I think that is very much an untapped market. ... We have a great location to bring out those fans.&quot;</p><p>The team name has not been established yet, but should be announced in the spring. Some of the names under consideration are Charlotte FC, Charlotte Crown FC, Charlotte Fortune FC and Charlotte Monarchs.</p><p>Garber said the league positions itself as a league for a &#x201C;new America&#x201D; made up of young millennials, and he said Charlotte fits that mold.</p><p>&#x201C;That&apos;s really what our brand stands for and that new America lives right here in Charlotte,&#x201D; Garber said.</p><p>Thirty percent of MLS&apos; fan base is made up of Hispanic fans.</p><p>&#x201C;This is going to have a high index of diverse communities as a percentage of the fan base,&quot; Garber said. &quot;It&apos;s one of the things that attracted us to Charlotte.&#x201D;</p><p>Tepper said he hopes to match some of the success &#x2014; and perhaps exceed &#x2014; what Atlanta&apos;s MLS franchise has enjoyed over the past few years. Tepper also did his best to start a new rival with its Interstate-85 opponent four hours down the road.</p><p>&#x201C;Charlotte is hot!&#x201D; Tepper said at the news conference.</p><p>When Tepper bought the Panthers from Jerry Richardson in 2018, he said during his introductory press conference that he wanted to bring an MLS team to Charlotte in the near future. He quickly hired Tom Glick, who has a background with MLS, as the team&apos;s president as part of that vision.</p><p>Eighteen months later, he has succeeded in landing a team.</p><p>The 62-year-old Tepper says soccer is &#x201C;in my blood.&#x201D; He grew up playing soccer in Pittsburgh, watch as a fan and has coached youth soccer teams. He also joked that he tore an ACL in his knee playing soccer at 45.</p><p>&#x201C;I&apos;ve said it before, Charlotte loves a party, and this will be a two-hour party,&#x201D; Tepper said. &#x201C;And there&apos;s nothing like it in sports. It&apos;s a totally different experience.&#x201D;</p><p>Tepper said he&apos;ll aim to get a general manager and coach in place within the next month or so.</p><p>Charlotte is one six teams joining the league over the next three years. Nashville and Miami will join in 2020, Charlotte and Austin, Texas in 2021 and then Sacramento and St. Louis will begin play in 2022.</p><p>Garber indicated the league, which will stand at 30 teams by 2022, is likely done with expansion for a while.</p><p>Garber also confirmed that the expansion fee price tag for the new Charlotte franchise was between $300 million and $325 million.</p><p>&#x201C;Dave really wanted a team,&#x201D; Garber said.</p></div>`
//     );
// };

// $('#science').on('click', async function() {
//   let data = articleManager.getDataFromDB(science);
//   renderer.renderData(data);
// });

// $('#technology').on('click', async function() {
//   let data = articleManager.getDataFromDB(technology);
//   renderer.renderData(data);
// });

// $('#sports').on('click', async function() {
//   let data = articleManager.getDataFromDB(sports);
//   renderer.renderData(data);
// });

// $('#card').on('click', async function() {});
>>>>>>> Stashed changes
