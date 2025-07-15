export function renderAllNews(allnews) {
  return `<section class="news" id="news">
        <h1>News</h1>
        <div class="search" id = "newsSearch">
<input type="search" name='news' placeholder="Search News...">
</div>
        <table class="newsList">
          ${allnews.map((p) => renderNews(p)).join("")}
        </table>
      </section>`;
}

export function renderNews(news) {
  return `<tr>
            <td><strong>${news.title}</strong></td>
            <td>${news.date}</td>
          </tr>`;
}
