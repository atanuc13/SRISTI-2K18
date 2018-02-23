/**
 * Created by ATANU on 06-Jan-18.
 */
var full_window_height = $(window).height();
var full_window_width = $(window).width();
console.log(full_window_width);
var width = (full_window_width-1);
console.log(width);
$(document).ready(function () {
    console.log("bal");
    if(full_window_width<768)
    {
        $('.bd').hide();
        $('.cmnt_form ').css({
            "padding-left" : 5+'px',
            "padding-top" : 100+'px',
            "padding-right" : 5+'px'
        });
        $('.comments').css({
            "padding-left" : 5+'px',
            "padding-top" : 5+'px',
            "padding-right" : 5+'px',
            "width" : 95+'vw'
        });
        $('.question').css({
            "padding-bottom" : 5+'px',
            "padding-top" : 5+'px',
            "padding-left" : 5+'px',
            "padding-right" : 5+'px',
            "font-size" : 14+'px'

        });
        $('.name_date').css({
            "font-size" : 16+'px'
        });
        $('.query').css({
            "font-size" : 13+'px'
        });
    }
});