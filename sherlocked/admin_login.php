<?php
/**
 * Created by PhpStorm.
 * User: ATANU
 * Date: 30-Dec-17
 * Time: 12:56 PM
 */
include('config.php');
session_start();
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $username = mysqli_real_escape_string($db,$_POST['username']);
    $password = mysqli_real_escape_string($db,$_POST['password']);
    //echo $password;
    $sql = "SELECT * FROM sherlock_login WHERE email = '$username'";
    $result = mysqli_query($db,$sql);
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
    if(mysqli_num_rows($result) == 1 )
    {
        if(password_verify($password,$row[password]) && $row['access'] == 1)
        {
            $_SESSION['name'] = $row['name'];
            $_SESSION['username'] = $row['email'];
            header('Location:add_level.php');
        }
        else
            header("location: add.php?error=Incorrect Password");
    }
    else{
        header("location: add.php?error=User doesn't exist");
    }
}
?>