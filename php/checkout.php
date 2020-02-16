<?php

//Extract the product IDs that were sent to the server
$prodIDs= $_POST['prodIDs'];

//Convert JSON string to PHP array 
$productArray = json_decode($prodIDs, true);

//Output the IDs of the products that the customer has ordered
echo '<h1>Products Sent to Server</h1>';
for($i=0; $i<count($productArray); $i++){
    echo '<p>Product ID: ' . $productArray[$i]['id'] . '. Count: ' . $productArray[$i]['count'] . '</p>';
}

/* Next steps:
 * Get the customer ID from the $_SESSION variable or request customer's details.
 * Add an order document to the database containing product IDs, customer ID, date, count, price etc.
 * Update stock counts in product database.
 * Display confirmation page to customer.
 */
