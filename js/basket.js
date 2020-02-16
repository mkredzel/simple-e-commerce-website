//Globals
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

  //Build string with basket HTML
  let htmlBasket = "";
  let totalPrice = 0;
  for (let i = 0; i < basket.length; ++i) {
    htmlBasket += basket[i].name + " | £ " + basket[i].price + "<br>";
    totalPrice += parseInt(basket[i].price);
  }

  //Add hidden field to form that contains stringified version of product ids.
  htmlBasket += "<hr><p id='totalPrice'>Total Price | £ </p>";
  //Add checkout and empty basket buttons
  htmlBasket +=
    "<button type='button' onclick='openCheckOut()'>Check Out</button><br><button type='button' onclick='emptyBasket()'>Clear Cart</button><br><button type='button' onclick='closeShoppingCart()'>Close</button>";

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
  loadBasket();
}
