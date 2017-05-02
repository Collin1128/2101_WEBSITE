/*
  A. Cervantes, T. Clark, D. Lenselink, C. Mathiason, K. Smeaton
  CWEB 2101 - Prof. Merns
  2017-04-25
*/

// GLOBAL DECLARATIONS
  var $button = $('#email_button');

$(document).ready(function() {  
  for(var y = 0; y < faq.length ; y++) {    
    // Question
    var newQuestion = document.createElement('div');
      newQuestion.className = "col-12 text-purple";
      newQuestion.innerHTML = faq[y].question;
      newQuestion.style.height = "10em";
      newQuestion.style.margin = "0em 0em 6em 0em";
      newQuestion.style.fontWeight = "bolder";
      document.getElementById('faq_left').appendChild(newQuestion);      
    // Answer
    var newAnswer = document.createElement('div');
      newAnswer.className = "col-12 text-blue";
      newAnswer.innerHTML = faq[y].answer;
      newAnswer.style.height = "10em";
      newAnswer.style.margin = "0em 0em 6em 0em";
      newAnswer.style.fontWeight = "100";
      document.getElementById('faq_right').appendChild(newAnswer);
  }
});

// id = "xxx-content"