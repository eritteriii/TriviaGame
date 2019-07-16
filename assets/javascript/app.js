//Global Variables

var timeLeft = 60;
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
    $('#timer').html("Find out how much I hate you in t-minus: " + timeLeft)
    
}

function decrement() {
    timeLeft --;
    //console.log(timeLeft)
    $('#timer').html("Find out how much I hate you in t-minus: " + timeLeft)

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

    else if (score < 15) {
        $('#scorecard').html("You didn't even finish? How? Can you not read?")
    }

    else if (score > 30 && score < 50) {
        $('#scorecard').html("You're not the brightest, maybe a little too prone to following bad advice. Grow a spine.")
    }

    else if (score > 49) {
        $('#scorecard').html("You are without a doubt the worst person I have ever heard of.")
    }

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




//Document Ready

$(document).ready(function () {
    start();
    console.log(timeLeft);
});
