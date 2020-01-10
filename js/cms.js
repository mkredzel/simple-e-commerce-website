function checkSelection(){
    var e = document.getElementById("choice");
    var strUser = e.options[e.selectedIndex].value;
    if(strUser == "1"){
        document.getElementById("msg").innerHTML = "You selected to view all listed products";
    } else if(strUser == "2"){
        document.getElementById("msg").innerHTML = "You selected to add a product";
    } else if(strUser == "3"){
        document.getElementById("msg").innerHTML = "You selected to edit a product";
    } else if(strUser == "4"){
        document.getElementById("msg").innerHTML = "You selected to remove a product";
    } else if(strUser == "5"){
        document.getElementById("msg").innerHTML = "You selected to view customer order";
    } else {
        document.getElementById("msg").innerHTML = "You selected to delete customer order";
    }
}