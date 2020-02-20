<!DOCTYPE HTML>
<html>
    <head>
        
        <title>Wine World - Home</title>
        
        <link rel="icon" href="/img/favicon.ico">
        <link rel="stylesheet" type="text/css" href="/css/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>
        <link href='https://fonts.googleapis.com/css?family=Alegreya Sans SC' rel='stylesheet'>
        
    </head>
    
    <body>

        <!-- Header -->
        <header>

            <!-- Navigation bar -->
            <nav>
                <div id="nav">
                    <ul>
                    <li><a href="index.php">HOME</a></li>
                    <li><a onclick="openAboutUs()">ABOUT US</a></li>
                    <li><a onclick="openRegisterForm()">REGISTER</a></li>   
                    <li><a onclick="openLoginForm()">LOGIN</a></li>   
                    <li><a href="/html/contact.html">CONTACT</a></li>   
                    <li><a id="cart" onclick="loadBasket(); openShoppingCart()">SHOPPING CART </a><p id="cartCount">0</p></li>
                        
                        <!-- Login popup -->
                        <div class="loginForm-popup" id="loginForm">
                            <form class="form-container" action="../php/login.php" method="post" id="loginWindow">
                                <h1>Login</h1>
                                <p>Please fill in this form to access your account.</p>
                                <hr>
                                <label for="email"><b>Email</b></label>
                                <input type="text" placeholder="Enter Email" name="loginEmail" required>
                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="loginPsw" required>
                                <button class="btn" type="submit" onclick="login(); changeNav('My Profile')">Login</button>
                                <button type="button" class="btn cancel" onclick="closeLoginForm()">Close</button>
                            </form>
                        </div>

                        <!-- Register popup -->
                        <div class="registerForm-popup" id="registerForm">
                            
                            <form class="form-container">
                                <h1>Register</h1>
                                <p>Please fill in this form to create an account.</p>
                                <hr>
                                <div class="row">
                                    <div class="column">
                                        <label for="fullName"><b>Full Name</b></label>
                                        <input type="text" placeholder="Enter Full Name" name="fullName" id="fullName" required>
                                        <label for="email"><b>Email</b></label>
                                        <input type="text" placeholder="Enter Email" name="email" id="email" required>
                                        <label for="address"><b>Address</b></label>
                                        <input type="text" placeholder="Enter Home Address" name="address" id="address" required>
                                        <button class="btn" onclick="register()">Register</button>
                                    </div>
                                    <div class="column">
                                        <label for="telephone"><b>Telephone</b></label>
                                        <input type="text" placeholder="Enter Telephone Number" name="telephone" id="telephone" required>
                                        <label for="psw"><b>Password</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
                                        <label for="psw-repeat"><b>Repeat Password</b></label>
                                        <input type="password" placeholder="Repeat Password" name="pswRpt" id="pswRpt" required>
                                        <button type="button" class="btn cancel" onclick="closeRegisterForm()">Close</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!-- About us popup -->
                        <div class="aboutUs-popup" id="aboutUs">
                            <div class="container">
                                <h1>We Are The Wine World</h1>
                                <p>Wine World specialises in selling brilliant wine. We believe wine – whether you’re buying it or selling it, and especially when you’re drinking it – should be full of fun. There are plenty of places where you can buy decent wine. What gets us really excited is interesting wine – the wines you taste that are just a little special. They’re difficult to find in the supermarkets but we’ve got hundreds of them for you to explore, and we don’t want you to pay over the odds to find them. Majestic makes interesting affordable, so everyone can enjoy it.</p>
                                <button type="button" onclick="location.href = '/html/contact.html';">Contact</button>
                                <button type="button" onclick="closeAboutUs()">Close</button>
                            </div>
                        </div>

                        <!-- Shopping cart popup -->
                        <div class="shoppingCart-popup" id="shoppingCart">
                            <div class="container" id="shoppingCartWindow">
                            </div>
                        </div>

                        <!-- Check out popup -->
                        <div class="checkOutForm-popup" id="checkOutForm">
                            <form action="/action_page.php" class="form-container">
                                <h1>Check Out</h1>
                                <p>Please fill in this form for check out.</p>
                                <hr>
                                <div class="row">
                                    <div class="column">
                                        <label for="fullName"><b>Full Name</b></label>
                                        <input type="text" placeholder="Enter Full Name" name="fullName" required>
                                        <label for="address"><b>Shipping Address</b></label>
                                        <input type="text" placeholder="Enter Shipping Address" name="address" required>
                                    </div>
                                    <div class="column">
                                        <label for="email"><b>Email</b></label>
                                        <input type="text" placeholder="Enter Email" name="email" required>
                                        <label for="telephone"><b>Telephone</b></label>
                                        <input type="text" placeholder="Enter Telephone Number" name="telephone" required>
                                    </div>
                                </div>
                                <label id="term">Are you at least 18 years old? <input type="checkbox" id="toggle"/></label>
                                    <button type="submit" class="btn" onclick="confirmation()">Check Out</button>
                                    <button type="button" class="btn cancel" onclick="closeCheckOut()">Close</button>
                            </form>
                        </div>

                        <!-- Confirmation popup -->
                        <div id="confirmation">
                            <div class="container" id ="confirmationWindow">
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>

        <!-- Wine spillage images -->
        <img src="../img/logo.png" style="width:20%;float:left;box-shadow:none;">
        <img src="../img/logo.png" style="width:20%;float:right;box-shadow:none;transform:scaleX(-1);">
        
        <!-- Home page text -->
        <p id="content">Choose a bottle of wine to add it to your cart</p>

        <!-- Search text field and a button -->
        <div class="search">
                <input id="searchInput" type="text" placeholder="Search.." name="search">
                <button id="searchBtn" type="submit" onclick="search()"><i class="fa fa-search"></i></button>
                
                <!-- Sort by combo box -->
                <div class="box">
                    <select id="sortBy" onchange="sort()">
                        <option value="1">Featured</option>
                        <option value="2">White Wine</option>
                        <option value="3">Red/Rose Wine</option>
                        <option value="4">Country: A-Z</option>
                        <option value="5">Country: Z-A</option>
                        <option value="6">ABV: Low To High</option>
                        <option value="7">ABV: High To Low</option>
                        <option value="8">Price: Low To High</option>
                        <option value="9">Price: High To Low</option>
                        <option value="10">Recommendations</option>
                    </select>
                    <p id="sortByPara">Sort By</p>
                </div>
        </div>
        
        <!-- Table with all the flip cards, paragraphs and buttons -->
        
        <div id="displayWines">
        <?php include ('php/display_products.php');
            echo output_products();
        ?>
        </div>

        <!-- Footer -->
        <footer id="footer">
            <p id="footer"> We love what we do, we love wine... </p>
            <p id="cRight">Copyright © 2020 Wine World </p>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-youtube"></a>
        </footer>
    </body>
    
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script src="/js/basket.js"></script>
    <script src="/js/script.js"></script>
    
    
</html>