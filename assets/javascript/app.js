//Global Variables

var timeLeft = 60;
var intervalId
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var score = 0;
var scoreBoard = document.getElementById("scorecard")

//Timer Functions

function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
    $('#timer').html("Find out how much I hate you in t-minus: " + timeLeft)
    
}

function decrement() {
    timeLeft --;
    $('#timer').html("Find out how much I hate you in t-minus: " + timeLeft)

    if (timeLeft === 0) {
        timeUp();
    }
}


function timeUp() {
    clearInterval(intervalId);
    
    //Weighting the scores
    
    score = (a + (b * 2) + (c * 3) + (d * 4));
    console.log(score)

    //Scorecard
   
    if (score > 14 && score < 31) {
        $('#scorecard').html("Wow, you're.. weirdly a good person? It's kind of creepy, honestly.")
    }

    else if (score < 15) {
        $('#scorecard').html("You didn't even finish? How? Can you not read?")
    }

    else if (score > 30 && score < 50) {
        $('#scorecard').html("You're not the brightest, maybe a little too prone to following bad advice. Grow a spine.")
    }

    else if (score > 49) {
        $('#scorecard').html("You are without a doubt the worst person I have ever heard of.")
    }

   scoreBoard.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});

}



//Click Listeners

$('.a').on("click", function() {
    a++;
    //$('.a').removeClass("a");
    
})

$('.b').on("click", function() {
    b++;
    
})

$('.c').on("click", function() {
    c++;
    
})

$('.d').on("click", function() {
    d++;
    
})

$('#subBtn').on("click", function() {
    timeUp();
})

//API
    
$('#q1').on("click", function(){
    var APIid = "2wYYlHuEw1UcsJYgAA";
    var APIkey = "UvZ4TmXaqh6zfs84N8kVF54lWGklaPWr";
    var queryURL = "https://api.giphy.com/v1/gifs/" + APIid + "?api_key=" + APIkey;
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var giphyURL = response.data.images.fixed_height.url;
        console.log(response);
        var newImg = $("<img>");
        newImg.attr("src", giphyURL);
        $("#q1").html(newImg);
    
    });

})

    $('#q4').on("click", function(){
        var APIid = "MxPSD8QXRhgCA";
        var APIkey = "UvZ4TmXaqh6zfs84N8kVF54lWGklaPWr";
        var queryURL = "https://api.giphy.com/v1/gifs/" + APIid + "?api_key=" + APIkey;
        
        
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            var giphyURL = response.data.images.fixed_height.url;
            console.log(response);
            var newImg = $("<img>");
            newImg.attr("src", giphyURL);
            $("#q4").html(newImg);
        
        });
    })

$('#q6').on("click", function(){
    var APIid = "3ohzdIuqJoo8QdKlnW";
    var APIkey = "UvZ4TmXaqh6zfs84N8kVF54lWGklaPWr";
    var queryURL = "https://api.giphy.com/v1/gifs/" + APIid + "?api_key=" + APIkey;
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var giphyURL = response.data.images.fixed_height.url;
        console.log(response);
        var newImg = $("<img>");
        newImg.attr("src", giphyURL);
        $("#q6").html(newImg);
    
    });
})

$('#q5').on("click", function(){
    var APIid = "d6Ni9aqSatPfq";
    var APIkey = "UvZ4TmXaqh6zfs84N8kVF54lWGklaPWr";
    var queryURL = "https://api.giphy.com/v1/gifs/" + APIid + "?api_key=" + APIkey;
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var giphyURL = response.data.images.fixed_height.url;
        console.log(response);
        var newImg = $("<img>");
        newImg.attr("src", giphyURL);
        $("#q5").html(newImg);
    
    });
})

$('#q2').on("click", function(){
    var APIid = "4UMwhs4FDi0SI";
    var APIkey = "UvZ4TmXaqh6zfs84N8kVF54lWGklaPWr";
    var queryURL = "https://api.giphy.com/v1/gifs/" + APIid + "?api_key=" + APIkey;
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var giphyURL = response.data.images.fixed_height.url;
        console.log(response);
        var newImg = $("<img>");
        newImg.attr("src", giphyURL);
        $("#q2").html(newImg);
    
    });
})

$('#q7').on("click", function(){
    var APIid = "3oeSB1S60hCgcQ5uc8";
    var APIkey = "UvZ4TmXaqh6zfs84N8kVF54lWGklaPWr";
    var queryURL = "https://api.giphy.com/v1/gifs/" + APIid + "?api_key=" + APIkey;
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var giphyURL = response.data.images.fixed_height.url;
        console.log(response);
        var newImg = $("<img>");
        newImg.attr("src", giphyURL);
        $("#q7").html(newImg);
    
    });
})

$('#q12').on("click", function(){
    var APIid = "ejF3VIsGq7YVq";
    var APIkey = "UvZ4TmXaqh6zfs84N8kVF54lWGklaPWr";
    var queryURL = "https://api.giphy.com/v1/gifs/" + APIid + "?api_key=" + APIkey;
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var giphyURL = response.data.images.fixed_height.url;
        console.log(response);
        var newImg = $("<img>");
        newImg.attr("src", giphyURL);
        $("#q12").html(newImg);
    
    });
})

$('#q14').on("click", function(){
    var APIid = "jxi5rIEVKX2p2";
    var APIkey = "UvZ4TmXaqh6zfs84N8kVF54lWGklaPWr";
    var queryURL = "https://api.giphy.com/v1/gifs/" + APIid + "?api_key=" + APIkey;
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var giphyURL = response.data.images.fixed_height.url;
        console.log(response);
        var newImg = $("<img>");
        newImg.attr("src", giphyURL);
        $("#q14").html(newImg);
    
    });
})
//Document Ready

$(document).ready(function () {
    start();
    console.log(timeLeft);
});
