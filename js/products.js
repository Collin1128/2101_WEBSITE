/*
  A. Cervantes, T. Clark, D. Lenselink, C. Mathiason, K. Smeaton
  CWEB 2101 - Prof. Merns
  2017-04-25
*/

// DECLARATIONS
  /*
  A. Cervantes, T. Clark, D. Lenselink, C. Mathiason, K. Smeaton
  CWEB 2101 - Prof. Merns
  2017-04-25
*/

// GLOBAL DECLARATIONS

$(document).ready(function() { 
  for(var z = 0; z < products.length; z++)
  {
    
    if(products[z].itemID.startsWith("C"))
    {
      var newCPU-tr = document.createElement('tr');
      newCPU-tr.id = "newCPU-tr";
      document.getElementById('CPU-content').appendChild(newCPU-tr);
        
      var newCPU-th = document.createElement('th');
      document.getElementById('CPU-tr').appendChild(newCPU-th);
      
      var newCPU-price = document.createElement('td');
      newCPU-price.innerHTML = products[z].price;
      document.getElementById('CPU-tr').appendChild(newCPU-price);
      
      var newCPU-rating = document.createElement('td');
      newCPU-rating.innerHTML = products[z].rating;
      document.getElementById('CPU-tr').appendChild(newCPU-rating);
      
      var newCPU-stock = document.createElement('td');
      newCPU-stock.innerHTML = products[z].inventory;
      document.getElementById('CPU-tr').appendChild(newCPU-stock);      
    }
    
    else if(products[z].itemID.startsWith("G"))
    {
      var newGPU = document.createElement('');
      
      document.getElementById('GPU-content').appendChild(newGPU);
    }
    
    else if(products[z].itemID.startsWith("M"))
    {
      var newMOBO = document.createElement('');
      
      document.getElementById('MOBO-content').appendChild(newMOBO);
    }
    
    else if(products[z].itemID.startsWith("H"))
    {
      var newHDD = document.createElement('');
      
      document.getElementById('HDD-content').appendChild(newHDD);
    }
    
    else if(products[z].itemID.startsWith("S"))
    {
      var newSSD = document.createElement('');
      
      document.getElementById('SSD-content').appendChild(newSSD);
      
    }
    
    else
    {
      swal
      ({
        title: 'Error!',
        text: "Item ID must start with C, G, M, H, or S",
        type: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        confirmButtonClass: 'btn btn-success'
      })
    }
  } 
});