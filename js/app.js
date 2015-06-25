
$(document).ready(function(){

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
	// --- Hide information modal box ---
  	
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


// $('.new').click(function() {
//  $()
// }

//   (1)
// function newGame ();


// random number created.
var choice;
var random = Math.random() * 100;
var rightNum = Math.round(random);
// compares generated number to users input
function Guess () {
	console.log(rightNum);
	choice = $('#userGuess').val();
	// choice = $('input:text').val();

	if (choice > rightNum) {
    console.log("North pole..");
    $('h2 > #feedback').hide();
     $('#feedback').append("<p> North pole...</p>");
    alert("You're colder than the North pole...");
    // alert('pengus');
    $('#guessList').append("<li>" + choice + "</li>");
    }
	else if (choice < rightNum)  {
    console.log("Snowed in..");
     $('h2 > #feedback').hide();
     $('#feedback').append("<p>Getting warming</p>");
    alert("Getting Warmer");
     $('#guessList').append("<li>" + choice + "</li>");
    }
    else if (choice = rightNum )  {
    console.log("You're on fire!!");
     $('h2 > #feedback').hide();
     $('#feedback').append("<p>Burning up!");
    alert("You're burning up!");
     $('#guessList').append("<li>" + choice + "</li>");
    }

};
$('#guessButton').on('click', Guess);

});





// var random = Math.random() * 100;
// var rightNum = Math.round(random);
// $('#guessButton').click(function() {


// var choice ;
// function Guess () {
// 	// alert('pengus');
// 	choice = $('#userGuess').val();
// }

// 	 if (choice = ) {
//     console.log("Correct well done!");
// }
//     else  {
//     console.log("Nope!");
//     }
//     $('#guessButton').on('click', Guess);
// });

//   		

// $('#guessButton').click(function (){
// 			$('input:text').val();
// });

// ----

// var random = Math.random() * 100
// var rightNum = Math.round(random)
// // console.log(rightNum);

// 	function userGuess() {
//     if (random < rightNum){
//     console.log("Correct well done!");
// }
//     else  {
//     console.log("Nope!");
//     }
// }
// });
// userGuess()
// $('#guessButton').click(userGuess)