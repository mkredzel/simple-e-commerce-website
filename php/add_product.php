<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

$mongoClient = (new MongoDB\Client);

$db = $mongoClient->Ecommerce;

$collection = $db->products;

//Extract the data that was sent to the server
$name= filter_input(INPUT_POST, 'productName', FILTER_SANITIZE_STRING);
$type = filter_input(INPUT_POST, 'productType', FILTER_SANITIZE_STRING);
$price = filter_input(INPUT_POST, 'productPrice', FILTER_SANITIZE_STRING);
$country= filter_input(INPUT_POST, 'productCountry', FILTER_SANITIZE_STRING);
$abv = filter_input(INPUT_POST, 'productAbv', FILTER_SANITIZE_STRING);
$description = filter_input(INPUT_POST, 'productDescription', FILTER_SANITIZE_STRING);
$image = filter_input(INPUT_POST, 'productImage', FILTER_SANITIZE_STRING);
$stock = filter_input(INPUT_POST, 'productStock', FILTER_SANITIZE_STRING);

//convert to PHP array
$dataArray = [
    'name' => $name, 
    'type' => $type, 
    'price' => (int)$price, 
    'country' => $country, 
    'abv' => (int)$abv,
    'description' => $description, 
    'image' => $image, 
    'stock_count' => (int)$stock
];

$returnVal = $collection->insertOne($dataArray);
header("Location: ../html/cms.html");
?>
