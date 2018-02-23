<?php
/**
 * Created by PhpStorm.
 * User: ATANU
 * Date: 30-Dec-17
 * Time: 11:56 AM
 */
   session_start();
   session_unset();
   if(session_destroy()) {
       header("Location: index.php");
   }
?>