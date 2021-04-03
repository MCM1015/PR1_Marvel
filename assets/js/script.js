console.log("connection");
var characterImage = document.querySelector("#character-image");
var characterBio = document.querySelector("#character-bio");
var characterComics = document.querySelector("#character-comics");
var characterSearch = document.getElementById("search-value");
var characterArray = [];
var searchHistory = $("#search-history");
var youTubeKey = "AIzaSyAysXnmSzRoDDq4Yjg1D_Q7wzmd09wcJaU";

onLoad();

//store in local storage
function storageSet() {
  characterArray.push(characterName);
  localStorage.setItem("charactername", JSON.stringify(characterArray));
}

// get from local storage and append to html on initial load
function onLoad() {
  if (localStorage.getItem("charactername") != "") {
    var characterStore = JSON.parse(localStorage.getItem("charactername"));
    if (characterStore != null) {
      for (var i = 0; i < characterStore.length; i++) {
        var btn = $("<button>");
        btn.text(characterStore[i]);
        searchHistory.append(btn);
        btn.on("click", function (event) {
          characterName = event.target.textContent;
          console.log(characterName);
          youTubeVideo();
        });
      }
    }
  }
}

//append each new search results to html
function onClick() {
  if (localStorage.getItem("characterName") != "") {
    var characterStore = JSON.parse(localStorage.getItem("characterName"));
    if (characterStore != null) {
      var btn = $("<button>");
      btn.text(characterStore[characterStore.length - 1]);
      searchHistory.append(btn);
      btn.on("click", function (event) {
        characterName = event.target.textContent;
        youTubeVideo();
      });
    }
  }
}

//Character name Search
function searchCharacter() {
  characterName = characterSearch.value;
  getAPI(characterName, renderCharacter);
  youTubeVideo();
  storageSet();
  onClick();
}

//search button click
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchCharacter();
  console.log("Clicked");
});

// youTube Character movie trailer
function youTubeVideo() {
  var youTubeAPIurl =
    "https://youtube.googleapis.com/youtube/v3/search?channelId=UCvC4D8onUfXzvjTOM-dBfEA&q=" +
    characterName +
    "%20Movie%20Trailer&key=" +
    youTubeKey;
  fetch(youTubeAPIurl, {})
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var i = Math.floor(Math.random() * data.items.length);
      console.log(i);
      var videoID = data.items[i].id.videoId;
      console.log(videoID);
      var videoSRC = "https://www.youtube.com/embed/" + videoID;
      document.getElementById("video").src = videoSRC;
    });
}

/* function getAPI() {
  var ts = "abcdefghijk";
  var priv_key = "22cb76a0a50613bcff0104d06cd9ec76";
  var pub_key = "c2f699921bff1ced8007cabf50b956ca19c7fee5";
  var hash = CryptoJS.MD5(ts + priv_key + pub_key).toString();
  console.log(hash);
  fetch(
    
    "http://gateway.marvel.com/v1/public/comics?ts=" +
      ts +
      "&apikey=" +
      priv_key +
      "&hash=" +
      hash 
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
getAPI(); */

function getAPI(name, callback) {
  var ts = Date.now();
  console.log(ts);
  fetch(
    "https://gateway.marvel.com:443/v1/public/characters?name=" +
      name +
      "&apikey=22cb76a0a50613bcff0104d06cd9ec76",
    {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      callback(data);
    });
}

