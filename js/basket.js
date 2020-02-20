//Globals
let products;
window.onload = loadBasket();

//Get basket from session storage or create one if it does not exist
function getBasket() {
  let basket;
  if (sessionStorage.basket === undefined || sessionStorage.basket === "") {
    basket = [];
  } else {
    basket = JSON.parse(sessionStorage.basket);
  }
  return basket;
}

//Displays basket in page.
function loadBasket() {
  let basket = getBasket(); //Load or create basket
  products = [];
  //Build string with basket HTML
  let htmlBasket = "<form action='checkout.php' method='post'>";
  let totalPrice = 0;
  for (let i = 0; i < basket.length; ++i) {
    htmlBasket += basket[i].name + " | £ " + basket[i].price + "<br>";
    totalPrice += parseInt(basket[i].price);
    products.push({ name: basket[i].name, price: basket[i].price });
  }

  htmlBasket +=
    "<hr><p id='totalPrice'>Total Price | £ </p><hr><label id='term'>Are you at least 18 years old? <input type='checkbox' id='toggleCheck'/></label><br>";
  //Add checkout and empty basket buttons
  htmlBasket +=
    "<button type='button' onclick='checkout()'>Check Out</button></form><hr><button type='button' onclick='emptyBasket()'>Clear Cart</button><hr><button type='button' onclick='closeShoppingCart()'>Close</button>";

  //Display number of products in basket
  document.getElementById("shoppingCartWindow").innerHTML = htmlBasket;
  document.getElementById("totalPrice").innerHTML += totalPrice;
}

//Adds an item to the basket
function addToBasket(prodName, prodPrice) {
  let basket = getBasket(); //Load or create basket

  //Add product to basket
  basket.push({ name: prodName, price: prodPrice });

  //Store in local storage
  sessionStorage.basket = JSON.stringify(basket);
  cartCount();

  //Display basket in page.
  loadBasket();
}

//Deletes all products from basket
function emptyBasket() {
  sessionStorage.clear();
  document.getElementById("cartCount").innerHTML = 0;
  products = [];
  loadBasket();
}

//===========
// CHECKOUT
//===========

function checkout() {
  let request = new XMLHttpRequest();
  //Create event handler that specifies what should happen when server responds
  request.onload = () => {
    let responseData = request.responseText;
    document.getElementById("confirmationWindow").innerHTML = responseData;
    document.getElementById("confirmationWindow").innerHTML +=
      "<hr><button type='button' class='btn cancel' onclick='closeConfirmation()'>Close</button>";
    document.getElementById("shoppingCartWindow").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
    loadBasket();
  };
  //Set up and send request
  request.open("POST", "../php/checkout.php");

  if (sessionStorage.basket == undefined) {
    alert("The cart is empty. Please select wines you would like to purchase.");
  } else if (!document.getElementById("checkLogin")) {
    alert("You have to login to check out the cart");
  } else if (document.getElementById("toggleCheck").checked == false) {
    document.getElementById("term").style.color = "red";
    alert("You must be over 18 to make a purchase on our website.");
  } else {
    request.send(JSON.stringify(products));
    emptyBasket();
  }
}
