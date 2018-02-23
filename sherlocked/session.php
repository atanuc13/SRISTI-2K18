<?php
/**
 * Created by PhpStorm.
 * User: ATANU
 * Date: 30-Dec-17
 * Time: 11:23 AM
 */
   include('config.php');
   session_start();

   $user_check = $_SESSION['username'];

   $ses_sql = mysqli_query($db,"select * from sherlock_login where email = '$user_check' ");

   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);

   $login_session = $row['email'];
   $_SESSION['level_no'] = $row['level'];

   if(!isset($_SESSION['username'])){
       header("location:index.php");
   }
?>