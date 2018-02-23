<?php
/**
 * Created by PhpStorm.
 * User: abhisek_ch
 * Date: 5/2/18
 * Time: 3:36 PM
 */
include 'layouts/head.php'; ?>
    <body>
<?php include 'layouts/nav.php'; ?>
<style>
    #name, #email, #clgname, #mobno, #paytm {
        background-color: transparent;
        color: white;
    }
    label {
        color: white;
        font-family: Orbitron;
    }
</style>
<div class="content-wrapper" id="particles-js">
		<div id="loader-wrapper">
			<div id="loader"></div>
			<div class="loader-section section-left"></div>
            <div class="loader-section section-right"></div>

		</div>
    <div class="absolute-pos wf">
        <h1 class="contact-us-h1 text-center">Sign-Up</h1>
        <div class="container">
            <form id="sristi-signup-form-wrapper" class="col-md-offset-3 col-md-6 col-xs-offset-2 col-xs-8" action="register_backend.php" method="post">
                <div class="form-group">
                    <label for="name">Name:<span style="color: red">*</span></label>
                    <input type="text" class="form-control" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:<span style="color: red">*</span></label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="clgname">College:<span style="color: red">*</span></label>
                    <input type="text" class="form-control" id="clgname" name="clgname" required>
                </div>
                <div class="form-group">
                    <label for="mobno">Mobile Number:<span style="color: red">*</span></label>
                    <input type="number" class="form-control" id="mobno" name="mobno" required>
                </div>
                <div class="form-group">
                    <label for="paytm">Paytm Wallet Transaction ID:<span style="color: red">*</span></label>
                    <input type="text" class="form-control" id="paytm" name="paytm" required>
                </div>
                <p class="text-center without-acco" style="color: white; font-family: Orbitron">
                    Without accomodation, charges payable are Rs. 350/- for the fest only. Scan the QR-Code given below and pay Rs. 350/- . Kindly keep a note of the Transaction ID and enter above.
                </p>
                <p class="text-center with-acco" style="color: white; font-family: Orbitron; display: none">
                    With accomodation, charges payable are Rs. 350/- for fest + Rs. 100 per day for accomodation only. Scan the QR-Code given below and pay Rs. 450/- . Kindly keep a note of the Transaction ID and enter above.
                </p>
                <div class="form-group">
                    <label for="year" class="wf">Year:<span style="color: red">*</span></label>
                    <label class="radio-inline">
                        <input type="radio" id="year1" name="year" value="1" checked>1st
                    </label>
                    <label class="radio-inline">
                        <input type="radio" id="year2" name="year" value="2" checked>2nd
                    </label>
                    <label class="radio-inline">
                        <input type="radio" id="year3" name="year" value="3" checked>3rd
                    </label>
                    <label class="radio-inline">
                        <input type="radio" id="year4" name="year" value="4" checked>4th
                    </label>
                    <label class="radio-inline">
                        <input type="radio" id="year5" name="year" value="5" checked>Other
                    </label>
                </div>
                <div class="form-group">
                    <label for="gender" class="wf">Gender:<span style="color: red">*</span></label>
                    <label class="radio-inline">
                        <input type="radio" id="gender1" name="gender" value="m" checked>Male
                    </label>
                    <label class="radio-inline">
                        <input type="radio" id="gender2" name="gender" value="f">Female
                    </label>
                </div>
                <div class="form-group radio-wrapper">
                    <label for="acco" class="wf">Accomodation Needed?<span style="color: red">*</span></label>
                    <label class="radio-inline">
                        <input type="radio" id="acco1" name="acco" value="y" checked>Yes
                    </label>
                    <label class="radio-inline">
                        <input type="radio" id="acco2" name="acco" value="n">No
                    </label>
                </div>
                <div class="text-center" style="margin-bottom: 5px">
                    <img src="imgs/Paytm.PNG" width="350" height="350">
                </div>
                <input type="submit" name="submit" value="submit">
            </form>
        </div>
    </div>
</div>
<?php include 'layouts/foot.php'; ?>
    <script>
        $(document).ready(function () {
            var nav_height = $('.mynav').height();
            $('#sristi-signup-form-wrapper').css({
                'padding-bottom' : (nav_height+10)+'px'
            });
            $('.radio-wrapper').click(function () {
                if($('#acco1').is(':checked'))
                {
                    $('.without-acco').hide();
                    $('.with-acco').show();
                }
                if($('#acco2').is(':checked'))
                {
                    $('.with-acco').hide();
                    $('.without-acco').show();
                }
            });
        });
    </script>
    </body>
</html>
