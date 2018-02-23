var full_window_height = $(window).height();
var full_window_width = $(window).width();
$(document).ready(function () {
    var nav_height = $('.mynav').height();
    var foot_height = $('.myfoot').height();
    console.log(nav_height);
    var nav_height1 = nav_height*1/3;
    var coord_email_height = $('.coord-emails').height();
    var chief_names_height = $('#chief-names').height();
    var col_md_4_width = $('.event-main-posters').width();
    var events_top_header_height = $('.contact-us-h1').height()+30;
    var events_main_poster_height = (full_window_height-(2*nav_height+100))/2; //events_top_header_height
    var first_row = 5*nav_height;
    console.log(events_main_poster_height);

    if(full_window_width>768)
    {
        var event_wrapper_height = full_window_height -2*nav_height;
    }
    else
    {
        var event_wrapper_height = full_window_height -(2*nav_height+events_top_header_height);
    }
    $('#name-slider-inner-wrapper').css({
        'height' : (chief_names_height)+'px'
    });
    var name_slider_inner_height = $('#name-slider-inner-wrapper').height();
    console.log('nav '+ nav_height );
    console.log('he ' + full_window_height);
    console.log('wi ' + full_window_width);
    //console.log('eventh '+ events_top_header_height);
    console.log('colw '+col_md_4_width);
    console.log('posterh '+events_main_poster_height);
    /*$('body').css({
     'height' : full_window_height + 'px'
     });*/
    $('#nav-toggler').click(function () {
        /*$('#homepage-image-wrapper').css({
         'position' : 'initial'
         });
         $('canvas').css({
         'display' : 'none'
         });*/
        $('#nav-dropdown').slideDown(300);
        $('#nav-toggler').fadeOut(300);
        setTimeout(function () {
            $('#nav-close-toggler').fadeIn(300);
        },300);
    });
    $('#nav-close-toggler').click(function () {
        /*$('#homepage-image-wrapper').css({
         'position' : 'absolute'
         });
         $('canvas').css({
         'display' : 'inline-block'
         });*/
        $('#nav-dropdown').slideUp(300);
        $('#nav-close-toggler').fadeOut(300);
        setTimeout(function () {
            $('#nav-toggler').fadeIn(300);
        },300);
    });
    $('#nav-dropdown').css({
        'width' : full_window_width+'px'
    });
    $('.last-spon').css({
        'margin-bottom' : (3*foot_height)+'px'
    });
    $('.first-row').css({
        'padding-top' : (nav_height)+'px'
    });
    $('.myfoot').css({
        'height' : nav_height+'px'
    });
    $('.first-row').css({
        'margin-bottom' : nav_height1+'px'
    });
    $('.rest-row').css({
        'margin-bottom' : nav_height1+'px'
    });
    $('.last-row').css({
        'margin-bottom' : (3/2*nav_height)+'px'
    });


    $('.footer-list').css({
        'height' : nav_height+'px'
    });
    $('.footer-list-center').css({
        'height' : nav_height+'px'
    });
    $('.footer-list-social').css({
        'height' : nav_height+'px'
    });
    $('.content-wrapper').css({
        'height' : (full_window_height-nav_height)+'px'
    });
    $('#particles-js').css({
        'padding-top' : nav_height+'px'
    });
    $('.name-slider-wrapper').css({
        'padding-bottom' : nav_height+'px'
    });
    $('.coming-soon-div').css({
        'height' : (full_window_height-2*nav_height)+'px'
    });
    $('#homepage-image-wrapper').css({
        'height' : (full_window_height-2*nav_height)+'px'
    });
    $('#contactus-page-wrapper').css({
        'height' : (full_window_height-2*nav_height)+'px'
    });
    $('#homepage-image-wrapper-mobile').css({
        'height' : (full_window_height-2*nav_height)+'px'
    });
    $('.exhibition-event-poster-mobile').css({
        'padding-bottom' : nav_height+10+'px'
    });
    if(full_window_width>1366)
        $('#borderpic').attr('width','400');
    else
        $('#borderpic').attr('width','350');
    $('.events-wrapper').css({
        'height' : event_wrapper_height+'px'
    });
    $('.schedule-image-div').css({
        'padding-bottom' : nav_height+10+'px'
    });
    $('.event-main-posters img').attr('width',col_md_4_width);
    $('.event-main-posters img').attr('height',events_main_poster_height);
    $('.civilised-event-details-wrapper').css({
        'height' : event_wrapper_height+'px'
    });
    $('.robotics-event-details-wrapper').css({
        'height' : event_wrapper_height+'px'
    });
    $('.technozion-event-details-wrapper').css({
        'height' : event_wrapper_height+'px'
    });
    $('.management-event-details-wrapper').css({
        'height' : event_wrapper_height+'px'
    });
    $('.jbuzz-event-details-wrapper').css({
        'height' : event_wrapper_height+'px'
    });
    $('.civilised_detailed_events_row').css({
        'height' : 2.8*nav_height+'px'
    });
    $('.exhibition-event-details-wrapper').css({
        'height' : event_wrapper_height+'px'
    });
    $('.sub-event-icons').attr('width', 2.8*nav_height);
    $('.sub-event-icons').attr('height', 2.8*nav_height);
    $('.sub-event-icons img').attr('width', 2.8*nav_height);
    $('.sub-event-icons img').attr('height', 2.8*nav_height);
    $('.technozion-event-details-wrapper .sub-event-icons').attr('width', 2.2*nav_height);
    $('.technozion-event-details-wrapper .sub-event-icons').attr('height', 2.2*nav_height);
    $('.technozion-event-details-wrapper .sub-event-icons img').attr('width', 2.2*nav_height);
    $('.technozion-event-details-wrapper .sub-event-icons img').attr('height', 2.2*nav_height);
    $('.event-details-wrapper').css({
        'height' : 4*nav_height+'px'
    });


    new Typed('#homepage-typed-left', {
        strings: ['Robotics', 'Coding', 'Management', 'JBuzz', 'Civil-i-zed', 'Project Exhibition'],
        typeSpeed: 50,
        backSpeed: 40,
        backDelay: 1000,
        cursorChar: '_',
        loop: true
    });

    /*new Typed('#homepage-typed-right', {
     strings: ['COME,\n ^500 COMPETE,\n ^500 CONQUER', '9 - 11 February,\n ^500 2018'],
     typeSpeed: 50,
     backSpeed: 40,
     backDelay: 500,
     cursorChar: '_',
     loop: true
     });*/
    /*var present = '#borderpic';
     function change_pic() {
     console.log('called change_pic()\n');
     $(present).fadeToggle(1000);
     if(present==='#borderpic')
     present = '#colorpic';
     else
     present = '#borderpic';
     setTimeout(function () {
     $(present).fadeToggle(1000);
     },1000);
     }
     window.setInterval(function () {
     change_pic();
     }, 5000);*/
});
