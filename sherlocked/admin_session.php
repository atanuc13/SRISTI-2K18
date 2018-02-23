<?php
/**
 * Created by PhpStorm.
 * User: ATANU
 * Date: 30-Dec-17
 * Time: 5:40 PM
 */
include('config.php');
session_start();

$user_check = $_SESSION['username'];

$ses_sql = mysqli_query($db,"select email from sherlock_login where email = '$user_check' ");

$row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);

$login_session = $row['email'];

if(!isset($_SESSION['username'])){
    header("location:add.php");
}
?>