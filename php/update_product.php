<?php

  //Include libraries
  require __DIR__ . '/../vendor/autoload.php';

  $mongoClient = (new MongoDB\Client);

  $db = $mongoClient->Ecommerce;

  $collection = $db->products;

  //Extract the data that was sent to the server
  $changePName= filter_input(INPUT_POST, 'productName', FILTER_SANITIZE_STRING);
  $changePType = filter_input(INPUT_POST, 'productType', FILTER_SANITIZE_STRING);
  $changePPrice = filter_input(INPUT_POST, 'productPrice', FILTER_SANITIZE_STRING);
  $changePCountry= filter_input(INPUT_POST, 'productCountry', FILTER_SANITIZE_STRING);
  $changePAbv = filter_input(INPUT_POST, 'productAbv', FILTER_SANITIZE_STRING);
  $changePDescription = filter_input(INPUT_POST, 'productDescription', FILTER_SANITIZE_STRING);
  $changePImage = filter_input(INPUT_POST, 'productImage', FILTER_SANITIZE_STRING);
  $changePStock = filter_input(INPUT_POST, 'productStock', FILTER_SANITIZE_STRING);


  $replaceCriteria = [
      'name' => $changePName
  ];

  //data to replace
  $productData = [
      'name' => $changePName,
      'type' => $changePType,
      'price' => (int)$changePPrice,
      'country' => $changePCountry,
      'abv' => (int)$changePAbv,
      'description' => $changePDescription,
      'image' => $changePImage,
      'stock_count' => (int)$changePStock
  ];

  $updateProduct = $collection->replaceOne($replaceCriteria, $productData);
  if($updateProduct->getModifiedCount() == 1){
      header("Location: ../html/cms.html");
  } else {
      echo 'Error. The name does not match any of our wines. Please try again.';
  }
  