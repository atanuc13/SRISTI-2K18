<?php
include('admin_session.php');
?>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes">
    <title>Add Level</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/add_level.js"></script>

</head>
<body style="padding-top: 100px;">
    <h2 style="text-align:right;margin-top: -60px"><a href = "logout.php">Log Out</a></h2>
    <div id="level">
        <form action="add_level_backend.php" method="post" enctype="multipart/form-data">
            <input type="text" name="title" id="title" placeholder="Title" required><br><br>
            <input type="file" name="fileToUpload" id="fileToUpload" required><br><br>
            <input type="text" name="hint" id="hint" placeholder="Hint" required><br><br>
            <input type="text" name="answer" id="answer" placeholder="Answer" required><br><br>
            <p  id="error"><?php echo isset($_GET['message'])?$_GET['message']:"<br>"; ?></p>
            <p  id="error"><?php echo isset($_GET['message2'])?$_GET['message2']:"<br>"; ?></p>
            <input type="submit"  name="submit">
        </form>
        <div style="cursor: pointer;" id="view_notice">NOTICE</div>
    </div>
    <div id="notice">
        <form action="add_notice_backend.php" method="post">
            <textarea rows=4 cols=51 name="comment" placeholder="Write Something...(for new line use <br>)" id="comment" required></textarea><br>
            <input type="submit"  name="submit">
        </form>
        <div style="cursor: pointer;" id="view_level">ADD LEVEL</div>
    </div>
</body>
</html>