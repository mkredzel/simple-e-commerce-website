<?php
    //Start session management
    session_start();

    //Remove all session variables
    session_unset(); 

    //Destroy the session 
    session_destroy(); 

    //Echo result to user
    echo '<h1>Login</h1>
    <p>Please fill in this form to access your account.</p>
    <hr>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="loginEmail" required>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="loginPsw" required>
    <button class="btn" type="submit" onclick="login()">Login</button>
    <button type="button" class="btn cancel" onclick="closeLoginForm()">Close</button>';