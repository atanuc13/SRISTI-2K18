<?php
/**
 * Created by PhpStorm.
 * User: ATANU
 * Date: 28-Dec-17
 * Time: 4:56 PM
 */
	include('config.php');
	if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $name = test_input($_POST['name']);
        $email = test_input($_POST['email']);
        $ph_no = test_input($_POST['ph_no']);
        $year = test_input($_POST['year']);
        $college = test_input($_POST['college']);
        $password = test_input($_POST['password']);
        $password = password_hash($password,PASSWORD_DEFAULT);
        $sql = "SELECT email FROM sherlock_login WHERE email = '$email'";
        $result = mysqli_query($db,$sql);
        $sql2 = "SELECT ph_no FROM sherlock_login WHERE ph_no = '$ph_no'";
        $result2 = mysqli_query($db,$sql2);
        if(mysqli_num_rows($result) > 0)
        {
            header("location: index.php?signuperror=Email is already taken");
        }
        elseif(mysqli_num_rows($result2) > 0)
        {
            header("location: index.php?signuperror=Phone No. is already taken");
        }
        else
        {
            $today = date("Y-m-d H:i:s");
            $ins = "INSERT INTO sherlock_login(name,email,ph_no,year,college,time,password) VALUES('$name','$email','$ph_no','$year','$college','$today','$password')";
            if(mysqli_query($db,$ins) === TRUE)
            {
                $message ="Thanks for Registering ".$name." .Click Enter to Log In";
                echo "<script type='text/javascript'>alert('$message');</script>";
               /* echo "Thanks for Registering, ".$name."<br>";
                echo "You will be redirected to the login page soon";*/
               //header("location: index.php");
                header("refresh:0.01;url=index.php");
            }
            else
                echo "Error: " . $ins . "<br>" . mysqli_error($db);
        }
    }
	function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>