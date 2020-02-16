<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';
    
// Start the PHP Session
session_start(); 

//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->Ecommerce;

//Extract the customer details 
$changeName= filter_input(INPUT_POST, 'changeName', FILTER_SANITIZE_STRING);
$changeAddress= filter_input(INPUT_POST, 'changeAddress', FILTER_SANITIZE_STRING);
$changeTelephone = filter_input(INPUT_POST, 'changeTelephone', FILTER_SANITIZE_STRING);
$changePassword = filter_input(INPUT_POST, 'changePassword', FILTER_SANITIZE_STRING);
$email = $_SESSION['loggedInUserEmail'];

//Hash the password
$passwordHash = password_hash($changePassword, PASSWORD_DEFAULT);

$replaceCriteria = [
    "email" => $email
];

//Data to replace
$customerData = [
    'full_name' => $changeName,
    'email' => $email,
    'address' => $changeAddress,
    'telephone' => $changeTelephone,
    'password' => $passwordHash
];

//Replace customer data for this ID
$updateAccount = $db->users->replaceOne($replaceCriteria, $customerData);
    
//Echo result back to user
if($updateAccount->getModifiedCount() == 1)
    echo 'Your details have been updated. Thank you.';
else
    echo 'Customer replacement error.';

