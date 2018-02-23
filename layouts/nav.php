<nav class="mynav">
    <div class="container-fluid hidden-xs">
        <div class="row nms">
            <div class="col-md-4 nps">
                <div class="navbar-list">
                    <div class="navbar-list-items" onclick="window.location='index.php'">
                        <img src="imgs/tornado.png">
                        HOME
                    </div>
                    <div class="navbar-list-items" onclick="window.location='events.php'">
                        EVENTS
                    </div>
                    <div class="navbar-list-items" onclick="window.location='http://sristi.tech/sherlocked'">
                        SHERLOCKED
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <img src="imgs/a.png" width="200">
            </div>
            <div class="col-md-4 nps">
                <div class="navbar-list">
                    <div class="navbar-list-items" onclick="window.location='guests.php'">
                        GUESTS
                    </div>
                    <div class="navbar-list-items" onclick="window.location='contactus.php'">
                        CONTACT US
                    </div>
                    <div class="navbar-list-items" onclick="window.location='register.php'">
                        REGISTER
                        <img src="imgs/collegelogowhite.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid hidden-sm hidden-lg hidden-md nps">
        <div  class="row nms" style="display: flex; flex-wrap: wrap; align-items: center">
            <div class="col-xs-3 nps text-center">
                <img src="imgs/collegelogowhite.png" width="70">
            </div>
            <div class="col-xs-7 text-center nps">
                <img src="imgs/a.png" width="150">
            </div>
            <div class="col-xs-2 nps text-right" style="font-size: 24px; color: white;" id="nav-toggler">
                <i class="fa fa-bars" aria-hidden="true" style="padding-right: 10px"></i>
            </div>
            <div class="col-xs-2 nps text-right" style="font-size: 24px; color: white; display: none" id="nav-close-toggler">
                <i class="fa fa-times" aria-hidden="true" style="padding-right: 10px"></i>
            </div>
        </div>
        <div style="background-color: rgba(0,0,0,0.6); display: none; position: absolute; z-index: 1" id="nav-dropdown">
            <ul style="list-style: none" class="nps text-center">
                <li class="navbar-list-items" onclick="window.location='index.php'">HOME</li>
                <li class="navbar-list-items" onclick="window.location='events.php'">EVENTS</li>
                <li class="navbar-list-items" onclick="window.location='http://sristi.tech/sherlocked'">SHERLOCKED</li>
                <li class="navbar-list-items" onclick="window.location='guests.php'">GUESTS</li>
                <li class="navbar-list-items" onclick="window.location='contactus.php'">CONTACT US</li>
                <li class="navbar-list-items" onclick="window.location='register.php'">REGISTER</li>
                <li class="navbar-list-items" onclick="window.location='aboutus.php'">ABOUT US</li>
                <li class="navbar-list-items" onclick="window.location='sponsors.php'">SPONSORS</li>
                <li class="navbar-list-items" onclick="window.location='schedule.php'">SCHEDULE</li>
                <li class="navbar-list-items"><a href="attatchments/ca.pdf" target="_blank"><span class="link-styles">CAMPUS REPRESENTATIVES</span></a></li>
                <li class="navbar-list-items" onclick="window.location='comingsoon.php'">ACCOMODATION</li>
            </ul>
        </div>
    </div>
</nav>