<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

function output_products(){

//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->Ecommerce;

//Find all of the customers that match  this criteria
$cursor = $db->products->find();

$result = "";
//Output products
foreach ($cursor as $product){
   $result .= '<div><h3>'. $product["name"] .'</h3><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src= "../'. $product["image"] .'"></div><div class="flip-card-back"><p id="abv">ABV: '. $product["abv"] . '%</p><p id="country">'. $product["country"] .' <i class="fa fa-globe" aria-hidden="true"></i></p><p id="wineDescription">'. $product["description"] .'</p></div></div></div><h5>'. $product["type"] .' Wine | £'. $product["price"] .'</h5><button onclick=\'addToBasket("' . $product["name"] . '", "' . $product["price"] . '")\'>Add To Cart</button></div>';
}return $result;

//close the connection
$mongoClient->close();
}

?>