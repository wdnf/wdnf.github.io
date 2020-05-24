---
permalink: /php/login-signup.html
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
&lt;!DOCTYPE html &rt;
&lt;html&rt;
&lt;head&rt;
  &lt;title&rt;Login form&lt;/title&rt;
  &lt;link rel="stylesheet" type="text/css" href="style.css"&rt;
&lt;/head&rt;
&lt;body&rt;
  &lt;form method="post" class="usrloginregister" action="login.php"&rt;
  	&lt;div class="input-group"&rt;
  		&lt;label style="color:black;"&lt;Email&rt;/label&rt;
  		&lt;input type="email" name="email" &rt;
  	&lt;/div&rt;
  	&lt;div class="input-group"&rt;
  		&lt;label style="color:black;"&rt;Password</label&rt;
  		&lt;input type="password" name="password"&rt;
  	&lt;/div&rt;
  	&lt;div class="input-group"&rt;
  		&lt;button type="submit" class="btn" name="login_user"&rt;Login</button&rt;
  	&lt;/div>
  	&lt;p style="color:black;"&rt;
  		Not a member? <a href="register.php"&rt;Sign up</a&rt;
  	&lt;/p&rt;
  &lt;/form&rt;
&lt;/body&rt;
&lt;/html&rt;```
