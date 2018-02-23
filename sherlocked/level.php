<?php
/**
 * Created by PhpStorm.
 * User: ATANU
 * Date: 30-Dec-17
 * Time: 11:13 AM
 */
include('level_details.php');
?>
<?php include 'layouts/head.php'; ?>
<body>
<?php include 'layouts/nav.php'; ?>
<?php
if($message == 'ok')
{
    echo '<div class="container-fluid row nms">
    <div class="col-md-12 col-xs-12 text-center">
        <h1 class="level-top-hint">'.$title.'</h1>';
    if($extension == "mp3")
    {
        echo '<audio controls style="margin-bottom: 30px"><source src="'.$photo_address.'"></audio>';
    }
    else
    {
        echo '<img class="level-image" src="'.$photo_address.'" style="margin-bottom: 30px">';
    }
    echo '<form action="level_check.php" method="post">
            <input type="text" name="answer" id="answer" placeholder="Answer" required>
            <button type="submit" name="submit" id="answer-submit">Submit!</button>
        </form>
        <!--'.$hint.'-->
    </div>
</div>';
}
else
{
    echo '<div class="container-fluid row nms"><div class="col-xs-12 col-md-12 text-center"><h1 class="level-top-hint">'.$message.'</h1></div></div>';
}
?>
</body>
</html>
<!--html>

    <head>
        <title>Level <?php //echo ($level_no); ?> </title>
        <link rel="stylesheet" type="text/css" href="main2.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>
    <body>
        <h1>Welcome <?php //echo $_SESSION['name']; ?></h1>
        <h2 style="text-align:right;margin-top: -60px"><a href = "logout.php">Log Out</a></h2>
        <?php
            /*if($message == 'ok')
            {
                echo "<div>". $title."</div>";
                echo "<div><img src=\"upload/".$photo_address."\" height='200' width='200' ></div>";
                echo "<form action=\"level_check.php\" method=\"post\">";
                echo "<input type=\"text\" name=\"answer\" id=\"answer\" placeholder=\"Answer\" required><br><br>";
                echo "<input type=\"submit\" name=\"submit\"><br>";
                echo "</form><br><br><br>";
                echo "<!--".$hint."-->";
            }
            else
            {
                echo "<div>".$message."</div>";
            }*/
        ?>
    </body>
</html-->
