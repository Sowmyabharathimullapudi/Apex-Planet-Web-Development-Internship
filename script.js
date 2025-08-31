const newsContainer = document.getElementById("news-container");
const searchInput = document.getElementById("searchInput");

// 🔑 Your API key from https://newsapi.org
const API_KEY = "YOUR_API_KEY";  
const BASE_URL = "https://newsapi.org/v2/everything";

async function getNews() {
  const query = searchInput.value || "latest";
  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&language=en&apiKey=${API_KEY}`;

  newsContainer.innerHTML = "<p>Loading news...</p>";

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("API response:", data); // Debugging

    if (data.status !== "ok") {
      newsContainer.innerHTML = `<p>Error: ${data.message || "Failed to fetch news."}</p>`;
      return;
    }

    if (!Array.isArray(data.articles) || data.articles.length === 0) {
      newsContainer.innerHTML = "<p>No news found. Try another keyword.</p>";
      return;
    }

    newsContainer.innerHTML = data.articles
      .map(article => `
        <div class="news-card">
          <img src="${article.urlToImage || 'https://via.placeholder.com/300x160'}" alt="News Image">
          <div class="content">
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read More</a>
          </div>
        </div>
      `)
      .join("");
  } catch (error) {
    console.error("Error fetching news:", error);
    newsContainer.innerHTML = "<p>Oops! Could not load news.</p>";
  }
}

// Load default news on page load
getNews();
