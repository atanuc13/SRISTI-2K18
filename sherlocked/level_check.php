<?php

/**

 * Created by PhpStorm.

 * User: ATANU

 * Date: 30-Dec-17

 * Time: 12:16 PM

 */

include('session.php');

$message = '';

$username = $_SESSION['username'];

$level_no = $_SESSION['level_no'];

$level_no = $level_no + 1;

if($_SERVER["REQUEST_METHOD"] == "POST")

{

    $answer = mysqli_real_escape_string($db,$_POST['answer']);

    $answer = strtoupper($answer);

    echo $level_no;

    $sql = "SELECT * FROM sherlock_level WHERE level = $level_no";

    $result = mysqli_query($db,$sql);

    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

    if(mysqli_num_rows($result) == 1)

    {

        echo "hng";

        echo $answer;

        echo "\n";

        echo $row['answer'];

        if($answer === $row['answer'])

        {

            echo "km ";

            echo $login_session;

	    $today = date("Y-m-d H:i:s");

            $sql = "UPDATE sherlock_login SET level=$level_no,time='$today' WHERE email= '$username'";

            if (mysqli_query($db, $sql)) {

                echo "Record updated successfully";

            } else {

                echo "Error updating record: " . mysqli_error($conn);

            }

        }

    }

    header('Location:level.php');

}

?>