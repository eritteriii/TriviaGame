//Global Variables

var timeLeft = 10;
var intervalId
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var score = 0;

//Timer Functions

function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
    
}

function decrement() {
    timeLeft --;
    console.log(timeLeft)

    if (timeLeft === 0) {
        timeUp();
    }
}

function timeUp() {
    clearInterval(intervalId);
    score = (a + (b * 2) + (c * 3) + (d * 4));
    console.log(score)

    //Scorecard
   
    if (score > 14 && score < 31) {
        $('#scorecard').html("Wow, you're.. weirdly a good person? It's kind of creepy, honestly")
    }
    else if (score > 30 && score < 46) {
        $('#scorecard').html("You're not the brightest, maybe a little too prone to following bad advice. Grow a spine.")
    }
    else if (score > 45 && score < 61) {
        $('#scorecard').html("You are without a doubt the worst person I have ever heard of.")

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

if (score > 15 && score < 30) {
    $('#scorecard').html("You are a gentleman and a scholar, I deem thee worthy.")
}



//Document Ready

$(document).ready(function () {
    start();
    console.log(timeLeft);
});
