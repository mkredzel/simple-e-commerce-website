function checkSelection(){
    var e = document.getElementById("choice");
    var strUser = e.options[e.selectedIndex].value;
    if(strUser == "1"){
        document.getElementById("displayInfo").innerHTML = "<p id='msg'>You selected to view all listed products</p><table class='cmsTable'><tr><th >Name</th><th>Type</th><th>Price</th><th>Country</th><th>ABV</th><th>Description</th><th>Image</th><th>Stock Count</th></tr></table>";
    } else if(strUser == "2"){
        document.getElementById("displayInfo").innerHTML = "<p id='msg'>You selected to add a product</p><input type='text' placeholder='Enter product's id' name='productId' required><button type='submit' class='btn'>Add</button>";
    } else if(strUser == "3"){
        document.getElementById("displayInfo").innerHTML = "<p id='msg'>You selected to edit a product</p>";
    } else if(strUser == "4"){
        document.getElementById("displayInfo").innerHTML = "<p id='msg'>You selected to remove a product</p>";
    } else if(strUser == "5"){
        document.getElementById("displayInfo").innerHTML = "<p id='msg'>You selected to view customer order</p>";
    } else {
        document.getElementById("displayInfo").innerHTML = "<p id='msg'>You selected to delete customer order</p>";
    }
}