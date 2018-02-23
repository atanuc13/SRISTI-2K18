<?php
/**
 * Created by PhpStorm.
 * User: ATANU
 * Date: 05-Feb-18
 * Time: 5:15 PM
 */
include("sherlocked/config.php");
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $name = test_input($_POST['name']);
    $email = test_input($_POST['email']);
    $year = test_input($_POST['year']);
    $college = test_input($_POST['clgname']);
    $ph_no = test_input($_POST['mobno']);
    $sex = test_input($_POST['gender']);
    $acco = test_input($_POST['acco']);
    $trans_id = test_input($_POST['paytm']);
    $ins = "INSERT INTO reg_acco(name,year,college,email,ph_no,sex,acco,trans_id) VALUES('$name','$year','$college','$email','$ph_no','$sex','$acco','$trans_id')";
    if(mysqli_query($db,$ins) === TRUE)
    {
        $msg = 'Registered Successfully!!';
        echo "<script>alert('$msg')</script>";
        header("Refresh:0.01; url=register.php");
    }
    else
    {
        $msg = 'Problem in Registering!!';
        echo "<script>alert('$msg')</script>";
        header("Refresh:0.01; url=register.php");
    }
        //echo "Error: " . $ins . "<br>" . mysqli_error($db);

}
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>