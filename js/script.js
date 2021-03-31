
//key = AIzaSyAysXnmSzRoDDq4Yjg1D_Q7wzmd09wcJaU
var youTubeAPIurl = 'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAysXnmSzRoDDq4Yjg1D_Q7wzmd09wcJaU';

fetch(youTubeAPIurl, {
}).then(function (response) {
    console.log(response);
    return response.json();
})
    .then(function (data) {
        console.log('YouTube data');
        console.log(data);
    });


var videoID = "tmeOjFno6Do";

// code copied from iframe api page: 
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: videoID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
    function stopVideo() {
        player.stopVideo();
    }
}
/* <iframe width="560" height="315" src="https://www.youtube.com/embed/JOddp-nlNvQ"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe> */


