console.log("connection");

var ts = Date.now();
console.log(ts);

fetch(
  "https://gateway.marvel.com:443/v1/public/characters?name=thor&apikey=22cb76a0a50613bcff0104d06cd9ec76",

  {
    // referrer: "https://developer.marvel.com/fake.html",
    // referrerPolicy: "origin",
    mode: "cors",
    //credentials: "include",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    cache: "no-cache",
  }
);
