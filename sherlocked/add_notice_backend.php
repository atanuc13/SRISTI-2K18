<?php
/**
 * Created by PhpStorm.
 * User: ATANU
 * Date: 08-Jan-18
 * Time: 9:08 PM
 */
include('session.php');
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $notice = mysqli_real_escape_string($db,$_POST['comment']);
    $user = $_SESSION['username'];
    $today = date("Y-m-d H:i:s");
    $sql = "UPDATE sherlock_notice SET notice='$notice',user='$user',time='$today'";
    if(mysqli_query($db,$sql) === TRUE)
    {

        header("location: add_level.php");
    }
    else
        echo "Error: " . $ins . "<br>" . mysqli_error($db);
}
?>