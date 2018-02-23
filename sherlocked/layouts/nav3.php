<nav class="mynav">

    <div class="container-fluid row nms nps nav-wrapper">

        <div class="col-md-6 nav-left-column">

            <div class="sherlocked_nav_left_text">

                <a href="level.php">Sherlocked</a>

            </div>

        </div>

        <div class="col-md-6 nav-right-text nav-right-column">

            <div class="sherlocked_nav_right_text">

                <a href="leaderboard.php">Leaderboard</a>

            </div>

        </div>

    </div>

    <!--?php

    if(isset($_SESSION))

    {

        echo "<script>$('.nav-wrapper').css({'margin-bottom' : '50px'}); $('.nav-left-column').addClass('col-xs-12'); $('.nav-right-column').addClass('col-xs-12');</script>";

    }

    else

    {

        echo "<script>$('.nav-wrapper').css({'margin-bottom' : '0'}); $('.nav-left-column').addClass('col-xs-12'); $('.nav-right-column').addClass('col-xs-12');</script>";

    }

    ?-->

</nav>

