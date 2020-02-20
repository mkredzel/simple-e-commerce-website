<?php
    //Start session management
    session_start();

    if(array_key_exists("loggedInUserEmail", $_SESSION) ){
        echo '<p id="checkLogin">'. $_SESSION["loggedInUserEmail"] . ' is logged in </p><br><br><button type="button" onclick="logout()">Log Out</button><br><br><button type="button"  onclick="changeDetails()">Change my details</button><br><br><button type="button" onclick="viewOrders()">View my past orders</button><br><br><button type="button" class="btn cancel" onclick="closeLoginForm()">Close</button>';
    }
    else{
        echo ' <h1>Login</h1>
        <p>Please fill in this form to access your account.</p>
        <hr>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="loginEmail" required>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="loginPsw" required>
        <button class="btn" type="submit" onclick="login(); changeNav("My Profile")">Login</button>
        <button type="button" class="btn cancel" onclick="closeLoginForm()">Close</button>';
    }
