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
$products = json_decode(file_get_contents('php://input'), true);

$dataArray = [
    'customer_id' => $fullName, 
    'email' => $email, 
    'shipping_address' => $address, 
    'telephone' => $telephone, 
    'password' => $passwordHash
];

$returnVal = $collection->insertOne($dataArray);

//Output the IDs of the products that the customer has ordered
echo '<h1>Products Sent to Server</h1>';

echo json_encode($products);

echo $_SESSION["loggedInUserEmail"];



/* Next steps:
 * Add an order document to the database containing product IDs, customer ID, date, count, price etc.
 * Display confirmation page to customer.
 */
