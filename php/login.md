---
permalink: /php/login.html
---
# Login and signup system in PHP and MySQL
This lesson will teach you how to create and use a login/signup system in PHP and SQL. You are expected to have intermidiate experience in both of these languages before continuing.
## Files:
Create these files on a web server with at least PHP 5.6 installed:
- index.php
- server.php
- register.php
- login.php

## Login form:
```html
  <form method="post" class="usrloginregister" action="login.php">
  	<div class="input-group">
  		<label style="color:black;"&lt;Email><label>
  		<input type="email" name="email">
  	</div>
  	<div class="input-group">
  		<label style="color:black;">Password</label>
  		<input type="password" name="password">
  	</div>
  	<div class="input-group">
  	  <button type="submit" class="btn" name="login_user">Login</button>
  	</div>
  	<p style="color:black;">
      Not a member? <a href="register.php"&rt;Sign up</a>
    </p>
  </form>;
```
