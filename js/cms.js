//===============================================
// CHECK SELECTION OF THE COMBO BOX AT CMS PAGE
//===============================================

function checkSelection() {
  var e = document.getElementById("choice");
  var selection = e.options[e.selectedIndex].value;

  if (selection == "1") {
    document.getElementById("displayInfo").innerHTML =
      "<p id='msg'>You selected to view all listed products</p><table class='cmsTable'><tr><th>#</th><th>Name</th><th>Type</th><th>Price</th><th>Country</th><th>ABV</th><th>Description</th><th>Image</th><th>Stock Count</th></tr><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></tr></table>";
  } else if (selection == "2") {
    document.getElementById("displayInfo").innerHTML =
      "<p id='msg'>You selected to add a product</p><div id='txtField'><input type='text' id='cmsInput' placeholder='Enter products id' name='productId' required><button id='cmsBtn'>Add</button></div>";
  } else if (selection == "3") {
    document.getElementById("displayInfo").innerHTML =
      "<p id='msg'>You selected to edit a product<div id='txtField'><input type='text' id='cmsInput' placeholder='Enter product name' name='productId' required><button id='cmsBtn'>Edit</button></div></p>";
  } else if (selection == "4") {
    document.getElementById("displayInfo").innerHTML =
      "<p id='msg'>You selected to remove a product</p><div id='txtField'><input type='text' id='cmsInput' placeholder='Enter products id' name='productId' required><button id='cmsBtn'>Remove</button></div>";
  } else if (selection == "5") {
    document.getElementById("displayInfo").innerHTML =
      "<p id='msg'>You selected to view customer's order<div id='txtField'><input type='text' id='cmsInput' placeholder='Enter confirmation #' name='productId' required><button id='cmsBtn'>View</button></div></p>";
  } else {
    document.getElementById("displayInfo").innerHTML =
      "<p id='msg'>You selected to delete customer's order<div id='txtField'><input type='text' id='cmsInput' placeholder='Enter confirmation #' name='productId' required><button id='cmsBtn'>Delete</button></div></p>";
  }
}
