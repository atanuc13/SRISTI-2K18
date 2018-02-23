var full_window_height = $(window).height();
console.log(full_window_height);
var full_window_width = $(window).width();
$(document).ready(function () {
    var nav_height = $('.nav-left-column').height();
    var input_height = $('#username_login').outerHeight();
    $('.nav-right-text').css({
        'height' : nav_height+'px'
    });
    /*$('.username').mouseenter(function () {
        $('.username-slide').slideDown(300);
    });
    $('.username').mouseleave(function () {
        $('.username-slide').slideUp(300);
    });*/
    $('.username').click(function () {
        $('.username-slide').slideToggle(300);
    });
    $('.content-wrapper').css({
        'height' : (full_window_height-nav_height)+'px'
    });
    $('.login-view').click(function () {
        $('.signup-form-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.login-form-wrapper').fadeIn(300);
        },300);
    });
    $('.signup-view').click(function () {
        $('.login-form-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.signup-form-wrapper').fadeIn(300);
        },300);
    });
    if(full_window_width<768)
    {
        $('.level-image').attr({
            "width" : "250",
            "height" : "250"
        });
    }
    else
    {
        $('.level-image').attr({
            "width" : "300",
            "height" : "300"
        });
    }
    $('#signup-button').css({
        'height' : input_height+'px'
    });
    $('#login-button').css({
        'height' : input_height+'px'
    });
    $('#year').css({
        'height' : input_height+'px'
    });
    $('.signout').click(function () {
        window.location = 'logout.php';
    });
});