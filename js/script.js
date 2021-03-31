console.log("connection");
var searchBtn = document.querySelector("#searchBtn");
var characterName = " ";

function searchCharacter() {
  characterName = document.getElementById("search-value");
  getCharacterName(characterName);
}

function getCharacterName(characterName) {
  var apiKey = "22cb76a0a50613bcff0104d06cd9ec76";
  var requestUrl =
    "https://gateway.marvel.com:443/v1/public/characters?name=" +
    characterName +
    "&apiKey=" +
    apiKey;
  fetch(requestUrl)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchCharacter();
  console.log("Clicked");
});
