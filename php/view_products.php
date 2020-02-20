<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';


//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->Ecommerce;

//Find all of the customers that match  this criteria
$cursor = $db->products->find();

$result = "<table class='cmsTable' id='tableCms'><tr><th>#</th><th>Name</th><th>Type</th><th>Price</th><th>Country</th><th>ABV</th><th>Description
</th><th>Image</th><th>Stock Count</th></tr>";
$num = 1;
//Output products

foreach ($cursor as $product){
   $result .= '<tr></th><th>'. $num++ .'<th>'. $product["name"] .'</th><th>'. $product["type"] .'</th><th>£'. $product["price"] .'</th><th>'. $product["country"] .'</th><th>'. $product["abv"] . '%</th><th>'. $product["description"] .'</th>
   <th><img src= "../'. $product["image"] .'"></th><th>' . $product["stock_count"] . '</th></tr>';
}

$result .= "</table>";

echo $result;

?>