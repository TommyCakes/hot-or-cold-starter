
$(document).ready(function(){

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
	// --- Hide information modal box ---
  	
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


// random number created.
var choice;
var random = Math.random() * 100;
var rightNum = Math.round(random);
console.log(rightNum)

// function newGame ();

$('#new').on('click', function(){
  random = Math.random() * 100;
  rightNum = Math.round(random);
  // $('#updated-guess').show();
  // $('#guessList').addClass('hidden').hide();
})
// Need to add : hide and show for userFeedback.

//Need function to update count for number of guesses.
 // $('#count') add ++...
 //:( :()) :
 var count= 1;
 $('#guessButton').click(function() {
    $('#count').html(count++);
    
 });
// compares generated number to users input
function guess () {
	console.log(rightNum);

	choice = $('#userGuess').val();
  console.log(Math.abs(choice - rightNum))
	// choice = $('input:text').val();
  var abs = Math.abs(choice - rightNum);

	if (abs > 50) {
    console.log("North pole..");
    $('#feedback').addClass('hidden').hide();
     $('#updated-guess').removeClass('hidden').html("Cold").show();
    // alert("You're colder than the North pole...");
    // alert('pengus');
     $('#guessList').append("<li>" + choice + "</li>");
    }
	else if (abs > 25) {
    console.log("Snowed in..");
    // change all to better syntax // .removeClass()
     $('#feedback').addClass('hidden').hide();
     $('#updated-guess').removeClass('hidden').html("Slightly Warmer").show()
     // $('#updated-guess').html("Warmer");
      $('#guessList').append("<li>" + choice + "</li>");

    // alert("Getting Warmer"); 
    }
    else if (abs > 10)  {
    console.log("Snowed in..");
    // change all to better syntax // .removeClass()
      $('#feedback').addClass('hidden').hide();
     $('#updated-guess').removeClass('hidden').html("Getting Closer").show();
     // $('#updated-guess').html("Closer..");
    // alert("Getting Warmer"); 
     $('#guessList').append("<li>" + choice + "</li>");
    }
    else if (abs > 5)  {
    console.log("Snowed in..");
    // change all to better syntax // .removeClass()
      $('#feedback').addClass('hidden').hide();
     $('#updated-guess').removeClass('hidden').html("Pretty Hot!").show();
     // $('#updated-guess').html("Getting hotter!");
    // alert("Getting Warmer"); 
     $('#guessList').append("<li>" + choice + "</li>");
    }
     else if (abs > 0 && abs <= 5)  {
    console.log("Snowed in..");
    // change all to better syntax // .removeClass()
      $('#feedback').addClass('hidden').hide();
     $('#updated-guess').removeClass('hidden').html("You're burning up!").show();
     // $('#updated-guess').html("You're burning up!");
    // alert("Getting Warmer"); 
     $('#guessList').append("<li>" + choice + "</li>");
  }
    else if (choice == rightNum )  {
    alert("You got IT!!!")
     $('#feedback').addClass('hidden').hide();
     $('#updated-guess').removeClass('hidden').html("You GOT IT!!").show();
    // alert("You're burning up!");
     $('#guessList').append("<li>" + choice + "</li>");
    
}
};
$('#guessButton').on('click', guess);

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