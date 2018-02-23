<?php
/**
 * Created by PhpStorm.
 * User: ATANU
 * Date: 30-Dec-17
 * Time: 11:27 AM
 */
include('session.php');
$message = 'ok';
$level_no = $_SESSION['level_no'];
$level_no = $level_no + 1;
//echo $level_no;
$sql = "SELECT * FROM sherlock_level WHERE level = $level_no";
$result = mysqli_query($db,$sql);
$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
if(mysqli_num_rows($result) == 1)
{
    $title = $row['title'];
    $photo_address = $row['photo_address'];
    $photo_address = 'upload/'.$photo_address;
    $extension = pathinfo($photo_address, PATHINFO_EXTENSION);
    $hint = $row['hint'];
    $answer = $row['answer'];
}
else
{
    $message = 'Hold tight! New levels will be uploaded soon';
}
?>