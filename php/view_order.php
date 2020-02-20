<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->Ecommerce;

$confirmation = $_POST['userInput'];

$cursor = $db->orders->find(['_id' => new MongoDB\BSON\ObjectId ($confirmation)]);

//Find all of the customers that match  this criteria
$result = "<table class='cmsTable' id='cmsTable'><tr><th>Customer ID</th><th>Shipping Address</th><th>Date</th><th>Time</th><th>Past Orders
</th></tr>";

foreach ($cursor as $order){
    $products = json_encode($order["products"]);
    $result .= '<tr><th>'. $order["customer_id"] .'</th><th>'. $order["shipping_address"] .'</th><th>'. $order["date"] .'</th><th>'. $order["time"] .'</th><th>'. $products .'</th></tr>';
}

$result .= "</table>";

echo json_encode(array("viewedOrder"=>$result));

?>
