//===============================================
// CHECK SELECTION OF THE COMBO BOX AT CMS PAGE
//===============================================

function checkSelection() {
  var e = document.getElementById("choice");
  var selection = e.options[e.selectedIndex].value;

  if (selection == "1") {
    tableView();
  } else if (selection == "2") {
    document.getElementById("displayInfo").innerHTML =
      "<div id='txtField'><form action='../php/add_product.php' method='post'><label for='nameInput'><b>Name</b></label><input type='text' id='nameInput' placeholder='Enter products name' name='productName' required><br><label for='typeInput'><b>Type/Color</b></label><input type='text' id='typeInput' placeholder='Enter products type' name='productType' required><br><label for='priceInput'><b>Price</b></label><input type='text' id='priceInput' placeholder='Enter products price' name='productPrice' required><br><label for='countryInput'><b>Country</b></label><input type='text' id='countryInput' placeholder='Enter products country' name='productCountry' required><br><label for='abvInput'><b>ABV</b></label><input type='text' id='abvInput' placeholder='Enter products abv' name='productAbv' required><br><label for='descriptionInput'><b>Description</b></label><input type='text' id='descriptionInput' placeholder='Enter products description' name='productDescription' required><br><label for='imageInput'><b>Image Directory</b></label><input type='text' id='imageInput' placeholder='Enter products image directory' name='productImage' required><br><label for='stockInput'><b>Stock Count</b></label><input type='text' id='stockInput' placeholder='Enter products stock count' name='productStock' required><br><button id='cmsBtn' type='submit'>Add</button></form></div>";
  } else if (selection == "3") {
    document.getElementById("displayInfo").innerHTML =
      "<div id='txtField'><form action='../php/update_product.php' method='post'><label for='nameInput'><b>Name</b></label><input type='text' id='nameInput' placeholder='Enter products name' name='productName' required><br><label for='typeInput'><b>Type/Color</b></label><input type='text' id='typeInput' placeholder='Enter products type' name='productType' required><br><label for='priceInput'><b>Price</b></label><input type='text' id='priceInput' placeholder='Enter products price' name='productPrice' required><br><label for='countryInput'><b>Country</b></label><input type='text' id='countryInput' placeholder='Enter products country' name='productCountry' required><br><label for='abvInput'><b>ABV</b></label><input type='text' id='abvInput' placeholder='Enter products abv' name='productAbv' required><br><label for='descriptionInput'><b>Description</b></label><input type='text' id='descriptionInput' placeholder='Enter products description' name='productDescription' required><br><label for='imageInput'><b>Image Directory</b></label><input type='text' id='imageInput' placeholder='Enter products image directory' name='productImage' required><br><label for='stockInput'><b>Stock Count</b></label><input type='text' id='stockInput' placeholder='Enter products stock count' name='productStock' required><br><button id='cmsBtn' type='submit'>Add</button></form></div>";
  } else if (selection == "4") {
    document.getElementById("displayInfo").innerHTML =
      "<div id='txtField'><form action='../php/remove_product.php' method='post'><label for='nameInput'><b>Product Name</b></label><br><input type='text' id='nameInput' placeholder='Enter products name' name='productName' required><button id='cmsBtn'>Remove</button></div>";
  } else if (selection == "5") {
    document.getElementById("displayInfo").innerHTML =
      "<div id='txtField'><input type='text' id='confirmationInput' placeholder='Enter confirmation #' name='confirmationInput' required><button id='cmsBtn' onclick='viewOrder()'>View</button></div>";
  } else {
    document.getElementById("displayInfo").innerHTML =
      "<div id='txtField'><form action='../php/remove_order.php' method='post'><input type='text' id='confirmationInput' placeholder='Enter confirmation #' name='confirmationInput' required><button id='cmsBtn' type='submit'>Delete</button></form></div>";
  }
}

//==================
// DISPLAY PRODUCTS
//==================

function tableView() {
  let request = new XMLHttpRequest();
  request.onload = () => {
    let responseData = request.responseText;
    document.getElementById("displayInfo").innerHTML = responseData;
  };
  //Set up and send request
  request.open("GET", "../php/view_products.php");
  request.send();
}

tableView();

//================
// UPDATE PRODUCT
//================

function updateProduct() {
  document.getElementById("loginWindow").innerHTML =
    '<label for="changeName"><b>Full Name</b></label><input type="text" placeholder="Enter Full Name" name="changeName" id="changeName" required><label for="changeAddress"><b>Address</b></label><input type="text" placeholder="Enter Address" name="changeAddress" id="changeAddress" required><label for="changeTelephone"><b>Telephone</b></label><input type="text" placeholder="Enter Telephone" name="changeTelephone" id="changeTelephone" required><label for="changePassword"><b>Password</b></label><input type="password" placeholder="Enter Password" name="changePassword" id="changePassword" required><button type="submit" class="btn" onclick="changeDetailsRequest()">Change My Details</button><button type="submit" class="btn cancel" onclick="location.reload()">Close</button>';
}

//==================
// DISPLAY ORDER
//==================

function viewOrder() {
  var userInput = document.getElementById("confirmationInput").value;

  $.ajax({
    url: "../php/view_order.php", //the page containing php script
    type: "POST", //request type,
    dataType: "json",
    data: { userInput: userInput },
    success: function(result) {
      document.getElementById("displayInfo").innerHTML = result.viewedOrder;
    }
  });
}
