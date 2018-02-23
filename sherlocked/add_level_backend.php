<?php

/**

 * Created by PhpStorm.

 * User: ATANU

 * Date: 30-Dec-17

 * Time: 5:51 PM

 */

include('config.php');

$target_dir = "upload/";

$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

$uploadOk = 1;

$name = pathinfo($target_file, PATHINFO_FILENAME);

$extension = pathinfo($target_file, PATHINFO_EXTENSION);

$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

// Check if image file is a actual image or fake image

if(isset($_POST["submit"])) {

    $increment = 0;

    $path = $name . '.' . $imageFileType;

    $uploadOk = 1;

    /*$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);

    if($check !== false) {



    } else {

        header("location: add_level.php?message=File is not an image.");

        $uploadOk = 0;

    }*/

}

while(is_file($target_dir.'/'.$path)) {

    $increment++;

    $path = $name . $increment . '.' . $imageFileType;

}

// Check if file already exists

/*if (is_file($uploads_dir.'/'.$pname)) {

   // header("location: add_level.php?message=Sorry, file already exists.");

    $uploadOk = 0;

}*/

// Check file size

if ($_FILES["fileToUpload"]["size"] > 500000) {

    header("location: add_level.php?message=Sorry, your file is too large.");

    $uploadOk = 0;

}

// Allow certain file formats

if($imageFileType != "jpg" && $imageFileType != "JPG" && $imageFileType != "png" && $imageFileType != "PNG" && $imageFileType != "jpeg"

    && $imageFileType != "JPEG" && $imageFileType != "gif" && $imageFileType != "GIF" && $imageFileType != "mp3" && $imageFileType != "MP3" ) {

    header("location: add_level.php?message=Sorry, only JPG, JPEG, PNG, GIF & MP3 files are allowed.");

    $uploadOk = 0;

}



// Check if $uploadOk is set to 0 by an error

/*if ($uploadOk == 0) {

	header("location: welcome.php?message=Sorry, your file was not uploaded.");

// if everything is ok, try to upload file

} */else {

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_dir.'/'.$path)) {



        if($_SERVER["REQUEST_METHOD"] == "POST")

        {

            $count = "SELECT * FROM sherlock_level";

            $result = mysqli_query($db,$count);

            $cnt = mysqli_num_rows($result);

            $cnt =$cnt+1;

            echo $cnt;

            $title = mysqli_real_escape_string($db,$_POST['title']);

            $hint = mysqli_real_escape_string($db,$_POST['hint']);

            $answer = mysqli_real_escape_string($db,$_POST['answer']);

            $answer = strtoupper($answer);

            $sql = "INSERT INTO sherlock_level(level,title,photo_address,hint,answer) VALUES('$cnt','$title','$path','$hint','$answer')";

            if(mysqli_query($db,$sql) == TRUE)

                header("location: add_level.php?message=The file has been uploaded successfully");

            //echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";

            //header("location: welcome.php?message=The file has been uploaded successfully");

           /* else

                echo mysqli_error('$db',$sql);*/

        }



    } else {

        header("location: add_level.php?message=Sorry, there was an error uploading your file.");

    }

}

?>