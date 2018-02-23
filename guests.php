<?php
/**
 * Created by PhpStorm.
 * User: abhisek_ch
 * Date: 3/2/18
 * Time: 6:52 PM
 */
include 'layouts/head.php'; ?>
<body>
<?php include 'layouts/nav.php'; ?>
<div class="content-wrapper" id="particles-js">
		<div id="loader-wrapper">
			<div id="loader"></div>
			<div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>

		</div>
    <div class="absolute-pos wf" style="height: inherit; margin-top: 10px; margin-bottom: 10px">
        <div id="myCarousel" class="carousel slide m5emh" data-ride="carousel" style="height: inherit" data-interval="3500">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" style="height: inherit">
                <div class="item active text-center" style="height: inherit">
                    <img src="imgs/guests/Sandeep-Jain.png" alt="Sandeep Jain" style="height: inherit; margin-left: auto; margin-right: auto">
                    <div class="carousel-caption" style="background-color: rgba(0,0,0,0.4)">
                        <h3>Mr. Sandeep Jain</h3>
                        <h5>GeeksforGeeks</h5>
                    </div>
                </div>

                <div class="item text-center" style="height: inherit">
                    <img src="imgs/guests/apurba.jpg" alt="Apurba Sarkar" style="height: inherit; margin-left: auto; margin-right: auto">
                    <div class="carousel-caption" style="background-color: rgba(0,0,0,0.4)">
                        <h3>Dr. Apurba Sarkar</h3>
                        <h5>Indian Institute of Engineering Science and Technology, Shibpur</h5>
                    </div>
                </div>

                <div class="item text-center" style="height: inherit">
                    <img src="imgs/guests/Asit.jpg" alt="Asit Kumar Das" style="height: inherit; margin-left: auto; margin-right: auto">
                    <div class="carousel-caption" style="background-color: rgba(0,0,0,0.4)">
                        <h3>Dr. Asit Kumar Das</h3>
                        <h5>Indian Institute of Engineering Science and Technology, Shibpur</h5>
                    </div>
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>
<script>
    $('#myCarousel').css({
        'height' : (full_window_height-2*$('.mynav').height()-20)+'px'
    });
    $('.carousel').carousel({
        pause: 'none'
    });
</script>
<?php include 'layouts/foot.php'; ?>
</body>
</html>
