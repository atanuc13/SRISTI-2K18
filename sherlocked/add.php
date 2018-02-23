<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes">
    <title>Admin LogIn</title>
</head>
<body>
    <form action="admin_login.php" method="post">
        <br>
        <h2>Log In</h2><hr>
        <div id="error">
        </div>
        <input type="text" name="username" id="username" placeholder="username" required><br><br>
        <input type="password" name="password" id="password" placeholder="Password" required><br>
        <p  id="error"><?php echo isset($_GET['error'])?$_GET['error']:"<br>"; ?></p>
        <input type="submit" name="submit"><br>
    </form>
</body>
</html>