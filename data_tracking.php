<?php

//Include libraries
require __DIR__ . '/../vendor/autoload.php';

function output_products(){

//Create instance of MongoDB client
$mongoClient = (new MongoDB\Client);

//Select a database
$db = $mongoClient->Ecommerce;

//Find all of the customers that match  this criteria
$products_array = $db->products->find();

//Output products
function products_name_array() {
     $products_name_array_return = array();
     foreach ($products_array as $value){
     array_push($products_name_array_return, $value["name"]);
  }return $products_name_array_return;
}

function products_type_array() {
     $products_type_array_return = array();
     foreach ($products_array as $value){
     array_push($products_type_array_return, $value["type"]);
  }return $products_type_array_return;
}

function products_country_array() {
     $products_country_array_return = array();
     foreach ($products_array as $value){
     array_push($products_country_array_return, $value["country"]);
  }return $products_country_array_return;
}

function select_product($insert_product) {
  $result_select = false;
  foreach ($products_array as $value) {
    if ($insert_product == $value["name"] ||
        $insert_product == $value["type"] ||
        $insert_product == $value["country"]) {
      $result_select = true;
    }
  }
  return $result_select;
}

function assign_product($insert_product) {
  $assigned_product = "";
  foreach ($products_array as $value) {
    if ($insert_product == $value["name"]) {
      $assigned_product = $value;
    }
  }
  return $assigned_product;
}

function compareTags1($insert_product) {
  $interestedProduct1 = array();

  foreach ($variable as $value) {
    if (assign_product($insert_product)["type"] == $value["type"] &&
        assign_product($insert_product)["name"] != $value["name"]) {
      array_push($interestedProduct1, $value);
    }
  }
  return $interestedProduct1;
}
function compareTags2($insert_product) {
  $interestedProduct2 = array();

  foreach ($variable as $value) {
    if (assign_product($insert_product)["country"] == $value["country"] &&
        assign_product($insert_product)["name"] != $value["name"]) {
      array_push($interestedProduct2, $value);
    }
  }
  return $interestedProduct2;
}

function check_if_included_in_array($insert_product) {
  if (in_array($insert_product, products_name_array())) {
    return "name";
  }
  elseif (in_array($insert_product, products_type_array())) {
    return "type";
  }
  elseif (in_array($insert_product, products_country_array())) {
    return "country";
  }
  else {
    return "false";
  }
}

function call_comparison_and_recommend($insert_product) {
  if (select_product($insert_product) == false) {
    return "Such criteria is not present in the database";
  }
  elseif (check_if_included_in_array($insert_product) != false) {
    echo "You have typed " . assign_product($insert_product);
    if (check_if_included_in_array($insert_product) == "name") {
      if (compareTags1($insert_product) != array()) {
        echo "But you might be also interested in some other wines of the same type, such as: ";
        foreach (compareTags1($insert_product) $value) {
          echo $value["name"];
       }
      }
      if (compareTags2($insert_product) != array()) {
        echo "And you might be also interested in some other wines from the same country, such as: ";
        foreach (compareTags2($insert_product) $value) {
          echo $value["name"];
      }
     }
    }
  }
}

if(isset($_GET['input'])){
  $insert_product=$_GET['input'];
  call_comparison_and_recommend($insert_product);
}
//close the connection
$mongoClient->close();
}

?>
