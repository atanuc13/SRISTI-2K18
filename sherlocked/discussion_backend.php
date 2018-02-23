<?php

/**

 * Created by PhpStorm.

 * User: ATANU

 * Date: 03-Jan-18

 * Time: 8:52 PM

 */

include('session.php');

if($_SERVER["REQUEST_METHOD"] == "POST")

{

    $question = test_input($_POST['comment']);

    $name = $_SESSION['name'];

    $today = date("Y-m-d H:i:s");

    $sql = "INSERT INTO sherlock_question(question,name,time) VALUES('$question','$name','$today') ";

    $result = mysqli_query($db,$sql);

    if($result === TRUE)

        header("location: discussion.php");

    else

        echo "Error: " . $ins . "<br>" . mysqli_error($db);

}

function test_input($data) {

    $data = trim($data);

    /*$data = stripslashes($data);

    $data = htmlspecialchars($data);*/

    return $data;

}

?>