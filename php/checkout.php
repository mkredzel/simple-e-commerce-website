<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->Ecommerce;

$collection = $db->orders;

//Start session management
session_start();

//Extract the product IDs that were sent to the server
$products = file_get_contents('php://input');

$user = $_SESSION["loggedInUserEmail"];

//Find all of the customers that match  this criteria
$cursorID = $db->users->find(["email" => $user]);
$cursorAddress = $db->users->find(["email" => $user]);

foreach ($cursorID as $user){
    $userID = $user['_id'];
}

foreach ($cursorAddress as $user){
    $userAddress = $user['address'];
}
$date = date("d/m/Y");
$time = date("h:i:sa");

$dataArray = [
    'customer_id' => $userID,
    'shipping_address' => $userAddress, 
    'date' => $date, 
    'time' => $time,
    'products' => [$products]
];

$returnVal = $collection->insertOne($dataArray);

$search = array( '$and' => array( array('customer_id' => $userID), array('date' => $date), array('time' => $time)));

$cursorConfirmation = $db->orders->find($search);

foreach ($cursorConfirmation as $order){
    $confirmation = $order["_id"]; 
 }

//Output the IDs of the products that the customer has ordered
echo '<h1>The order has been confirmed</h1><p>Confirmation: #'. $confirmation .'</p>';