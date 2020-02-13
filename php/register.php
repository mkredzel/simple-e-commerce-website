<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

//Create instance of MongoDB client
$mongoClient = new MongoDB\Client;

//Select a database
$db = $mongoClient->Ecommerce;

$collection = $db->users;

//Extract the data that was sent to the server
$fullName = filter_input(INPUT_POST, 'fullName', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$address = filter_input(INPUT_POST, 'address', FILTER_SANITIZE_STRING);
$telephone = filter_input(INPUT_POST, 'telephone', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'psw', FILTER_SANITIZE_STRING);

//Hash the password
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

//convert to PHP array
$dataArray = [
    'full_name' => $fullName, 
    'email' => $email, 
    'address' => $address, 
    'telephone' => $telephone, 
    'password' => $passwordHash
];

//Check for existing already email
$query = array('email' => $email);
$document = $collection->findOne($query);


 //Echo result back to user
 if(empty($document)){
      //Add the new customer to the database
    $returnVal = $collection->insertOne($dataArray);
    echo 'ok';
} else {
    echo 'Email in use or psw dont match';
}

?>