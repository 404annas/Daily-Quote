const api_url = "https://api.quotable.io/random";
const random_api_url = "https://api.quotable.io/random";
const quoteBox = document.getElementById("quote");
const authorName = document.getElementById("author");
const newQuote = document.getElementById("new");
const inputBox = document.getElementById("input-box");
const searchBtn = document.getElementById("search");

async function fetchQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  quoteBox.innerHTML = data.content;
  authorName.innerHTML = data.author;
}
fetchQuote(api_url);

async function getRandomQuote(query) {
  const response2 = await fetch(`${random_api_url}?tags=${query}`);
  const data2 = await response2.json();
  console.log(data2);

  quoteBox.innerHTML = data2.content;
  authorName.innerHTML = data2.author;
}

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (inputBox.value === "") {
    alert("Please Write A Keyword To Search A Quote For");
  } else {
    await getRandomQuote(inputBox.value);
    inputBox.value = "";
  }
});

newQuote.addEventListener("click", (e) => {
  e.preventDefault();
  fetchQuote(api_url);
});

function linked() {
  window.open(
    "https://www.linkedin.com/feed/?shareActive=true&text=" +
      quoteBox.innerHTML +
      "--- By --- " +
      authorName.innerHTML,
    "LinkedIn Window",
    "width=600, height=300"
  );
}
