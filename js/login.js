/*
  A. Cervantes, T. Clark, D. Lenselink, C. Mathiason, K. Smeaton
  CWEB 2101 - Prof. Merns
  2017-04-25
*/

// GLOBAL DECLARATIONS
var $button = $('#submit_button');
  
$(function()
{
  $button.click(function ()
  {    
    // DECLARATIONS
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;        
      
    for(var x=0; x < login.length; x++)
    {
      if (login[x].username == user && login[x].password == pass)
      {
        var outcome = true;
        swal
        ({
          title: 'Success!',
          text: "Please check out our awesome products!",
          type: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
          confirmButtonClass: 'btn btn-success',
          buttonsStyling: false
        })
          .then(function ()
          {
            window.location.replace("products.html");
          })
        break;
      }
      else
      {
        var outcome = false;
        swal
        ({
          title: 'Error!',
          text: "Invalid username and/or password!",
          type: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
          confirmButtonClass: 'btn btn-success'
        })         
      }
    }    
    console.log(outcome);
  });
});