const api_url = "https://api.quotable.io/random";
const quoteBox = document.getElementById("quote");
const authorName = document.getElementById("author");
const newQuote = document.getElementById("new");

async function fetchQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  quoteBox.innerHTML = data.content;
  authorName.innerHTML = data.author;
}
fetchQuote(api_url);

newQuote.addEventListener("click", (e) => {
  e.preventDefault();
  fetchQuote(api_url);
});

function linked() {
    window.open("https://www.linkedin.com/feed/?shareActive=true&text=" + quoteBox.innerHTML + "--- By --- " + authorName.innerHTML, "LinkedIn Window", "width=600, height=300")
}
