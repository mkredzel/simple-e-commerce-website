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
  if(document.getElementById("toggle").checked  == false){
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

        
var cartCount = 0;
        
function addToCount() {
    cartCount++;
    document.getElementById('cartCount').innerHTML = cartCount;
}
