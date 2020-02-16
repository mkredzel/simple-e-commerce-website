<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

// Start the PHP Session
session_start(); 

//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//select database
$db = $mongoClient->Ecommerce;

//Get name and address strings - need to filter input to reduce chances of SQL injection etc.
$email= filter_input(INPUT_POST, 'loginEmail', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'loginPsw', FILTER_SANITIZE_STRING);    



//Create a PHP array with our search criteria
$findCriteria = [
    "email" => $email, 
 ];

//Find all of the customers that match  this criteria
$cursor = $db->users->find($findCriteria);
$resultArray = $cursor->toArray();

count($resultArray);

//Check that there is exactly one customer
if(count($resultArray) == 0){
    echo 'Email not recognized.';
    header("Location: ../index.php");
    return;
}
else if(count($resultArray) > 1){
    echo 'Database error: Multiple customers have same email address.';
    return;
}

//Get customer
$customer = $resultArray[0];

//Check password
if(password_verify($password, $customer['password']) && $email == "admin"){
    header("Location: ../html/cms.html");
    return;
} else if(password_verify($password, $customer['password'])){
    //Start session for this user
    $_SESSION['loggedInUserEmail'] = $email;
    //Inform web page that login is successful
    echo 'ok';
    header("Location: ../index.php");
    return;
}


//(the password is wrong )

echo 'Password incorrect.';  

?>