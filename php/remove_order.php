<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->Ecommerce;

$collection = $db->orders;

//Extract the data that was sent to the server
$confirmation = $_POST['confirmationInput'];

$returnVal = $collection->deleteOne(['_id' => new MongoDB\BSON\ObjectId ($confirmation)]);
header("Location: ../html/cms.html");