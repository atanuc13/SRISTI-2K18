<?php

/**

 * Created by PhpStorm.

 * User: ATANU

 * Date: 05-Jan-18

 * Time: 3:20 PM

 */

include 'layouts/head_lb.php';

include('config.php');

$sql = "SELECT * FROM sherlock_login WHERE access=0 ORDER BY level DESC, time ASC ";

$result = mysqli_query($db,$sql);

?>

<body>

<?php include 'layouts/nav2.php'; ?>

<div class="bd" >

    <div class="table">



        <div class="row1 header green">

            <div class="cell">

                Name

            </div>

            <div class="cell">

                Email

            </div>

            <div class="cell">

                Year

            </div>

            <div class="cell">

                College

            </div>

            <div class="cell">

                Level

            </div>

        </div>

        <?php

        while($row = mysqli_fetch_array($result))

        {
            if($row['year']==5)
                $year="Other";
            else
                $year=$row['year'];

            echo "        <div style='font-family: \"Roboto Mono\"'  class=\"row1\">

            <div class=\"cell\" data-title=\"Name\">".

                $row['name'].

            "</div>

            <div class=\"cell\" data-title=\"Email\">".

                $row['email'].

            "</div>

            <div class=\"cell\" data-title=\"Year\">".

                $year.

            "</div>

            <div class=\"cell\" data-title=\"College\">".

                $row['college'].

            "</div>

            <div class=\"cell\" data-title=\"Level\">".

            ($row['level']+1).

            "</div>

        </div>";

        }

        ?>







    </div>

</div>

</body>

