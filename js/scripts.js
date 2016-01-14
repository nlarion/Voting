$(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $("#voting").show();
  } else {
    $("#notVoting").show();
  }
});
