<?php include 'layouts/head.php'; ?>
<body>
<?php include 'layouts/nav.php'; ?>
<div class="content-wrapper" id="particles-js">
    <div class="absolute-pos wf" style="height: inherit">
        <div class="container-fluid row" style="height: inherit;">
            <div class="col-md-6 col-xs-12 login-form-outer-wrapper">
                <div class="login-form-wrapper">
                    <form action="login.php" class="form-horizontal" method="post" style="padding: 20px; display: flex; flex-direction: column">
                        <h1 style="font-family: orbitron; color: white">Log In</h1>
                        <hr class="wf">
                        <div class="form-group row nms">
                            <input class="col-md-7 col-xs-12" type="email" name="username_login" id="username_login" placeholder="Email" required>
                        </div>
                        <div class="form-group row nms">
                            <input class="col-md-7 col-xs-12" type="password" name="password_login" id="password_login" placeholder="Password"  required>
                        </div>
                        <p class="error"><?php echo isset($_GET['loginerror'])?$_GET['loginerror']:""; ?></p>
                        <div class="form-group row nms">
                            <button type="submit" name="submit" id="login-button">Log In!</button>
                        </div>
                        <div style="color: white; font-family: orbitron; font-size: 12px">Don't have account? <span class="signup-view">Sign Up</span></div>
                    </form>
                </div>
                <div class="signup-form-wrapper" style="display: none">
                    <form action="register.php" class="form-horizontal" method="post" id="signup" style="padding: 20px; display: flex; flex-direction: column">
                        <h1 style="font-family: orbitron; color: white">Sign Up</h1>
                        <hr class="wf">
                        <div class="form-group row nms">
                            <input class="col-md-7 col-xs-12" type="text" name="name" id="name" placeholder="Name" id="name">
                        </div>
                        <!--div class="form-group row nms">
                            <input type="text" name="year" id="year" placeholder="Year" id="year">
                        </div-->
                        <div class="form-group row nms">
                            <select name="year" id="year" class="col-md-7 col-xs-12">
                                <option selected disabled>Select Your Year</option>
                                <option style="background-color: black" value="1">1st Year</option>
                                <option style="background-color: black" value="2">2nd Year</option>
                                <option style="background-color: black" value="3">3rd Year</option>
                                <option style="background-color: black" value="4">4th Year</option>
                                <option style="background-color: black" value="5">Other</option>
                            </select>
                        </div>
                        <div class="form-group row nms">
                            <input class="col-md-7 col-xs-12" type="text" name="college" id="college" placeholder="College" id="college">
                        </div>
                        <div class="form-group row nms">
                            <input class="col-md-7 col-xs-12" type="email" name="email" id="email" placeholder="Email" id="email">
                        </div>
                        <div class="form-group row nms">
                            <input class="col-md-7 col-xs-12" type="tel" name="ph_no" id="ph_no" placeholder="Phone No." id="ph_no">
                        </div>
                        <div class="form-group row nms">
                            <input class="col-md-7 col-xs-12" type="password" name="password" id="password" placeholder="Password" id="password">
                        </div>
                        <div class="form-group row nms">
                            <input class="col-md-7 col-xs-12" type="password" name="re_password" id="re_password" placeholder="Retype Password" id="re_password">
                        </div>
                        <p class="error"><?php echo isset($_GET['signuperror'])?$_GET['signuperror']:""; ?></p>
                        <div class="form-group row nms">
                            <button type="submit" name="submit"id="signup-button">Sign Up!</button>
                        </div>
                        <div style="color: white; font-family: orbitron; font-size: 12px">Already have an account? <span class="login-view">Log In</span></div>
                    </form>
                </div>
            </div>
            <div class="col-md-6 hidden-xs sherlocked_login_page_right_image">
                <img src="imgs/sher1_edit.png" width="390">
            </div>
        </div>
    </div>
</div>
<script>
    $('document').ready(function()
    {
        $("#signup").validate({
            rules:
                {
                    name: {
                        required: true
                    },
                    year: {
                        required: true
                    },
                    college: {
                        required: true
                    },
                    email: {
                        required: true
                    },
                    ph_no: {
                        required: true,
                        minlength: 10,
                        maxlength:10
                    },
                    password: {
                        required: true,
                        minlength: 8
                    },
                    re_password: {
                        required: true,
                        equalTo: '#password'
                    }
                },
            messages:
                {
                    name: "Enter a Valid Name",
                    year: "Enter a Valid Year",
                    college: "Enter a Valid College",
                    email: "Enter a Valid E-mail",
                    ph_no: {
                        required: "Enter a Mobile Number",
                        minlength: "Enter exactly 10 digits!",
                        maxlength: "Enter exactly 10 digits!"
                    },
                    password:{
                        required: "Provide a Password",
                        minlength: "Minimum 8 Characters"
                    },
                    re_password:{
                        required: "Retype Your Password",
                        equalTo: "Mismatch! Retype"
                    }
                }
        });
    });
</script>
<?php
if(isset($_GET['signuperror']))
{
    echo "<script>  
      $(document).ready(function () {
        $('.login-form-wrapper').hide();
        $('.signup-form-wrapper').show();
        var input_height = $('#email').outerHeight();
            $('#signup-button').css({
        'height' : input_height+'px'
    });
    $('#login-button').css({
        'height' : input_height+'px'
    });
    $('#year').css({
        'height' : input_height+'px'
    });
    });
        </script>";
}
?>
<script type="text/javascript">
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
</script>
</body>
</html>
