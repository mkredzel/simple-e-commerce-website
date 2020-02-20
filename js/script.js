//===============================================
// MANAGING POP UPS
//===============================================

function openLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("aboutUs").style.display = "none";
  document.getElementById("shoppingCart").style.display = "none";
  document.getElementById("confirmation").style.display = "none";
}

function closeLoginForm() {
  document.getElementById("loginForm").style.display = "none";
}

function openRegisterForm() {
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("aboutUs").style.display = "none";
  document.getElementById("shoppingCart").style.display = "none";
  document.getElementById("confirmation").style.display = "none";
}

function closeRegisterForm() {
  document.getElementById("registerForm").style.display = "none";
}

function openAboutUs() {
  document.getElementById("aboutUs").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("shoppingCart").style.display = "none";
  document.getElementById("confirmation").style.display = "none";
}

function closeAboutUs() {
  document.getElementById("aboutUs").style.display = "none";
}

function openShoppingCart() {
  document.getElementById("shoppingCart").style.display = "block";
  document.getElementById("aboutUs").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("confirmation").style.display = "none";
}

function closeShoppingCart() {
  document.getElementById("shoppingCart").style.display = "none";
}

function confirmation() {
  if (document.getElementById("toggle").checked == false) {
    document.getElementById("term").style.color = "red";
    document.getElementById("term").style.fontSize = "30px";
  } else {
    document.getElementById("term").style.fontSize = "26px";
    document.getElementById("term").style.color = "black";
    document.getElementById("confirmation").style.display = "block";
  }
}

function closeConfirmation() {
  document.getElementById("confirmation").style.display = "none";
}

//===============
// CART COUNTER
//===============

function cartCount() {
  var counter = JSON.parse(sessionStorage.basket);
  document.getElementById("cartCount").innerHTML = Object.keys(counter).length;
}

if (sessionStorage.basket != undefined) {
  window.onload = cartCount();
}

//====================
// SORTING USING AJAX
//====================

function sort() {
  var e = document.getElementById("sortBy");
  var selection = e.options[e.selectedIndex].value;

  $.ajax({
    url: "../php/sort_products.php", //the page containing php script
    type: "POST", //request type,
    dataType: "json",
    data: { selection: selection },
    success: function(result) {
      document.getElementById("displayWines").innerHTML = result.sortedProducts;
    }
  });
}

//=======================
// SEARCHING USING AJAX
//=======================

function search() {
  var userInput = document.getElementById("searchInput").value;

  $.ajax({
    url: "../php/search_products.php", //the page containing php script
    type: "POST", //request type,
    dataType: "json",
    data: { userInput: userInput },
    success: function(result) {
      if (result.searchedProducts == "") {
        document.getElementById("displayWines").innerHTML =
          "<div><p id='searchFailure'>No matching wines found, please try again or use our wonderful sorting feature</p></div>";
        document.getElementById("footer").style.position = "relative";
        document.getElementById("footer").style.top = "400px";
      } else {
        document.getElementById("displayWines").innerHTML =
          result.searchedProducts;
      }
    }
  });
}

//==========================================
// ENABLE ENTER KEY IN SEARCH INPUT FORM
//==========================================

let input = document.getElementById("searchInput");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});

//=========================
// REGISTRATION USING AJAX
//=========================

function register() {
  //Create request object
  let request = new XMLHttpRequest();

  //Create event handler that specifies what should happen when server responds
  request.onload = () => {
    //Check HTTP status code
    if (request.status === 200) {
      //Get data from server
      let responseData = request.responseText;

      //Add data to page
      alert(responseData);
      console.log(responseData);
    } else alert("Error communicating with server: " + request.status);
  };

  //Set up request with HTTP method and URL
  request.open("POST", "../php/register.php");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  //Extract registration data
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let telephone = document.getElementById("telephone").value;
  let psw = document.getElementById("psw").value;
  let pswRpt = document.getElementById("pswRpt").value;

  //Send request
  if (
    fullName == "" ||
    email == "" ||
    address == "" ||
    telephone == "" ||
    psw == "" ||
    pswRpt == ""
  ) {
    alert("All fields must be filled out.");
  } else if (psw !== pswRpt) {
    alert("Passwords do not match.");
    return;
  } else {
    console.log("sent to server");
    request.send(
      "fullName=" +
        fullName +
        "&email=" +
        email +
        "&address=" +
        address +
        "&telephone=" +
        telephone +
        "&psw=" +
        psw +
        "&pswRpt=" +
        pswRpt
    );
  }
}

