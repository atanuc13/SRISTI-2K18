<?php

   date_default_timezone_set('Asia/Kolkata');
   define('DB_SERVER', '');		//SERVER_NAME

   define('DB_USERNAME', '');		//DB_USERNAME

   define('DB_PASSWORD', '');		//DB_PASSWORD

   define('DB_DATABASE', '');		//DB_NAME

   $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

?>