function apiCrazy(name, callback) {
  var data = {
    code: 200,
    status: "Ok",
    copyright: "© 2021 MARVEL",
    attributionText: "Data provided by Marvel. © 2021 MARVEL",
    attributionHTML:
      '<a href="http://marvel.com">Data provided by Marvel. © 2021 MARVEL</a>',
    etag: "99fda99d6f725f0e21471d4fcdeeb51d72af6c26",
    data: {
      offset: 0,
      limit: 20,
      total: 1,
      count: 1,
      results: [
        {
          id: 1009664,
          name: "Thor",
          description:
            "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
          modified: "2020-03-11T10:18:57-0400",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
            extension: "jpg",
          },
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009664",
          comics: {
            available: 1768,
            collectionURI:
              "http://gateway.marvel.com/v1/public/characters/1009664/comics",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/43506",
                name: "A+X (2012) #7",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/30090",
                name: "Age of Heroes (2010) #1",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/33566",
                name: "Age of Heroes (2010) #2",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/30092",
                name: "Age of Heroes (2010) #3",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/30093",
                name: "Age of Heroes (2010) #4",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/46852",
                name: "Alpha: Big Time (2013) #4",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/12637",
                name: "Alpha Flight (1983) #1",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/12725",
                name: "Alpha Flight (1983) #61",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/12668",
                name: "Alpha Flight (1983) #127",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/6748",
                name: "The Amazing Spider-Man (1963) #339",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/277",
                name: "Amazing Spider-Man (1999) #500",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/5808",
                name: "Amazing Spider-Man (1999) #538",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/16904",
                name: "Amazing Spider-Man Annual (1964) #3",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/16890",
                name: "Amazing Spider-Man Annual (1964) #16",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/1262",
                name: "Amazing Spider-Man Vol. 6 (Trade Paperback)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/39896",
                name: "Art of Marvel Studios TPB Slipcase (Hardcover)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/32769",
                name: "Astonishing Thor (2010) #1",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/33652",
                name: "Astonishing Thor (2010) #1 (FOILOGRAM VARIANT)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/32771",
                name: "Astonishing Thor (2010) #2",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/32774",
                name: "Astonishing Thor (2010) #3",
              },
            ],
            returned: 20,
          },
          series: {
            available: 507,
            collectionURI:
              "http://gateway.marvel.com/v1/public/characters/1009664/series",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/16450",
                name: "A+X (2012 - 2014)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/9790",
                name: "Age of Heroes (2010)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
                name: "Alpha Flight (1983 - 1994)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/17650",
                name: "Alpha: Big Time (2013)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                name: "Amazing Spider-Man (1999 - 2013)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
                name: "Amazing Spider-Man Annual (1964 - 2018)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/318",
                name: "Amazing Spider-Man Vol. 6 (2004)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/14779",
                name: "Art of Marvel Studios TPB Slipcase (2011 - Present)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/9858",
                name: "Astonishing Thor (2010)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/744",
                name: "Astonishing X-Men (2004 - 2013)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/354",
                name: "Avengers (1998 - 2004)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
                name: "Avengers (1963 - 1996)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/3621",
                name: "Avengers (1996 - 1997)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/22547",
                name: "Avengers (2016 - 2018)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/24229",
                name: "Avengers (2018 - Present)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/9085",
                name: "Avengers (2010 - 2012)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/9859",
                name: "Avengers & the Infinity Gauntlet (2010)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/9086",
                name: "Avengers Academy (2010 - 2012)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/26448",
                name: "Avengers Annual (2001)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/1988",
                name: "Avengers Annual (1967 - 1994)",
              },
            ],
            returned: 20,
          },
          stories: {
            available: 2680,
            collectionURI:
              "http://gateway.marvel.com/v1/public/characters/1009664/stories",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/876",
                name: "THOR (1998) #76",
                type: "cover",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/877",
                name: "Interior #877",
                type: "interiorStory",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/879",
                name: "Interior #879",
                type: "interiorStory",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/880",
                name: "THOR (1998) #77",
                type: "cover",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/881",
                name: "Interior #881",
                type: "interiorStory",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/882",
                name: "THOR (1998) #83",
                type: "cover",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/883",
                name: "Interior #883",
                type: "interiorStory",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/884",
                name: "THOR (1998) #82",
                type: "cover",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/885",
                name: "Interior #885",
                type: "interiorStory",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/886",
                name: "THOR (1998) #78",
                type: "cover",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/887",
                name: "Interior #887",
                type: "interiorStory",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/888",
                name: "THOR (1998) #79",
                type: "cover",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/889",
                name: "Interior #889",
                type: "interiorStory",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/890",
                name: "THOR (1998) #80",
                type: "cover",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/891",
                name: "Interior #891",
                type: "interiorStory",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/892",
                name: "THOR (1998) #81",
                type: "cover",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/893",
                name: "Interior #893",
                type: "interiorStory",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/894",
                name: "THOR (1998) #84",
                type: "cover",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/895",
                name:
                  "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
                type: "interiorStory",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/stories/896",
                name: "THOR (1998) #85",
                type: "cover",
              },
            ],
            returned: 20,
          },
          events: {
            available: 27,
            collectionURI:
              "http://gateway.marvel.com/v1/public/characters/1009664/events",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/116",
                name: "Acts of Vengeance!",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/233",
                name: "Atlantis Attacks",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/234",
                name: "Avengers Disassembled",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/310",
                name: "Avengers VS X-Men",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/235",
                name: "Blood and Thunder",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/296",
                name: "Chaos War",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/238",
                name: "Civil War",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/318",
                name: "Dark Reign",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/246",
                name: "Evolutionary War",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/302",
                name: "Fear Itself",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/252",
                name: "Inferno",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/315",
                name: "Infinity",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/29",
                name: "Infinity War",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/317",
                name: "Inhumanity",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/311",
                name: "Marvel NOW!",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/37",
                name: "Maximum Security",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/263",
                name: "Mutant Massacre",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/154",
                name: "Onslaught",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/319",
                name: "Original Sin",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/events/336",
                name: "Secret Empire",
              },
            ],
            returned: 20,
          },
          urls: [
            {
              type: "detail",
              url:
                "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=22cb76a0a50613bcff0104d06cd9ec76",
            },
            {
              type: "wiki",
              url:
                "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=22cb76a0a50613bcff0104d06cd9ec76",
            },
            {
              type: "comiclink",
              url:
                "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=22cb76a0a50613bcff0104d06cd9ec76",
            },
          ],
        },
      ],
    },
  };
  callback(data);
}
function renderCharacter(apiData) {
  console.log(apiData);
  console.log(apiData.data.results);
  console.log(apiData.data.results[0].description);
  characterBio = apiData.data.results[0].description;
  var credits = "Data provided by Marvel. © 2021 MARVEL";

  //characterBio.append(characterBio);
  $(
    `
            <div>
              <p id="apiBio">${characterBio}</p>
            </div>
          `
  ).appendTo("#character-bio");

  //characterComics.innerHTML = apiData.data.results[0].comics.items[0].name;
  characterImage.innerHTML =
    '<img id="char-image" src="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/portrait_incredible.jpg"/>';

  console.log(characterComics);
  for (var i = 0; i < apiData.data.results[0].comics.items.length; i++) {
    var addComic = apiData.data.results[0].comics.items[i].name;
    var newPara = document.createElement("li");
    console.log(addComic);
    $(`
            <div class="comic-list">
              <p class="c-issue"><strong>${addComic}</strong></p>
            </div>
          `).appendTo("#character-comics");
  }
}

/* $(".c-issue").click(function () {
  alert("clicked");
  $(".character-modal").show();
});
$(".modal-close").click(function () {
  $(".modal-window").hide();
}); */
