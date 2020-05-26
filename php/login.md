---
permalink: /php/login.html
---
# Login and system in PHP and SQL
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
  $db = mysqli_connect(SERVER, USERNAME, PASSWORD, DATABASE_NAME);
```
`mysqli_connect()` is what connects and selects the database to use for the rest of the code. `SERVER` represents the server name, usually `localhost`. `USERNAME` is the username of the MySQL user. `PASSWORD` is the password for the MySQL user. `DATABASE_NAME` is the name of the database owned by the MySQL user.
```php
  $db = mysqli_connect(SERVER, USERNAME, PASSWORD, DATABASE_NAME);
  if (isset($_POST['login_user'])) {
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
  }
```
`if (isset($_POST['login_user']))` checks to make sure the "Login" button was clicked before accessing `server.php`. `mysqli_real_escape_string()` escapes the inputted strings for `$_POST['email']` and `$_POST['password']`
