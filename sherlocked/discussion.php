<?php include  'session.php'; ?>
<!--
* Atanu Chatterjee
* Abhisek Chaudhury
-->
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width initial-scale=1">

    <title>DISCUSSION | SHERLOCKED</title>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <link rel="stylesheet" href="css/bootstrap.min.css">

    <link rel="stylesheet" href="css/style.css">

    <link rel="stylesheet" href="css/discussion.css">

    <link href="https://fonts.googleapis.com/css?family=Orbitron:400,500,700,900" rel="stylesheet">

    <script src="js/jquery.min.js"></script>

    <!--script src="js/jquery-ui.min.js"></script-->

    <script src="js/bootstrap.min.js"></script>

    <!--script src="js/customScripts.js"></script-->

    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js"></script>

    <!--script src="js/typed.min.js"></script-->

    <!--script src="js/particles.js"></script-->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link href="https://fonts.googleapis.com/css?family=Alegreya:500" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Raleway:500" rel="stylesheet">

    <script src="js/discussion.js"></script>



</head>

<body>

    <?php include 'layouts/nav3.php'; ?>

    <div class="bd">

        <div class="notice">

            <h3 class="notice_head">NOTICE</h3>

            <?php
                $sql = "SELECT notice FROM sherlock_notice";
                $result = mysqli_query($db,$sql);
                $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
                echo "<p class=\"notice_body\">"
                            .$row['notice'].
                        "</p>";
            ?>

        </div>

        <div class="ldbd">

            <div class="row1">

                <div class="cell">NAME</div>

                <div class="cell">LEVEL</div>

            </div>

            <?php

                $sql = "SELECT name,level FROM sherlock_login WHERE access=0 ORDER BY level DESC, time ASC LIMIT 5";

                $result = mysqli_query($db,$sql);

                while($row = mysqli_fetch_array($result))

                {

                    echo "<div class=\"row1\">

                                <div class=\"cell row_content\" data-title=\"Name\">".$row['name']."</div>

                                <div class=\"cell row_content\" data-title=\"LEVEL\">".($row['level']+1)."</div>

                        </div>";

                }

            ?>

            <!--div class="row1">

                <div class="cell row_content" data-title="Name">ATANU CHATTERJEE </div>

                <div class="cell row_content" data-title="LEVEL">5</div>

            </div>

            <div class="row1">

                <div class="cell row_content" data-title="Name">ATANU CHATTERJEE</div>

                <div class="cell row_content" data-title="LEVEL">5</div>

            </div>

            <div class="row1">

                <div class="cell row_content" data-title="Name">ATANU CHATTERJEE</div>

                <div class="cell row_content" data-title="LEVEL">5</div>

            </div>

            <div class="row1">

                <div class="cell row_content" data-title="Name">ATANU CHATTERJEE</div>

                <div class="cell row_content" data-title="LEVEL">5</div>

            </div>

            <div class="row1">

                <div class="cell row_content" data-title="Name">ATANU CHATTERJEE</div>

                <div class="cell row_content" data-title="LEVEL">5</div>

            </div-->



            <a class="full" href="leaderboard.php">FULL LEADERBOARD</a>

            <!--div class="cell1">LEVEL</div-->

        </div>

    </div>

    <div class="cmnt_form">

        <form action="discussion_backend.php" method="post">

            <textarea rows=4 cols=51 name="comment" placeholder="Write Something.." id="comment" required></textarea><br>

            <input class="bttn" type="reset" name="reset">

            <input class="bttn" type="submit" name="submit">

        </form>

    </div>

    <div class="comments">

        <?php

            $sql= "SELECT * FROM sherlock_question ORDER BY time DESC ";

            $result = mysqli_query($db,$sql);

            while($row = mysqli_fetch_array($result))

            {

                $timestamp = strtotime($row['time']);

                $date = date('d-m-Y', $timestamp);

                echo "<div class=\"question\">

                            <div class=\"name_date\">

                                    <p class=\"name\">

                                        <i class=\"material-icons\">account_circle</i>&nbsp;".$row['name']." &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; <span>".$date."</span>

                                    </p>

                                <p class=\"query\">".$row['question']."</p>

                            </div>

                        </div>";

            }

        ?>

        <!--div class="question">

            <div class="name_date">

                    <p class="name">

                        <i class="material-icons">account_circle</i>&nbsp;Atanu Chatterjee &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; <span>06/01/2018</span>

                    </p>

                <p class="query">Hello 1 2 3 Mike Testing..</p>

            </div>

        </div-->

    </div>

</body>

</html>