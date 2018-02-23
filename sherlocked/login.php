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

    $username = mysqli_real_escape_string($db,$_POST['username_login']);

    $password = mysqli_real_escape_string($db,$_POST['password_login']);

    //echo $password;

    $sql = "SELECT * FROM sherlock_login WHERE email = '$username'";

    $result = mysqli_query($db,$sql);

    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

    if(mysqli_num_rows($result) == 1 )

    {

        if(password_verify($password,$row['password']))

        {

            $_SESSION['name'] = $row['name'];

            $_SESSION['username'] = $row['email'];

            header('Location:level.php');

        }

        else

            header("location: index.php?loginerror=Incorrect Password");

    }

    else{

        header("location: index.php?loginerror=User doesn't exist");

    }

}

?>