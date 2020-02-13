//===============================================
// MANAGING POP UPS
//===============================================

function openLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("aboutUs").style.display = "none";
  document.getElementById("shoppingCart").style.display = "none";
  document.getElementById("checkOutForm").style.display = "none";
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
  document.getElementById("checkOutForm").style.display = "none";
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
  document.getElementById("checkOutForm").style.display = "none";
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
  document.getElementById("checkOutForm").style.display = "none";
  document.getElementById("confirmation").style.display = "none";
}

function closeShoppingCart() {
  document.getElementById("shoppingCart").style.display = "none";
}

function openCheckOut() {
  document.getElementById("checkOutForm").style.display = "block";
  document.getElementById("aboutUs").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("shoppingCart").style.display = "none";
  document.getElementById("confirmation").style.display = "none";
}

function closeCheckOut() {
  document.getElementById("checkOutForm").style.display = "none";
}

function confirmation() {
  if (document.getElementById("toggle").checked == false) {
    document.getElementById("term").style.color = "red";
    document.getElementById("term").style.fontSize = "30px";
  } else {
    document.getElementById("term").style.fontSize = "26px";
    document.getElementById("term").style.color = "black";
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("checkOutForm").style.display = "none";
  }
}

function closeConfirmation() {
  document.getElementById("confirmation").style.display = "none";
}

//===============
// CART COUNTER
//===============

let cartCount = 0;

function addToCount() {
  cartCount++;
  document.getElementById("cartCount").innerHTML = cartCount;
}

//====================
// SORTING USING AJAX
//====================

function sort() {
  var e = document.getElementById("sortBy");
  var selection = e.options[e.selectedIndex].value;

  $.ajax({
    url: "../php/sort_products.php", //the page containing php script
    type: "post", //request type,
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
    type: "post", //request type,
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
