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
      var CPU_ELEMENT = document.createElement('tr');
      CPU_ELEMENT.id = "CPU_ELEMENT" + z;
      document.getElementById('CPU-content').appendChild(CPU_ELEMENT);      
      
      var CPU_NAME = document.createElement('th');
      CPU_NAME.innerHTML = products[z].name;
      CPU_NAME.scope = "row";
      CPU_NAME.id = "CPU_TH" + z;
      document.getElementById('CPU_ELEMENT' + z).appendChild(CPU_NAME);
      
      var CPU_DATA1 =  document.createElement('td');
      CPU_DATA1.innerHTML = products[z].price;
      document.getElementById('CPU_ELEMENT' + z).appendChild(CPU_DATA1);
      
      var CPU_DATA2 =  document.createElement('td');
      CPU_DATA2.innerHTML = products[z].rating;
      document.getElementById('CPU_ELEMENT' + z).appendChild(CPU_DATA2);
      
      var CPU_DATA3 =  document.createElement('td');
      CPU_DATA3.innerHTML = products[z].inventory;
      document.getElementById('CPU_ELEMENT' + z).appendChild(CPU_DATA3);
    }
    
    else if(products[z].itemID.startsWith("G"))
    {
      var GPU_ELEMENT = document.createElement('tr');
      GPU_ELEMENT.id = "GPU_ELEMENT" + z;
      document.getElementById('GPU-content').appendChild(GPU_ELEMENT);      
      
      var GPU_NAME = document.createElement('th');
      GPU_NAME.innerHTML = products[z].name;
      GPU_NAME.scope = "row";
      GPU_NAME.id = "GPU_TH" + z;
      document.getElementById('GPU_ELEMENT' + z).appendChild(GPU_NAME);
      
      var GPU_DATA1 =  document.createElement('td');
      GPU_DATA1.innerHTML = products[z].price;
      document.getElementById('GPU_ELEMENT' + z).appendChild(GPU_DATA1);
      
      var GPU_DATA2 =  document.createElement('td');
      GPU_DATA2.innerHTML = products[z].rating;
      document.getElementById('GPU_ELEMENT' + z).appendChild(GPU_DATA2);
      
      var GPU_DATA3 =  document.createElement('td');
      GPU_DATA3.innerHTML = products[z].inventory;
      document.getElementById('GPU_ELEMENT' + z).appendChild(GPU_DATA3);
    }
    
    else if(products[z].itemID.startsWith("M"))
    {
      var MOBO_ELEMENT = document.createElement('tr');
      MOBO_ELEMENT.id = "MOBO_ELEMENT" + z;
      document.getElementById('MOBO-content').appendChild(MOBO_ELEMENT);      
      
      var MOBO_NAME = document.createElement('th');
      MOBO_NAME.innerHTML = products[z].name;
      MOBO_NAME.scope = "row";
      MOBO_NAME.id = "MOBO_TH" + z;
      document.getElementById('MOBO_ELEMENT' + z).appendChild(MOBO_NAME);
      
      var MOBO_DATA1 =  document.createElement('td');
      MOBO_DATA1.innerHTML = products[z].price;
      document.getElementById('MOBO_ELEMENT' + z).appendChild(MOBO_DATA1);
      
      var MOBO_DATA2 =  document.createElement('td');
      MOBO_DATA2.innerHTML = products[z].rating;
      document.getElementById('MOBO_ELEMENT' + z).appendChild(MOBO_DATA2);
      
      var MOBO_DATA3 =  document.createElement('td');
      MOBO_DATA3.innerHTML = products[z].inventory;
      document.getElementById('MOBO_ELEMENT' + z).appendChild(MOBO_DATA3);
    }
    
    else if(products[z].itemID.startsWith("H"))
    {
      var HDD_ELEMENT = document.createElement('tr');
      HDD_ELEMENT.id = "HDD_ELEMENT" + z;
      document.getElementById('HDD-content').appendChild(HDD_ELEMENT);      
      
      var HDD_NAME = document.createElement('th');
      HDD_NAME.innerHTML = products[z].name;
      HDD_NAME.scope = "row";
      HDD_NAME.id = "HDD_TH" + z;
      document.getElementById('HDD_ELEMENT' + z).appendChild(HDD_NAME);
      
      var HDD_DATA1 =  document.createElement('td');
      HDD_DATA1.innerHTML = products[z].price;
      document.getElementById('HDD_ELEMENT' + z).appendChild(HDD_DATA1);
      
      var HDD_DATA2 =  document.createElement('td');
      HDD_DATA2.innerHTML = products[z].rating;
      document.getElementById('HDD_ELEMENT' + z).appendChild(HDD_DATA2);
      
      var HDD_DATA3 =  document.createElement('td');
      HDD_DATA3.innerHTML = products[z].inventory;
      document.getElementById('HDD_ELEMENT' + z).appendChild(HDD_DATA3);
    }
    
    else if(products[z].itemID.startsWith("S"))
    {
      var SSD_ELEMENT = document.createElement('tr');
      SSD_ELEMENT.id = "SSD_ELEMENT" + z;
      document.getElementById('SSD-content').appendChild(SSD_ELEMENT);      
      
      var SSD_NAME = document.createElement('th');
      SSD_NAME.innerHTML = products[z].name;
      SSD_NAME.scope = "row";
      SSD_NAME.id = "SSD_TH" + z;
      document.getElementById('SSD_ELEMENT' + z).appendChild(SSD_NAME);
      
      var SSD_DATA1 =  document.createElement('td');
      SSD_DATA1.innerHTML = products[z].price;
      document.getElementById('SSD_ELEMENT' + z).appendChild(SSD_DATA1);
      
      var SSD_DATA2 =  document.createElement('td');
      SSD_DATA2.innerHTML = products[z].rating;
      document.getElementById('SSD_ELEMENT' + z).appendChild(SSD_DATA2);
      
      var SSD_DATA3 =  document.createElement('td');
      SSD_DATA3.innerHTML = products[z].inventory;
      document.getElementById('SSD_ELEMENT' + z).appendChild(SSD_DATA3);      
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