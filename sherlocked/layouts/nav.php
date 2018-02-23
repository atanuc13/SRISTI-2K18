<nav class="mynav">
    <div class="container-fluid row nms nps nav-wrapper">
        <div class="col-md-6 nav-left-column">
            <div class="sherlocked_nav_left_text">
                <a href="level.php">Sherlocked</a>
            </div>
        </div>
        <div class="col-md-6 nav-right-text nav-right-column">
            <?php
            if(isset($_SESSION))
            {
                echo '<div class="username text-center">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i> '.strtok($_SESSION['name']," ").'
                <div class="username-slide" style="display: none">
                    <ul class="username-slide-ul">
			<li><a href="discussion.php">Discussion</a></li>
                        <li><a href="leaderboard.php">Leaderboard</a></li>
                        <li><a href="logout.php">Sign Out</a></li>
                    </ul>
                </div>
            </div>';
            }
            else
            {
                echo '<div class="nav-leaderboard" style="padding-right: 15px"><a href="leaderboard.php">Leaderboard</a></div>';
                echo '<div class="nav-leaderboard" data-toggle="modal" data-target="#rules">Rules</div>';
            }
            ?>
        </div>
    </div>
    <?php
    if(isset($_SESSION))
    {
        echo "<script>$('.nav-wrapper').css({'margin-bottom' : '50px'}); $('.nav-left-column').addClass('col-xs-12'); $('.nav-right-column').addClass('col-xs-12');</script>";
    }
    else
    {
        echo "<script>$('.nav-wrapper').css({'margin-bottom' : '0'}); $('.nav-left-column').addClass('col-xs-12'); $('.nav-right-column').addClass('col-xs-12');</script>";
    }
    ?>
    <?php include 'rules_modal.php';?>
</nav>
