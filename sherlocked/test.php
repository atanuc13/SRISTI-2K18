<?php

/**

 * Created by PhpStorm.

 * User: ATANU

 * Date: 30-Dec-17

 * Time: 5:59 PM

 */

include('config.php');

/*$password = 'hostel4';

$password = password_hash($password,PASSWORD_DEFAULT);

$count = "INSERT INTO sherlock_login(name,email,ph_no,password,access) VALUES('admin','admin@admin.com',100,'$password',1)";

$result = mysqli_query($db,$count);*/

$today = date("Y-m-d H:i:s");

$sql = "UPDATE sherlock_login SET time='$today' WHERE email= 'atanuc13@gmail.com'";

$result = mysqli_query($db,$sql);
echo mysqli_error($db);
echo date_default_timezone_get();
$today = date("Y-m-d H:i:s");
echo $today;

?>