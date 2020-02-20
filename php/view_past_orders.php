<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

// Start the PHP Session
session_start(); 

//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->Ecommerce;

$user = $_SESSION["loggedInUserEmail"];

//Find all of the customers that match  this criteria
$cursor = $db->users->find(["email" => $user]);

foreach ($cursor as $user){
$userID = $user['_id'];
}

$result = "<h1>Past Orders</h1><table class='userOrdersTable' id='cmsTable'><tr><th>#</th><th>Confirmation</th><th>Shipping Address</th><th>Date</th><th>Time</th><th>Past Orders
</th></tr>";
$num = 1;
//Output orders
$document = $db->orders->find(["customer_id" => new MongoDB\BSON\ObjectId ($userID)]);

foreach ($document as $order){
    $products = json_encode($order["products"]);
   $result .= '<tr></th><th>'. $num++ .'<th>'. $order["_id"] .'</th><th>'. $order["shipping_address"] .'</th><th>'. $order["date"] .'</th><th>'. $order["time"] .'</th><th>'. $products .'</th></tr>';
}

$result .= "</table><br><button type='button' class='btn cancel' onclick='closeLoginForm(); location.reload() '>Close</button>";


echo $result;

?>