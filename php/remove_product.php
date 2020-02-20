<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->Ecommerce;

$collection = $db->products;

//Extract the data that was sent to the server
$name= filter_input(INPUT_POST, 'productName', FILTER_SANITIZE_STRING);

$regexName = new MongoDB\BSON\Regex($name, 'i');

$returnVal = $collection->deleteOne(['name' => $regexName]);
header("Location: ../html/cms.html");