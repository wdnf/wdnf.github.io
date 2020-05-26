---
permalink: /php/login.html
---
# Login system in PHP and SQL
This lesson will teach you how to create and use a login/signup system in PHP and SQL. You are expected to have intermidiate experience in both of these languages before continuing.
## Files:
Create these files on a web server with at least PHP 5.6 installed:
- index.php
- server.php
- login.php

## Login form (login.php):
```html
  <form method="post" action="server.php">
  	<div class="input-group">
  		<label style="color:black;">Email<label>
  		<input type="email" name="email">
  	</div>
  	<div class="input-group">
  		<label style="color:black;">Password</label>
  		<input type="password" name="password">
  	</div>
  	<div class="input-group">
  	  <button type="submit" class="btn" name="login_user">Login</button>
  	</div>
  </form>;
```
The **post** method sends the data from the form to the **server.php** file, which we can do things with.

## Backend stuff (server.php):
```php
  session_start();
  $db = mysqli_connect(SERVER, USERNAME, PASSWORD, DATABASE_NAME);
```
`session_start()` starts a [PHP session](https://www.php.net/manual/en/book.session.php){target="_blank"}., `mysqli_connect()` is what connects and selects the database to use for the rest of the code. `SERVER` represents the server name, usually `localhost`. `USERNAME` is the username of the MySQL user. `PASSWORD` is the password for the MySQL user. `DATABASE_NAME` is the name of the database owned by the MySQL user.
```php
  $db = mysqli_connect(SERVER, USERNAME, PASSWORD, DATABASE_NAME);
  if (isset($_POST['login_user'])) {
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
  }
```
`if (isset($_POST['login_user']))` checks to make sure the "Login" button was clicked before accessing `server.php`. `mysqli_real_escape_string()` escapes the inputted strings for `$_POST['email']` and `$_POST['password']` in case the user inputted any malicious content.
```php
  $db = mysqli_connect(SERVER, USERNAME, PASSWORD, DATABASE_NAME);
  if (isset($_POST['login_user'])) {
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
    $password = md5($password);
    $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
  	$results = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($results);
    $username = $row['username'];
    $email = $row['email'];
    $id = $row['id'];
  }
```
`md5($password)` hashes the password in MD5 format. This isn't the most secure option, so you might want to look into other hashing methods for later. I won't be explaining the SQL in this tutorial, you can learn that using other tutorials. `mysqli_query($db, $query)` executes the SQL on the webpage. `mysqli_fetch_assoc($results)` converts the output into an array. We can now use `$row['column']` to get something from the database. 
```
  $db = mysqli_connect(SERVER, USERNAME, PASSWORD, DATABASE_NAME);
  if (isset($_POST['login_user'])) {
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
    $password = md5($password);
    $query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
  	$results = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($results);
    $username = $row['username'];
    $email = $row['email'];
    $id = $row['id'];
    
    if (mysqli_num_rows($results) == 1) {
      $_SESSION['username'] = $username;
      $_SESSION['email'] = $email;
      $_SESSION['id'] = $id;
      $_SESSION['success'] = "You are now logged in";
      $_SESSION['loggedin'] = true;
      header('Location: index.php');
    }
  }
```
`if (mysqli_num_rows($results) == 1)` checks to make sure exactly one user was given from the MySQL query. `$_SESSION['username'] = $username` sets the session variable `username` to the users username in the database. This can later be accessed by other pages. The same goes for the other variables. `header('Location: index.php')` redirects the user to the index page after the PHP is run.

**You have finished *Part 1* of this lesson! *Part 2* will be out shortly!**
