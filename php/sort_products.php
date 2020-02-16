<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

include 'display_products.php';

function sortBy($criteria, $value){
   
//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->Ecommerce;

//Find all of the products that match this criteria
$cursor = $db->products->find([], ['sort' => [$criteria => $value]]);

$result = "";
//Output products
foreach ($cursor as $product){
   $result .= '<div><h3>'. $product["name"] .'</h3><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src= "../'. $product["image"] .'"></div><div class="flip-card-back"><p id="abv">ABV: '. $product["abv"] . '%</p><p id="country">'. $product["country"] .' <i class="fa fa-globe" aria-hidden="true"></i></p><p id="wineDescription">'. $product["description"] .'</p></div></div></div><h5>'. $product["type"] .' Wine | £'. $product["price"] .'</h5><button onclick=\'addToBasket("' . $product["name"] . '", "' . $product["price"] . '")\'>Add To Cart</button></div>';
}
return $result;

//close the connection
$mongoClient->close();

}

$selection = $_POST['selection'];

if ($selection == 1){
   echo json_encode(array("sortedProducts"=>output_products()));
} else if($selection == 2){
   echo json_encode(array("sortedProducts"=>sortBy('type', -1)));
} else if($selection == 3){
   echo json_encode(array("sortedProducts"=>sortBy('type', 1)));
} else if($selection == 4){
   echo json_encode(array("sortedProducts"=>sortBy('country', 1)));
} else if($selection == 5){
   echo json_encode(array("sortedProducts"=>sortBy('country', -1)));
} else if($selection == 6){
   echo json_encode(array("sortedProducts"=>sortBy('abv', 1)));
} else if($selection == 7){
   echo json_encode(array("sortedProducts"=>sortBy('abv', -1)));
} else if($selection == 8){
   echo json_encode(array("sortedProducts"=>sortBy('price', 1)));
} else {
   echo json_encode(array("sortedProducts"=>sortBy('price', -1)));
} 

?>