//=========================
// LOGIN USING AJAX
//=========================

//Attempts to log in user to server
function login() {
  //Create request object
  let request = new XMLHttpRequest();

  //Create event handler that specifies what should happen when server responds
  request.onload = () => {
    //Check HTTP status code
    if (request.status === 200) {
      //Get data from server
      let responseData = request.responseText;
      alert(responseData);
    } else alert("Error communicating with server: " + request.status);
  };

  //Extract login data
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPsw = document.getElementById("loginPsw").value;

  //Set up and send request
  request.open("POST", "../php/login.php");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send("loginEmail=" + loginEmail + "&loginPsw=" + loginPsw);
}

//=========================
// CHECK LOGGED IN USER
//=========================

//Create request object
let request = new XMLHttpRequest();

//Create event handler that specifies what should happen when server responds
request.onload = () => {
  //Check HTTP status code
  if (request.status === 200) {
    //Get data from server
    let responseData = request.responseText;
    document.getElementById("loginWindow").innerHTML = responseData;
  } else alert("Error communicating with server: " + request.status);
};

//Set up and send request
request.open("POST", "../php/check_login.php");
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send();

//=========================
// LOG OUT USER
//=========================

function logout() {
  //Create event handler that specifies what should happen when server responds
  request.onload = () => {
    let responseData = request.responseText;
    document.getElementById("loginWindow").innerHTML = responseData;
  };
  //Set up and send request
  request.open("GET", "../php/logout.php");
  request.send();
}

//=========================
// CHANGE DETAILS - FORM
//=========================

function changeDetails() {
  document.getElementById("loginWindow").innerHTML =
    '<label for="changeName"><b>Full Name</b></label><input type="text" placeholder="Enter Full Name" name="changeName" id="changeName" required><label for="changeAddress"><b>Address</b></label><input type="text" placeholder="Enter Address" name="changeAddress" id="changeAddress" required><label for="changeTelephone"><b>Telephone</b></label><input type="text" placeholder="Enter Telephone" name="changeTelephone" id="changeTelephone" required><label for="changePassword"><b>Password</b></label><input type="password" placeholder="Enter Password" name="changePassword" id="changePassword" required><button type="submit" class="btn" onclick="changeDetailsRequest()">Change My Details</button><button type="submit" class="btn cancel" onclick="location.reload()">Close</button>';
}

//=========================
// CHANGE DETAILS REQUEST
//=========================

function changeDetailsRequest() {
  let request = new XMLHttpRequest();
  let changeName = document.getElementById("changeName").value;
  let changeAddress = document.getElementById("changeAddress").value;
  let changeTelephone = document.getElementById("changeTelephone").value;
  let changePassword = document.getElementById("changePassword").value;

  //Create event handler that specifies what should happen when server responds
  request.onload = () => {
    let responseData = request.responseText;
    alert(responseData);
  };
  //Set up and send request
  request.open("POST", "../php/change_details.php");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  if (
    changeName == "" ||
    changeAddress == "" ||
    changeTelephone == "" ||
    changePassword == ""
  ) {
    alert("All fields must be filled out.");
  } else {
    request.send(
      "changeName=" +
        changeName +
        "&changeAddress=" +
        changeAddress +
        "&changeTelephone=" +
        changeTelephone +
        "&changePassword=" +
        changePassword
    );
  }
}

//=========================
// VIEW PAST ORDERS
//=========================

function viewOrders() {
  let request = new XMLHttpRequest();
  request.onload = () => {
    let responseData = request.responseText;
    document.getElementById("loginWindow").style.width = "800px";
    document.getElementById("loginWindow").innerHTML = responseData;
  };
  //Set up and send request
  request.open("GET", "../php/view_past_orders.php");
  request.send();
}
