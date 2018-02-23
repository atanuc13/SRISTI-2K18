var full_window_height = $(window).height();
var full_window_width = $(window).width();
$(document).ready(function () {
    var nav_height = $('.mynav').height();
    var coord_email_height = $('.coord-emails').height();
    var chief_names_height = $('#chief-names').height();
    var col_md_4_width = $('.event-main-posters').width();
    var events_top_header_height = $('.contact-us-h1').height()+30;
    var events_main_poster_height = (full_window_height-(2*nav_height+100))/2; //events_top_header_height

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
    $('.myfoot').css({
        'height' : nav_height+'px'
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


    //------------civilised Event Details Functions----------------//
    var civilised_present = 'none';
    $('.bridge-the-gap').click(function () {
        if(civilised_present=='none')
        {
            $('.bridge-the-gap').addClass('box-shadow-5-white');
            $('.bridge-the-gap-details-wrapper').slideDown(300);
            civilised_present = 'bridge-the-gap';
        }
        else
        {
            if(civilised_present=='bridge-the-gap')
            {
                $('.bridge-the-gap').removeClass('box-shadow-5-white');
                $('.bridge-the-gap-details-wrapper').slideUp(300);
                civilised_present = 'none';
            }
            else
            {
                $('.bridge-the-gap').addClass('box-shadow-5-white');
                $('.'+civilised_present).removeClass('box-shadow-5-white');
                $('.'+civilised_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.bridge-the-gap-details-wrapper').slideDown(300);
                },300);
                civilised_present = 'bridge-the-gap';
            }
        }
    });
    $('.green-canvas').click(function () {
        if(civilised_present=='none')
        {
            $('.green-canvas').addClass('box-shadow-5-white');
            $('.green-canvas-details-wrapper').slideDown(300);
            civilised_present = 'green-canvas';
        }
        else
        {
            if(civilised_present=='green-canvas')
            {
                $('.green-canvas').removeClass('box-shadow-5-white');
                $('.green-canvas-details-wrapper').slideUp(300);
                civilised_present = 'none';
            }
            else
            {
                $('.green-canvas').addClass('box-shadow-5-white');
                $('.'+civilised_present).removeClass('box-shadow-5-white');
                $('.'+civilised_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.green-canvas-details-wrapper').slideDown(300);
                },300);
                civilised_present = 'green-canvas';
            }
        }
    });
    $('.rotolare').click(function () {
        if(civilised_present=='none')
        {
            $('.rotolare').addClass('box-shadow-5-white');
            $('.rotolare-details-wrapper').slideDown(300);
            civilised_present = 'rotolare';
        }
        else
        {
            if(civilised_present=='rotolare')
            {
                $('.rotolare').removeClass('box-shadow-5-white');
                $('.rotolare-details-wrapper').slideUp(300);
                civilised_present = 'none';
            }
            else
            {
                $('.rotolare').addClass('box-shadow-5-white');
                $('.'+civilised_present).removeClass('box-shadow-5-white');
                $('.'+civilised_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.rotolare-details-wrapper').slideDown(300);
                },300);
                civilised_present = 'rotolare';
            }
        }
    });
    //------------bridge-the-gap Event Details Functions----------------//
    var bridge_the_gap_present = 'intro';
    $('.bridge-the-gap-intro-li').click(function () {
        if(bridge_the_gap_present!='intro')
        {
            $('.bridge-the-gap-'+bridge_the_gap_present+'-li').removeClass('text-shadow-5-white');
            $('.bridge-the-gap-intro-li').addClass('text-shadow-5-white');
            $('.bridge-the-gap-'+bridge_the_gap_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bridge-the-gap-intro-details').fadeIn(300);
            },300);
            bridge_the_gap_present = 'intro';
        }
    });
    $('.bridge-the-gap-problemstatement-li').click(function () {
        if(bridge_the_gap_present!='problemstatement')
        {
            $('.bridge-the-gap-'+bridge_the_gap_present+'-li').removeClass('text-shadow-5-white');
            $('.bridge-the-gap-problemstatement-li').addClass('text-shadow-5-white');
            $('.bridge-the-gap-'+bridge_the_gap_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bridge-the-gap-problemstatement-details').fadeIn(300);
            },300);
            bridge_the_gap_present = 'problemstatement';
        }
    });
    $('.bridge-the-gap-rules-li').click(function () {
        if(bridge_the_gap_present!='rules')
        {
            $('.bridge-the-gap-'+bridge_the_gap_present+'-li').removeClass('text-shadow-5-white');
            $('.bridge-the-gap-rules-li').addClass('text-shadow-5-white');
            $('.bridge-the-gap-'+bridge_the_gap_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bridge-the-gap-rules-details').fadeIn(300);
            },300);
            bridge_the_gap_present = 'rules';
        }
    });
    $('.bridge-the-gap-prizes-li').click(function () {
        if(bridge_the_gap_present!='prizes')
        {
            $('.bridge-the-gap-'+bridge_the_gap_present+'-li').removeClass('text-shadow-5-white');
            $('.bridge-the-gap-prizes-li').addClass('text-shadow-5-white');
            $('.bridge-the-gap-'+bridge_the_gap_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bridge-the-gap-prizes-details').fadeIn(300);
            },300);
            bridge_the_gap_present = 'prizes';
        }
    });
    $('.bridge-the-gap-coordinator-li').click(function () {
        if(bridge_the_gap_present!='coordinator')
        {
            $('.bridge-the-gap-'+bridge_the_gap_present+'-li').removeClass('text-shadow-5-white');
            $('.bridge-the-gap-coordinator-li').addClass('text-shadow-5-white');
            $('.bridge-the-gap-'+bridge_the_gap_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bridge-the-gap-coordinator-details').fadeIn(300);
            },300);
            bridge_the_gap_present = 'coordinator';
        }
    });
    $('.bridge-the-gap-attachment-li').click(function () {
        if(bridge_the_gap_present!='attachment')
        {
            $('.bridge-the-gap-'+bridge_the_gap_present+'-li').removeClass('text-shadow-5-white');
            $('.bridge-the-gap-attachment-li').addClass('text-shadow-5-white');
            $('.bridge-the-gap-'+bridge_the_gap_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bridge-the-gap-attachment-details').fadeIn(300);
            },300);
            bridge_the_gap_present = 'attachment';
        }
    });
    //------------green-canvas Event Details Functions----------------//
    var green_canvas_present = 'intro';
    $('.green-canvas-intro-li').click(function () {
        if(green_canvas_present!='intro')
        {
            $('.green-canvas-'+green_canvas_present+'-li').removeClass('text-shadow-5-white');
            $('.green-canvas-intro-li').addClass('text-shadow-5-white');
            $('.green-canvas-'+green_canvas_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.green-canvas-intro-details').fadeIn(300);
            },300);
            green_canvas_present = 'intro';
        }
    });
    $('.green-canvas-problemstatement-li').click(function () {
        if(green_canvas_present!='problemstatement')
        {
            $('.green-canvas-'+green_canvas_present+'-li').removeClass('text-shadow-5-white');
            $('.green-canvas-problemstatement-li').addClass('text-shadow-5-white');
            $('.green-canvas-'+green_canvas_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.green-canvas-problemstatement-details').fadeIn(300);
            },300);
            green_canvas_present = 'problemstatement';
        }
    });
    $('.green-canvas-rules-li').click(function () {
        if(green_canvas_present!='rules')
        {
            $('.green-canvas-'+green_canvas_present+'-li').removeClass('text-shadow-5-white');
            $('.green-canvas-rules-li').addClass('text-shadow-5-white');
            $('.green-canvas-'+green_canvas_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.green-canvas-rules-details').fadeIn(300);
            },300);
            green_canvas_present = 'rules';
        }
    });
    $('.green-canvas-prizes-li').click(function () {
        if(green_canvas_present!='prizes')
        {
            $('.green-canvas-'+green_canvas_present+'-li').removeClass('text-shadow-5-white');
            $('.green-canvas-prizes-li').addClass('text-shadow-5-white');
            $('.green-canvas-'+green_canvas_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.green-canvas-prizes-details').fadeIn(300);
            },300);
            green_canvas_present = 'prizes';
        }
    });
    $('.green-canvas-coordinator-li').click(function () {
        if(green_canvas_present!='coordinator')
        {
            $('.green-canvas-'+green_canvas_present+'-li').removeClass('text-shadow-5-white');
            $('.green-canvas-coordinator-li').addClass('text-shadow-5-white');
            $('.green-canvas-'+green_canvas_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.green-canvas-coordinator-details').fadeIn(300);
            },300);
            green_canvas_present = 'coordinator';
        }
    });
    $('.green-canvas-attachment-li').click(function () {
        if(green_canvas_present!='attachment')
        {
            $('.green-canvas-'+green_canvas_present+'-li').removeClass('text-shadow-5-white');
            $('.green-canvas-attachment-li').addClass('text-shadow-5-white');
            $('.green-canvas-'+green_canvas_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.green-canvas-attachment-details').fadeIn(300);
            },300);
            green_canvas_present = 'attachment';
        }
    });
    //------------rotolare Event Details Functions----------------//
    var rotolare_present = 'intro';
    $('.rotolare-intro-li').click(function () {
        if(rotolare_present!='intro')
        {
            $('.rotolare-'+rotolare_present+'-li').removeClass('text-shadow-5-white');
            $('.rotolare-intro-li').addClass('text-shadow-5-white');
            $('.rotolare-'+rotolare_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rotolare-intro-details').fadeIn(300);
            },300);
            rotolare_present = 'intro';
        }
    });
    $('.rotolare-problemstatement-li').click(function () {
        if(rotolare_present!='problemstatement')
        {
            $('.rotolare-'+rotolare_present+'-li').removeClass('text-shadow-5-white');
            $('.rotolare-problemstatement-li').addClass('text-shadow-5-white');
            $('.rotolare-'+rotolare_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rotolare-problemstatement-details').fadeIn(300);
            },300);
            rotolare_present = 'problemstatement';
        }
    });
    $('.rotolare-rules-li').click(function () {
        if(rotolare_present!='rules')
        {
            $('.rotolare-'+rotolare_present+'-li').removeClass('text-shadow-5-white');
            $('.rotolare-rules-li').addClass('text-shadow-5-white');
            $('.rotolare-'+rotolare_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rotolare-rules-details').fadeIn(300);
            },300);
            rotolare_present = 'rules';
        }
    });
    $('.rotolare-prizes-li').click(function () {
        if(rotolare_present!='prizes')
        {
            $('.rotolare-'+rotolare_present+'-li').removeClass('text-shadow-5-white');
            $('.rotolare-prizes-li').addClass('text-shadow-5-white');
            $('.rotolare-'+rotolare_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rotolare-prizes-details').fadeIn(300);
            },300);
            rotolare_present = 'prizes';
        }
    });
    $('.rotolare-coordinator-li').click(function () {
        if(rotolare_present!='coordinator')
        {
            $('.rotolare-'+rotolare_present+'-li').removeClass('text-shadow-5-white');
            $('.rotolare-coordinator-li').addClass('text-shadow-5-white');
            $('.rotolare-'+rotolare_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rotolare-coordinator-details').fadeIn(300);
            },300);
            rotolare_present = 'coordinator';
        }
    });
    $('.rotolare-attachment-li').click(function () {
        if(rotolare_present!='attachment')
        {
            $('.rotolare-'+rotolare_present+'-li').removeClass('text-shadow-5-white');
            $('.rotolare-attachment-li').addClass('text-shadow-5-white');
            $('.rotolare-'+rotolare_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rotolare-attachment-details').fadeIn(300);
            },300);
            rotolare_present = 'attachment';
        }
    });


    //------------robotics Event Details Functions----------------//
    var robotics_present = 'none';
    $('.robosoccer').click(function () {
        if(robotics_present=='none')
        {
            $('.robosoccer').addClass('box-shadow-5-white');
            $('.robosoccer-details-wrapper').slideDown(300);
            robotics_present = 'robosoccer';
        }
        else
        {
            if(robotics_present=='bridge-the-gap')
            {
                $('.robosoccer').removeClass('box-shadow-5-white');
                $('.robosoccer-details-wrapper').slideUp(300);
                robotics_present = 'none';
            }
            else
            {
                $('.robosoccer').addClass('box-shadow-5-white');
                $('.'+robotics_present).removeClass('box-shadow-5-white');
                $('.'+robotics_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.robosoccer-details-wrapper').slideDown(300);
                },300);
                robotics_present = 'robosoccer';
            }
        }
    });
    $('.semi-autonomous').click(function () {
        if(robotics_present=='none')
        {
            $('.semi-autonomous').addClass('box-shadow-5-white');
            $('.semi-autonomous-details-wrapper').slideDown(300);
            robotics_present = 'semi-autonomous';
        }
        else
        {
            if(robotics_present=='semi-autonomous')
            {
                $('.semi-autonomous').removeClass('box-shadow-5-white');
                $('.semi-autonomous-details-wrapper').slideUp(300);
                robotics_present = 'none';
            }
            else
            {
                $('.semi-autonomous').addClass('box-shadow-5-white');
                $('.'+robotics_present).removeClass('box-shadow-5-white');
                $('.'+robotics_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.semi-autonomous-details-wrapper').slideDown(300);
                },300);
                robotics_present = 'semi-autonomous';
            }
        }
    });
    $('.autonomous').click(function () {
        if(robotics_present=='none')
        {
            $('.autonomous').addClass('box-shadow-5-white');
            $('.autonomous-details-wrapper').slideDown(300);
            robotics_present = 'autonomous';
        }
        else
        {
            if(robotics_present=='autonomous')
            {
                $('.autonomous').removeClass('box-shadow-5-white');
                $('.autonomous-details-wrapper').slideUp(300);
                robotics_present = 'none';
            }
            else
            {
                $('.autonomous').addClass('box-shadow-5-white');
                $('.'+robotics_present).removeClass('box-shadow-5-white');
                $('.'+robotics_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.autonomous-details-wrapper').slideDown(300);
                },300);
                robotics_present = 'autonomous';
            }
        }
    });
    $('.rocket-propulsion').click(function () {
        if(robotics_present=='none')
        {
            $('.rocket-propulsion').addClass('box-shadow-5-white');
            $('.rocket-propulsion-details-wrapper').slideDown(300);
            robotics_present = 'rocket-propulsion';
        }
        else
        {
            if(robotics_present=='rocket-propulsion')
            {
                $('.rocket-propulsion').removeClass('box-shadow-5-white');
                $('.rocket-propulsion-details-wrapper').slideUp(300);
                robotics_present = 'none';
            }
            else
            {
                $('.rocket-propulsion').addClass('box-shadow-5-white');
                $('.'+robotics_present).removeClass('box-shadow-5-white');
                $('.'+robotics_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.rocket-propulsion-details-wrapper').slideDown(300);
                },300);
                robotics_present = 'rocket-propulsion';
            }
        }
    });
    //------------robosoccer Event Details Functions----------------//
    var robosoccer_present = 'intro';
    $('.robosoccer-intro-li').click(function () {
        if(robosoccer_present!='intro')
        {
            $('.robosoccer-'+robosoccer_present+'-li').removeClass('text-shadow-5-white');
            $('.robosoccer-intro-li').addClass('text-shadow-5-white');
            $('.robosoccer-'+robosoccer_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.robosoccer-intro-details').fadeIn(300);
            },300);
            robosoccer_present = 'intro';
        }
    });
    $('.robosoccer-problemstatement-li').click(function () {
        if(robosoccer_present!='problemstatement')
        {
            $('.robosoccer-'+robosoccer_present+'-li').removeClass('text-shadow-5-white');
            $('.robosoccer-problemstatement-li').addClass('text-shadow-5-white');
            $('.robosoccer-'+robosoccer_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.robosoccer-problemstatement-details').fadeIn(300);
            },300);
            robosoccer_present = 'problemstatement';
        }
    });
    $('.robosoccer-rules-li').click(function () {
        if(robosoccer_present!='rules')
        {
            $('.robosoccer-'+robosoccer_present+'-li').removeClass('text-shadow-5-white');
            $('.robosoccer-rules-li').addClass('text-shadow-5-white');
            $('.robosoccer-'+robosoccer_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.robosoccer-rules-details').fadeIn(300);
            },300);
            robosoccer_present = 'rules';
        }
    });
    $('.robosoccer-prizes-li').click(function () {
        if(robosoccer_present!='prizes')
        {
            $('.robosoccer-'+robosoccer_present+'-li').removeClass('text-shadow-5-white');
            $('.robosoccer-prizes-li').addClass('text-shadow-5-white');
            $('.robosoccer-'+robosoccer_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.robosoccer-prizes-details').fadeIn(300);
            },300);
            robosoccer_present = 'prizes';
        }
    });
    $('.robosoccer-coordinator-li').click(function () {
        if(robosoccer_present!='coordinator')
        {
            $('.robosoccer-'+robosoccer_present+'-li').removeClass('text-shadow-5-white');
            $('.robosoccer-coordinator-li').addClass('text-shadow-5-white');
            $('.robosoccer-'+robosoccer_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.robosoccer-coordinator-details').fadeIn(300);
            },300);
            robosoccer_present = 'coordinator';
        }
    });
    $('.robosoccer-attachment-li').click(function () {
        if(robosoccer_present!='attachment')
        {
            $('.robosoccer-'+robosoccer_present+'-li').removeClass('text-shadow-5-white');
            $('.robosoccer-attachment-li').addClass('text-shadow-5-white');
            $('.robosoccer-'+robosoccer_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.robosoccer-attachment-details').fadeIn(300);
            },300);
            robosoccer_present = 'attachment';
        }
    });
    //------------semi-autonomous Event Details Functions----------------//
    var semi_autonomous_present = 'intro';
    $('.semi-autonomous-intro-li').click(function () {
        if(semi_autonomous_present!='intro')
        {
            $('.semi-autonomous-'+semi_autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.semi-autonomous-intro-li').addClass('text-shadow-5-white');
            $('.semi-autonomous-'+semi_autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.semi-autonomous-intro-details').fadeIn(300);
            },300);
            semi_autonomous_present = 'intro';
        }
    });
    $('.semi-autonomous-problemstatement-li').click(function () {
        if(semi_autonomous_present!='problemstatement')
        {
            $('.semi-autonomous-'+semi_autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.semi-autonomous-problemstatement-li').addClass('text-shadow-5-white');
            $('.semi-autonomous-'+semi_autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.semi-autonomous-problemstatement-details').fadeIn(300);
            },300);
            semi_autonomous_present = 'problemstatement';
        }
    });
    $('.semi-autonomous-rules-li').click(function () {
        if(semi_autonomous_present!='rules')
        {
            $('.semi-autonomous-'+semi_autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.semi-autonomous-rules-li').addClass('text-shadow-5-white');
            $('.semi-autonomous-'+semi_autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.semi-autonomous-rules-details').fadeIn(300);
            },300);
            semi_autonomous_present = 'rules';
        }
    });
    $('.semi-autonomous-prizes-li').click(function () {
        if(semi_autonomous_present!='prizes')
        {
            $('.semi-autonomous-'+semi_autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.semi-autonomous-prizes-li').addClass('text-shadow-5-white');
            $('.semi-autonomous-'+semi_autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.semi-autonomous-prizes-details').fadeIn(300);
            },300);
            semi_autonomous_present = 'prizes';
        }
    });
    $('.semi-autonomous-coordinator-li').click(function () {
        if(semi_autonomous_present!='coordinator')
        {
            $('.semi-autonomous-'+semi_autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.semi-autonomous-coordinator-li').addClass('text-shadow-5-white');
            $('.semi-autonomous-'+semi_autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.semi-autonomous-coordinator-details').fadeIn(300);
            },300);
            semi_autonomous_present = 'coordinator';
        }
    });
    $('.semi-autonomous-attachment-li').click(function () {
        if(semi_autonomous_present!='attachment')
        {
            $('.semi-autonomous-'+semi_autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.semi-autonomous-attachment-li').addClass('text-shadow-5-white');
            $('.semi-autonomous-'+semi_autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.semi-autonomous-attachment-details').fadeIn(300);
            },300);
            semi_autonomous_present = 'attachment';
        }
    });
    //------------autonomous Event Details Functions----------------//
    var autonomous_present = 'intro';
    $('.autonomous-intro-li').click(function () {
        if(autonomous_present!='intro')
        {
            $('.autonomous-'+autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.autonomous-intro-li').addClass('text-shadow-5-white');
            $('.autonomous-'+autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.autonomous-intro-details').fadeIn(300);
            },300);
            autonomous_present = 'intro';
        }
    });
    $('.autonomous-problemstatement-li').click(function () {
        if(autonomous_present!='problemstatement')
        {
            $('.autonomous-'+autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.autonomous-problemstatement-li').addClass('text-shadow-5-white');
            $('.autonomous-'+autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.autonomous-problemstatement-details').fadeIn(300);
            },300);
            autonomous_present = 'problemstatement';
        }
    });
    $('.autonomous-rules-li').click(function () {
        if(autonomous_present!='rules')
        {
            $('.autonomous-'+autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.autonomous-rules-li').addClass('text-shadow-5-white');
            $('.autonomous-'+autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.autonomous-rules-details').fadeIn(300);
            },300);
            autonomous_present = 'rules';
        }
    });
    $('.autonomous-prizes-li').click(function () {
        if(autonomous_present!='prizes')
        {
            $('.autonomous-'+autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.autonomous-prizes-li').addClass('text-shadow-5-white');
            $('.autonomous-'+autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.autonomous-prizes-details').fadeIn(300);
            },300);
            autonomous_present = 'prizes';
        }
    });
    $('.autonomous-coordinator-li').click(function () {
        if(autonomous_present!='coordinator')
        {
            $('.autonomous-'+autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.autonomous-coordinator-li').addClass('text-shadow-5-white');
            $('.autonomous-'+autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.autonomous-coordinator-details').fadeIn(300);
            },300);
            autonomous_present = 'coordinator';
        }
    });
    $('.autonomous-attachment-li').click(function () {
        if(autonomous_present!='attachment')
        {
            $('.autonomous-'+autonomous_present+'-li').removeClass('text-shadow-5-white');
            $('.autonomous-attachment-li').addClass('text-shadow-5-white');
            $('.autonomous-'+autonomous_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.autonomous-attachment-details').fadeIn(300);
            },300);
            autonomous_present = 'attachment';
        }
    });
    //------------rocket-propulsion Event Details Functions----------------//
    var rocket_propulsion_present = 'intro';
    $('.rocket-propulsion-intro-li').click(function () {
        if(robosoccer_present!='intro')
        {
            $('.rocket-propulsion-'+rocket_propulsion_present+'-li').removeClass('text-shadow-5-white');
            $('.rocket-propulsion-intro-li').addClass('text-shadow-5-white');
            $('.rocket-propulsion-'+rocket_propulsion_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rocket-propulsion-intro-details').fadeIn(300);
            },300);
            rocket_propulsion_present = 'intro';
        }
    });
    $('.rocket-propulsion-problemstatement-li').click(function () {
        if(rocket_propulsion_present!='problemstatement')
        {
            $('.rocket-propulsion-'+rocket_propulsion_present+'-li').removeClass('text-shadow-5-white');
            $('.rocket-propulsion-problemstatement-li').addClass('text-shadow-5-white');
            $('.rocket-propulsion-'+rocket_propulsion_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rocket-propulsion-problemstatement-details').fadeIn(300);
            },300);
            rocket_propulsion_present = 'problemstatement';
        }
    });
    $('.rocket-propulsion-rules-li').click(function () {
        if(rocket_propulsion_present!='rules')
        {
            $('.rocket-propulsion-'+rocket_propulsion_present+'-li').removeClass('text-shadow-5-white');
            $('.rocket-propulsion-rules-li').addClass('text-shadow-5-white');
            $('.rocket-propulsion-'+rocket_propulsion_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rocket-propulsion-rules-details').fadeIn(300);
            },300);
            rocket_propulsion_present = 'rules';
        }
    });
    $('.rocket-propulsion-prizes-li').click(function () {
        if(rocket_propulsion_present!='prizes')
        {
            $('.rocket-propulsion-'+rocket_propulsion_present+'-li').removeClass('text-shadow-5-white');
            $('.rocket-propulsion-prizes-li').addClass('text-shadow-5-white');
            $('.rocket-propulsion-'+rocket_propulsion_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rocket-propulsion-prizes-details').fadeIn(300);
            },300);
            rocket_propulsion_present = 'prizes';
        }
    });
    $('.rocket-propulsion-coordinator-li').click(function () {
        if(rocket_propulsion_present!='coordinator')
        {
            $('.rocket-propulsion-'+rocket_propulsion_present+'-li').removeClass('text-shadow-5-white');
            $('.rocket-propulsion-coordinator-li').addClass('text-shadow-5-white');
            $('.rocket-propulsion-'+rocket_propulsion_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rocket-propulsion-coordinator-details').fadeIn(300);
            },300);
            rocket_propulsion_present = 'coordinator';
        }
    });
    $('.rocket-propulsion-attachment-li').click(function () {
        if(rocket_propulsion_present!='attachment')
        {
            $('.rocket-propulsion-'+rocket_propulsion_present+'-li').removeClass('text-shadow-5-white');
            $('.rocket-propulsion-attachment-li').addClass('text-shadow-5-white');
            $('.rocket-propulsion-'+rocket_propulsion_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.rocket-propulsion-attachment-details').fadeIn(300);
            },300);
            rocket_propulsion_present = 'attachment';
        }
    });


    //------------technozion Event Details Functions----------------//
    var technozion_present = 'none';
    $('.circasm').click(function () {
        if(technozion_present=='none')
        {
            $('.circasm').addClass('box-shadow-5-white');
            $('.circasm-details-wrapper').slideDown(300);
            technozion_present = 'circasm';
        }
        else
        {
            if(technozion_present=='circasm')
            {
                $('.circasm').removeClass('box-shadow-5-white');
                $('.circasm-details-wrapper').slideUp(300);
                technozion_present = 'none';
            }
            else
            {
                $('.circasm').addClass('box-shadow-5-white');
                $('.'+technozion_present).removeClass('box-shadow-5-white');
                $('.'+technozion_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.circasm-details-wrapper').slideDown(300);
                },300);
                technozion_present = 'circasm';
            }
        }
    });
    $('.codechronicles').click(function () {
        if(technozion_present=='none')
        {
            $('.codechronicles').addClass('box-shadow-5-white');
            $('.codechronicles-details-wrapper').slideDown(300);
            technozion_present = 'codechronicles';
        }
        else
        {
            if(technozion_present=='codechronicles')
            {
                $('.codechronicles').removeClass('box-shadow-5-white');
                $('.codechronicles-details-wrapper').slideUp(300);
                technozion_present = 'none';
            }
            else
            {
                $('.codechronicles').addClass('box-shadow-5-white');
                $('.'+technozion_present).removeClass('box-shadow-5-white');
                $('.'+technozion_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.codechronicles-details-wrapper').slideDown(300);
                },300);
                technozion_present = 'codechronicles';
            }
        }
    });
    $('.gamedev').click(function () {
        if(technozion_present=='none')
        {
            $('.gamedev').addClass('box-shadow-5-white');
            $('.gamedev-details-wrapper').slideDown(300);
            technozion_present = 'gamedev';
        }
        else
        {
            if(technozion_present=='gamedev')
            {
                $('.gamedev').removeClass('box-shadow-5-white');
                $('.gamedev-details-wrapper').slideUp(300);
                technozion_present = 'none';
            }
            else
            {
                $('.gamedev').addClass('box-shadow-5-white');
                $('.'+technozion_present).removeClass('box-shadow-5-white');
                $('.'+technozion_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.gamedev-details-wrapper').slideDown(300);
                },300);
                technozion_present = 'gamedev';
            }
        }
    });
    $('.mathecodian').click(function () {
        if(technozion_present=='none')
        {
            $('.mathecodian').addClass('box-shadow-5-white');
            $('.mathecodian-details-wrapper').slideDown(300);
            technozion_present = 'mathecodian';
        }
        else
        {
            if(technozion_present=='mathecodian')
            {
                $('.mathecodian').removeClass('box-shadow-5-white');
                $('.mathecodian-details-wrapper').slideUp(300);
                technozion_present = 'none';
            }
            else
            {
                $('.mathecodian').addClass('box-shadow-5-white');
                $('.'+technozion_present).removeClass('box-shadow-5-white');
                $('.'+technozion_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.mathecodian-details-wrapper').slideDown(300);
                },300);
                technozion_present = 'mathecodian';
            }
        }
    });
    $('.techquiz').click(function () {
        if(technozion_present=='none')
        {
            $('.techquiz').addClass('box-shadow-5-white');
            $('.techquiz-details-wrapper').slideDown(300);
            technozion_present = 'techquiz';
        }
        else
        {
            if(technozion_present=='techquiz')
            {
                $('.techquiz').removeClass('box-shadow-5-white');
                $('.techquiz-details-wrapper').slideUp(300);
                technozion_present = 'none';
            }
            else
            {
                $('.techquiz').addClass('box-shadow-5-white');
                $('.'+technozion_present).removeClass('box-shadow-5-white');
                $('.'+technozion_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.techquiz-details-wrapper').slideDown(300);
                },300);
                technozion_present = 'techquiz';
            }
        }
    });
    $('.technicallyurs').click(function () {
        if(technozion_present=='none')
        {
            $('.technicallyurs').addClass('box-shadow-5-white');
            $('.technicallyurs-details-wrapper').slideDown(300);
            technozion_present = 'technicallyurs';
        }
        else
        {
            if(technozion_present=='technicallyurs')
            {
                $('.technicallyurs').removeClass('box-shadow-5-white');
                $('.technicallyurs-details-wrapper').slideUp(300);
                technozion_present = 'none';
            }
            else
            {
                $('.technicallyurs').addClass('box-shadow-5-white');
                $('.'+technozion_present).removeClass('box-shadow-5-white');
                $('.'+technozion_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.technicallyurs-details-wrapper').slideDown(300);
                },300);
                technozion_present = 'technicallyurs';
            }
        }
    });
    //------------circasm Event Details Functions----------------//
    var circasm_present = 'intro';
    $('.circasm-intro-li').click(function () {
        if(circasm_present!='intro')
        {
            $('.circasm-'+circasm_present+'-li').removeClass('text-shadow-5-white');
            $('.circasm-intro-li').addClass('text-shadow-5-white');
            $('.circasm-'+circasm_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.circasm-intro-details').fadeIn(300);
            },300);
            circasm_present = 'intro';
        }
    });
    $('.circasm-problemstatement-li').click(function () {
        if(circasm_present!='problemstatement')
        {
            $('.circasm-'+circasm_present+'-li').removeClass('text-shadow-5-white');
            $('.circasm-problemstatement-li').addClass('text-shadow-5-white');
            $('.circasm-'+circasm_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.circasm-problemstatement-details').fadeIn(300);
            },300);
            circasm_present = 'problemstatement';
        }
    });
    $('.circasm-rules-li').click(function () {
        if(circasm_present!='rules')
        {
            $('.circasm-'+circasm_present+'-li').removeClass('text-shadow-5-white');
            $('.circasm-rules-li').addClass('text-shadow-5-white');
            $('.circasm-'+circasm_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.circasm-rules-details').fadeIn(300);
            },300);
            circasm_present = 'rules';
        }
    });
    $('.circasm-prizes-li').click(function () {
        if(circasm_present!='prizes')
        {
            $('.circasm-'+circasm_present+'-li').removeClass('text-shadow-5-white');
            $('.circasm-prizes-li').addClass('text-shadow-5-white');
            $('.circasm-'+circasm_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.circasm-prizes-details').fadeIn(300);
            },300);
            circasm_present = 'prizes';
        }
    });
    $('.circasm-coordinator-li').click(function () {
        if(circasm_present!='coordinator')
        {
            $('.circasm-'+circasm_present+'-li').removeClass('text-shadow-5-white');
            $('.circasm-coordinator-li').addClass('text-shadow-5-white');
            $('.circasm-'+circasm_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.circasm-coordinator-details').fadeIn(300);
            },300);
            circasm_present = 'coordinator';
        }
    });
    $('.circasm-attachment-li').click(function () {
        if(circasm_present!='attachment')
        {
            $('.circasm-'+circasm_present+'-li').removeClass('text-shadow-5-white');
            $('.circasm-attachment-li').addClass('text-shadow-5-white');
            $('.circasm-'+circasm_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.circasm-attachment-details').fadeIn(300);
            },300);
            circasm_present = 'attachment';
        }
    });
    //------------codechronicles Event Details Functions----------------//
    var codechronicles_present = 'intro';
    $('.codechronicles-intro-li').click(function () {
        if(codechronicles_present!='intro')
        {
            $('.codechronicles-'+codechronicles_present+'-li').removeClass('text-shadow-5-white');
            $('.codechronicles-intro-li').addClass('text-shadow-5-white');
            $('.codechronicles-'+codechronicles_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codechronicles-intro-details').fadeIn(300);
            },300);
            codechronicles_present = 'intro';
        }
    });
    $('.codechronicles-problemstatement-li').click(function () {
        if(codechronicles_present!='problemstatement')
        {
            $('.codechronicles-'+codechronicles_present+'-li').removeClass('text-shadow-5-white');
            $('.codechronicles-problemstatement-li').addClass('text-shadow-5-white');
            $('.codechronicles-'+codechronicles_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codechronicles-problemstatement-details').fadeIn(300);
            },300);
            codechronicles_present = 'problemstatement';
        }
    });
    $('.codechronicles-rules-li').click(function () {
        if(codechronicles_present!='rules')
        {
            $('.codechronicles-'+codechronicles_present+'-li').removeClass('text-shadow-5-white');
            $('.codechronicles-rules-li').addClass('text-shadow-5-white');
            $('.codechronicles-'+codechronicles_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codechronicles-rules-details').fadeIn(300);
            },300);
            codechronicles_present = 'rules';
        }
    });
    $('.codechronicles-prizes-li').click(function () {
        if(codechronicles_present!='prizes')
        {
            $('.codechronicles-'+codechronicles_present+'-li').removeClass('text-shadow-5-white');
            $('.codechronicles-prizes-li').addClass('text-shadow-5-white');
            $('.codechronicles-'+codechronicles_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codechronicles-prizes-details').fadeIn(300);
            },300);
            codechronicles_present = 'prizes';
        }
    });
    $('.codechronicles-coordinator-li').click(function () {
        if(codechronicles_present!='coordinator')
        {
            $('.codechronicles-'+codechronicles_present+'-li').removeClass('text-shadow-5-white');
            $('.codechronicles-coordinator-li').addClass('text-shadow-5-white');
            $('.codechronicles-'+codechronicles_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codechronicles-coordinator-details').fadeIn(300);
            },300);
            codechronicles_present = 'coordinator';
        }
    });
    $('.codechronicles-attachment-li').click(function () {
        if(codechronicles_present!='attachment')
        {
            $('.codechronicles-'+codechronicles_present+'-li').removeClass('text-shadow-5-white');
            $('.codechronicles-attachment-li').addClass('text-shadow-5-white');
            $('.codechronicles-'+codechronicles_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codechronicles-attachment-details').fadeIn(300);
            },300);
            codechronicles_present = 'attachment';
        }
    });
    //------------gamedev Event Details Functions----------------//
    var gamedev_present = 'intro';
    $('.gamedev-intro-li').click(function () {
        if(gamedev_present!='intro')
        {
            $('.gamedev-'+gamedev_present+'-li').removeClass('text-shadow-5-white');
            $('.gamedev-intro-li').addClass('text-shadow-5-white');
            $('.gamedev-'+gamedev_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.gamedev-intro-details').fadeIn(300);
            },300);
            gamedev_present = 'intro';
        }
    });
    $('.gamedev-problemstatement-li').click(function () {
        if(gamedev_present!='problemstatement')
        {
            $('.gamedev-'+gamedev_present+'-li').removeClass('text-shadow-5-white');
            $('.gamedev-problemstatement-li').addClass('text-shadow-5-white');
            $('.gamedev-'+gamedev_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.gamedev-problemstatement-details').fadeIn(300);
            },300);
            gamedev_present = 'problemstatement';
        }
    });
    $('.gamedev-rules-li').click(function () {
        if(gamedev_present!='rules')
        {
            $('.gamedev-'+gamedev_present+'-li').removeClass('text-shadow-5-white');
            $('.gamedev-rules-li').addClass('text-shadow-5-white');
            $('.gamedev-'+gamedev_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.gamedev-rules-details').fadeIn(300);
            },300);
            gamedev_present = 'rules';
        }
    });
    $('.gamedev-prizes-li').click(function () {
        if(gamedev_present!='prizes')
        {
            $('.gamedev-'+gamedev_present+'-li').removeClass('text-shadow-5-white');
            $('.gamedev-prizes-li').addClass('text-shadow-5-white');
            $('.gamedev-'+gamedev_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.gamedev-prizes-details').fadeIn(300);
            },300);
            gamedev_present = 'prizes';
        }
    });
    $('.gamedev-coordinator-li').click(function () {
        if(gamedev_present!='coordinator')
        {
            $('.gamedev-'+gamedev_present+'-li').removeClass('text-shadow-5-white');
            $('.gamedev-coordinator-li').addClass('text-shadow-5-white');
            $('.gamedev-'+gamedev_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.gamedev-coordinator-details').fadeIn(300);
            },300);
            gamedev_present = 'coordinator';
        }
    });
    $('.gamedev-attachment-li').click(function () {
        if(gamedev_present!='attachment')
        {
            $('.gamedev-'+gamedev_present+'-li').removeClass('text-shadow-5-white');
            $('.gamedev-attachment-li').addClass('text-shadow-5-white');
            $('.gamedev-'+gamedev_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.gamedev-attachment-details').fadeIn(300);
            },300);
            gamedev_present = 'attachment';
        }
    });
    //------------mathecodian Event Details Functions----------------//
    var mathecodian_present = 'intro';
    $('.mathecodian-intro-li').click(function () {
        if(mathecodian_present!='intro')
        {
            $('.mathecodian-'+mathecodian_present+'-li').removeClass('text-shadow-5-white');
            $('.mathecodian-intro-li').addClass('text-shadow-5-white');
            $('.mathecodian-'+mathecodian_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.mathecodian-intro-details').fadeIn(300);
            },300);
            mathecodian_present = 'intro';
        }
    });
    $('.mathecodian-problemstatement-li').click(function () {
        if(mathecodian_present!='problemstatement')
        {
            $('.mathecodian-'+mathecodian_present+'-li').removeClass('text-shadow-5-white');
            $('.mathecodian-problemstatement-li').addClass('text-shadow-5-white');
            $('.mathecodian-'+mathecodian_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.mathecodian-problemstatement-details').fadeIn(300);
            },300);
            mathecodian_present = 'problemstatement';
        }
    });
    $('.mathecodian-rules-li').click(function () {
        if(mathecodian_present!='rules')
        {
            $('.mathecodian-'+mathecodian_present+'-li').removeClass('text-shadow-5-white');
            $('.mathecodian-rules-li').addClass('text-shadow-5-white');
            $('.mathecodian-'+mathecodian_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.mathecodian-rules-details').fadeIn(300);
            },300);
            mathecodian_present = 'rules';
        }
    });
    $('.mathecodian-prizes-li').click(function () {
        if(mathecodian_present!='prizes')
        {
            $('.mathecodian-'+mathecodian_present+'-li').removeClass('text-shadow-5-white');
            $('.mathecodian-prizes-li').addClass('text-shadow-5-white');
            $('.mathecodian-'+mathecodian_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.mathecodian-prizes-details').fadeIn(300);
            },300);
            mathecodian_present = 'prizes';
        }
    });
    $('.mathecodian-coordinator-li').click(function () {
        if(mathecodian_present!='coordinator')
        {
            $('.mathecodian-'+mathecodian_present+'-li').removeClass('text-shadow-5-white');
            $('.mathecodian-coordinator-li').addClass('text-shadow-5-white');
            $('.mathecodian-'+mathecodian_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.mathecodian-coordinator-details').fadeIn(300);
            },300);
            mathecodian_present = 'coordinator';
        }
    });
    $('.mathecodian-attachment-li').click(function () {
        if(mathecodian_present!='attachment')
        {
            $('.mathecodian-'+mathecodian_present+'-li').removeClass('text-shadow-5-white');
            $('.mathecodian-attachment-li').addClass('text-shadow-5-white');
            $('.mathecodian-'+mathecodian_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.mathecodian-attachment-details').fadeIn(300);
            },300);
            mathecodian_present = 'attachment';
        }
    });
    //------------techquiz Event Details Functions----------------//
    var techquiz_present = 'intro';
    $('.techquiz-intro-li').click(function () {
        if(techquiz_present!='intro')
        {
            $('.techquiz-'+techquiz_present+'-li').removeClass('text-shadow-5-white');
            $('.techquiz-intro-li').addClass('text-shadow-5-white');
            $('.techquiz-'+techquiz_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.techquiz-intro-details').fadeIn(300);
            },300);
            techquiz_present = 'intro';
        }
    });
    $('.techquiz-problemstatement-li').click(function () {
        if(techquiz_present!='problemstatement')
        {
            $('.techquiz-'+techquiz_present+'-li').removeClass('text-shadow-5-white');
            $('.techquiz-problemstatement-li').addClass('text-shadow-5-white');
            $('.techquiz-'+techquiz_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.techquiz-problemstatement-details').fadeIn(300);
            },300);
            techquiz_present = 'problemstatement';
        }
    });
    $('.techquiz-rules-li').click(function () {
        if(techquiz_present!='rules')
        {
            $('.techquiz-'+techquiz_present+'-li').removeClass('text-shadow-5-white');
            $('.techquiz-rules-li').addClass('text-shadow-5-white');
            $('.techquiz-'+techquiz_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.techquiz-rules-details').fadeIn(300);
            },300);
            techquiz_present = 'rules';
        }
    });
    $('.techquiz-prizes-li').click(function () {
        if(techquiz_present!='prizes')
        {
            $('.techquiz-'+techquiz_present+'-li').removeClass('text-shadow-5-white');
            $('.techquiz-prizes-li').addClass('text-shadow-5-white');
            $('.techquiz-'+techquiz_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.techquiz-prizes-details').fadeIn(300);
            },300);
            techquiz_present = 'prizes';
        }
    });
    $('.techquiz-coordinator-li').click(function () {
        if(techquiz_present!='coordinator')
        {
            $('.techquiz-'+techquiz_present+'-li').removeClass('text-shadow-5-white');
            $('.techquiz-coordinator-li').addClass('text-shadow-5-white');
            $('.techquiz-'+techquiz_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.techquiz-coordinator-details').fadeIn(300);
            },300);
            techquiz_present = 'coordinator';
        }
    });
    $('.techquiz-attachment-li').click(function () {
        if(techquiz_present!='attachment')
        {
            $('.techquiz-'+techquiz_present+'-li').removeClass('text-shadow-5-white');
            $('.techquiz-attachment-li').addClass('text-shadow-5-white');
            $('.techquiz-'+techquiz_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.techquiz-attachment-details').fadeIn(300);
            },300);
            techquiz_present = 'attachment';
        }
    });
    //------------technicallyurs Event Details Functions----------------//
    var technicallyurs_present = 'intro';
    $('.technicallyurs-intro-li').click(function () {
        if(technicallyurs_present!='intro')
        {
            $('.technicallyurs-'+technicallyurs_present+'-li').removeClass('text-shadow-5-white');
            $('.technicallyurs-intro-li').addClass('text-shadow-5-white');
            $('.technicallyurs-'+technicallyurs_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.technicallyurs-intro-details').fadeIn(300);
            },300);
            technicallyurs_present = 'intro';
        }
    });
    $('.technicallyurs-problemstatement-li').click(function () {
        if(technicallyurs_present!='problemstatement')
        {
            $('.technicallyurs-'+technicallyurs_present+'-li').removeClass('text-shadow-5-white');
            $('.technicallyurs-problemstatement-li').addClass('text-shadow-5-white');
            $('.technicallyurs-'+technicallyurs_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.technicallyurs-problemstatement-details').fadeIn(300);
            },300);
            technicallyurs_present = 'problemstatement';
        }
    });
    $('.technicallyurs-rules-li').click(function () {
        if(technicallyurs_present!='rules')
        {
            $('.technicallyurs-'+technicallyurs_present+'-li').removeClass('text-shadow-5-white');
            $('.technicallyurs-rules-li').addClass('text-shadow-5-white');
            $('.technicallyurs-'+technicallyurs_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.technicallyurs-rules-details').fadeIn(300);
            },300);
            technicallyurs_present = 'rules';
        }
    });
    $('.technicallyurs-prizes-li').click(function () {
        if(technicallyurs_present!='prizes')
        {
            $('.technicallyurs-'+technicallyurs_present+'-li').removeClass('text-shadow-5-white');
            $('.technicallyurs-prizes-li').addClass('text-shadow-5-white');
            $('.technicallyurs-'+technicallyurs_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.technicallyurs-prizes-details').fadeIn(300);
            },300);
            technicallyurs_present = 'prizes';
        }
    });
    $('.technicallyurs-coordinator-li').click(function () {
        if(technicallyurs_present!='coordinator')
        {
            $('.technicallyurs-'+technicallyurs_present+'-li').removeClass('text-shadow-5-white');
            $('.technicallyurs-coordinator-li').addClass('text-shadow-5-white');
            $('.technicallyurs-'+technicallyurs_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.technicallyurs-coordinator-details').fadeIn(300);
            },300);
            technicallyurs_present = 'coordinator';
        }
    });
    $('.technicallyurs-attachment-li').click(function () {
        if(technicallyurs_present!='attachment')
        {
            $('.technicallyurs-'+technicallyurs_present+'-li').removeClass('text-shadow-5-white');
            $('.technicallyurs-attachment-li').addClass('text-shadow-5-white');
            $('.technicallyurs-'+technicallyurs_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.technicallyurs-attachment-details').fadeIn(300);
            },300);
            technicallyurs_present = 'attachment';
        }
    });


    //------------management Event Details Functions----------------//
    var management_present = 'none';
    $('.bplan').click(function () {
        if(management_present=='none')
        {
            $('.bplan').addClass('box-shadow-5-white');
            $('.bplan-details-wrapper').slideDown(300);
            management_present = 'bplan';
        }
        else
        {
            if(management_present=='bplan')
            {
                $('.bplan').removeClass('box-shadow-5-white');
                $('.bplan-details-wrapper').slideUp(300);
                management_present = 'none';
            }
            else
            {
                $('.bplan').addClass('box-shadow-5-white');
                $('.'+management_present).removeClass('box-shadow-5-white');
                $('.'+management_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.bplan-details-wrapper').slideDown(300);
                },300);
                management_present = 'bplan';
            }
        }
    });
    $('.devilsadvocate').click(function () {
        if(management_present=='none')
        {
            $('.devilsadvocate').addClass('box-shadow-5-white');
            $('.devilsadvocate-details-wrapper').slideDown(300);
            management_present = 'devilsadvocate';
        }
        else
        {
            if(management_present=='devilsadvocate')
            {
                $('.devilsadvocate').removeClass('box-shadow-5-white');
                $('.devilsadvocate-details-wrapper').slideUp(300);
                management_present = 'none';
            }
            else
            {
                $('.devilsadvocate').addClass('box-shadow-5-white');
                $('.'+management_present).removeClass('box-shadow-5-white');
                $('.'+management_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.devilsadvocate-details-wrapper').slideDown(300);
                },300);
                management_present = 'devilsadvocate';
            }
        }
    });
    $('.jmun').click(function () {
        if(management_present=='none')
        {
            $('.jmun').addClass('box-shadow-5-white');
            $('.jmun-details-wrapper').slideDown(300);
            management_present = 'jmun';
        }
        else
        {
            if(management_present=='jmun')
            {
                $('.jmun').removeClass('box-shadow-5-white');
                $('.jmun-details-wrapper').slideUp(300);
                management_present = 'none';
            }
            else
            {
                $('.jmun').addClass('box-shadow-5-white');
                $('.'+management_present).removeClass('box-shadow-5-white');
                $('.'+management_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.jmun-details-wrapper').slideDown(300);
                },300);
                management_present = 'jmun';
            }
        }
    });
    $('.kaushal').click(function () {
        if(management_present=='none')
        {
            $('.kaushal').addClass('box-shadow-5-white');
            $('.kaushal-details-wrapper').slideDown(300);
            management_present = 'kaushal';
        }
        else
        {
            if(management_present=='kaushal')
            {
                $('.kaushal').removeClass('box-shadow-5-white');
                $('.kaushal-details-wrapper').slideUp(300);
                management_present = 'none';
            }
            else
            {
                $('.kaushal').addClass('box-shadow-5-white');
                $('.'+management_present).removeClass('box-shadow-5-white');
                $('.'+management_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.kaushal-details-wrapper').slideDown(300);
                },300);
                management_present = 'kaushal';
            }
        }
    });
    //------------bplan Event Details Functions----------------//
    var bplan_present = 'intro';
    $('.bplan-intro-li').click(function () {
        if(bplan_present!='intro')
        {
            $('.bplan-'+bplan_present+'-li').removeClass('text-shadow-5-white');
            $('.bplan-intro-li').addClass('text-shadow-5-white');
            $('.bplan-'+bplan_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bplan-intro-details').fadeIn(300);
            },300);
            bplan_present = 'intro';
        }
    });
    $('.bplan-problemstatement-li').click(function () {
        if(bplan_present!='problemstatement')
        {
            $('.bplan-'+bplan_present+'-li').removeClass('text-shadow-5-white');
            $('.bplan-problemstatement-li').addClass('text-shadow-5-white');
            $('.bplan-'+bplan_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bplan-problemstatement-details').fadeIn(300);
            },300);
            bplan_present = 'problemstatement';
        }
    });
    $('.bplan-rules-li').click(function () {
        if(bplan_present!='rules')
        {
            $('.bplan-'+bplan_present+'-li').removeClass('text-shadow-5-white');
            $('.bplan-rules-li').addClass('text-shadow-5-white');
            $('.bplan-'+bplan_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bplan-rules-details').fadeIn(300);
            },300);
            bplan_present = 'rules';
        }
    });
    $('.bplan-prizes-li').click(function () {
        if(bplan_present!='prizes')
        {
            $('.bplan-'+bplan_present+'-li').removeClass('text-shadow-5-white');
            $('.bplan-prizes-li').addClass('text-shadow-5-white');
            $('.bplan-'+bplan_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bplan-prizes-details').fadeIn(300);
            },300);
            bplan_present = 'prizes';
        }
    });
    $('.bplan-coordinator-li').click(function () {
        if(bplan_present!='coordinator')
        {
            $('.bplan-'+bplan_present+'-li').removeClass('text-shadow-5-white');
            $('.bplan-coordinator-li').addClass('text-shadow-5-white');
            $('.bplan-'+bplan_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bplan-coordinator-details').fadeIn(300);
            },300);
            bplan_present = 'coordinator';
        }
    });
    $('.bplan-attachment-li').click(function () {
        if(bplan_present!='attachment')
        {
            $('.bplan-'+bplan_present+'-li').removeClass('text-shadow-5-white');
            $('.bplan-attachment-li').addClass('text-shadow-5-white');
            $('.bplan-'+bplan_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.bplan-attachment-details').fadeIn(300);
            },300);
            bplan_present = 'attachment';
        }
    });
    //------------devilsadvocate Event Details Functions----------------//
    var devilsadvocate_present = 'intro';
    $('.devilsadvocate-intro-li').click(function () {
        if(devilsadvocate_present!='intro')
        {
            $('.devilsadvocate-'+devilsadvocate_present+'-li').removeClass('text-shadow-5-white');
            $('.devilsadvocate-intro-li').addClass('text-shadow-5-white');
            $('.devilsadvocate-'+devilsadvocate_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.devilsadvocate-intro-details').fadeIn(300);
            },300);
            devilsadvocate_present = 'intro';
        }
    });
    $('.devilsadvocate-problemstatement-li').click(function () {
        if(devilsadvocate_present!='problemstatement')
        {
            $('.devilsadvocate-'+devilsadvocate_present+'-li').removeClass('text-shadow-5-white');
            $('.devilsadvocate-problemstatement-li').addClass('text-shadow-5-white');
            $('.devilsadvocate-'+devilsadvocate_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.devilsadvocate-problemstatement-details').fadeIn(300);
            },300);
            devilsadvocate_present = 'problemstatement';
        }
    });
    $('.devilsadvocate-rules-li').click(function () {
        if(devilsadvocate_present!='rules')
        {
            $('.devilsadvocate-'+devilsadvocate_present+'-li').removeClass('text-shadow-5-white');
            $('.devilsadvocate-rules-li').addClass('text-shadow-5-white');
            $('.devilsadvocate-'+devilsadvocate_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.devilsadvocate-rules-details').fadeIn(300);
            },300);
            devilsadvocate_present = 'rules';
        }
    });
    $('.devilsadvocate-prizes-li').click(function () {
        if(devilsadvocate_present!='prizes')
        {
            $('.devilsadvocate-'+devilsadvocate_present+'-li').removeClass('text-shadow-5-white');
            $('.devilsadvocate-prizes-li').addClass('text-shadow-5-white');
            $('.devilsadvocate-'+devilsadvocate_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.devilsadvocate-prizes-details').fadeIn(300);
            },300);
            devilsadvocate_present = 'prizes';
        }
    });
    $('.devilsadvocate-coordinator-li').click(function () {
        if(devilsadvocate_present!='coordinator')
        {
            $('.devilsadvocate-'+devilsadvocate_present+'-li').removeClass('text-shadow-5-white');
            $('.devilsadvocate-coordinator-li').addClass('text-shadow-5-white');
            $('.devilsadvocate-'+devilsadvocate_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.devilsadvocate-coordinator-details').fadeIn(300);
            },300);
            devilsadvocate_present = 'coordinator';
        }
    });
    $('.devilsadvocate-attachment-li').click(function () {
        if(devilsadvocate_present!='attachment')
        {
            $('.devilsadvocate-'+devilsadvocate_present+'-li').removeClass('text-shadow-5-white');
            $('.devilsadvocate-attachment-li').addClass('text-shadow-5-white');
            $('.devilsadvocate-'+devilsadvocate_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.devilsadvocate-attachment-details').fadeIn(300);
            },300);
            devilsadvocate_present = 'attachment';
        }
    });
    //------------jmun Event Details Functions----------------//
    var jmun_present = 'intro';
    $('.jmun-intro-li').click(function () {
        if(jmun_present!='intro')
        {
            $('.jmun-'+jmun_present+'-li').removeClass('text-shadow-5-white');
            $('.jmun-intro-li').addClass('text-shadow-5-white');
            $('.jmun-'+jmun_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.jmun-intro-details').fadeIn(300);
            },300);
            jmun_present = 'intro';
        }
    });
    $('.jmun-problemstatement-li').click(function () {
        if(jmun_present!='problemstatement')
        {
            $('.jmun-'+jmun_present+'-li').removeClass('text-shadow-5-white');
            $('.jmun-problemstatement-li').addClass('text-shadow-5-white');
            $('.jmun-'+jmun_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.jmun-problemstatement-details').fadeIn(300);
            },300);
            jmun_present = 'problemstatement';
        }
    });
    $('.jmun-rules-li').click(function () {
        if(jmun_present!='rules')
        {
            $('.jmun-'+jmun_present+'-li').removeClass('text-shadow-5-white');
            $('.jmun-rules-li').addClass('text-shadow-5-white');
            $('.jmun-'+jmun_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.jmun-rules-details').fadeIn(300);
            },300);
            jmun_present = 'rules';
        }
    });
    $('.jmun-prizes-li').click(function () {
        if(jmun_present!='prizes')
        {
            $('.jmun-'+jmun_present+'-li').removeClass('text-shadow-5-white');
            $('.jmun-prizes-li').addClass('text-shadow-5-white');
            $('.jmun-'+jmun_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.jmun-prizes-details').fadeIn(300);
            },300);
            jmun_present = 'prizes';
        }
    });
    $('.jmun-coordinator-li').click(function () {
        if(jmun_present!='coordinator')
        {
            $('.jmun-'+jmun_present+'-li').removeClass('text-shadow-5-white');
            $('.jmun-coordinator-li').addClass('text-shadow-5-white');
            $('.jmun-'+jmun_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.jmun-coordinator-details').fadeIn(300);
            },300);
            jmun_present = 'coordinator';
        }
    });
    $('.jmun-attachment-li').click(function () {
        if(jmun_present!='attachment')
        {
            $('.jmun-'+jmun_present+'-li').removeClass('text-shadow-5-white');
            $('.jmun-attachment-li').addClass('text-shadow-5-white');
            $('.jmun-'+jmun_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.jmun-attachment-details').fadeIn(300);
            },300);
            jmun_present = 'attachment';
        }
    });
    //------------kaushal Event Details Functions----------------//
    var kaushal_present = 'intro';
    $('.kaushal-intro-li').click(function () {
        if(kaushal_present!='intro')
        {
            $('.kaushal-'+kaushal_present+'-li').removeClass('text-shadow-5-white');
            $('.kaushal-intro-li').addClass('text-shadow-5-white');
            $('.kaushal-'+kaushal_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.kaushal-intro-details').fadeIn(300);
            },300);
            kaushal_present = 'intro';
        }
    });
    $('.kaushal-problemstatement-li').click(function () {
        if(kaushal_present!='problemstatement')
        {
            $('.kaushal-'+kaushal_present+'-li').removeClass('text-shadow-5-white');
            $('.kaushal-problemstatement-li').addClass('text-shadow-5-white');
            $('.kaushal-'+kaushal_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.kaushal-problemstatement-details').fadeIn(300);
            },300);
            kaushal_present = 'problemstatement';
        }
    });
    $('.kaushal-rules-li').click(function () {
        if(kaushal_present!='rules')
        {
            $('.kaushal-'+kaushal_present+'-li').removeClass('text-shadow-5-white');
            $('.kaushal-rules-li').addClass('text-shadow-5-white');
            $('.kaushal-'+kaushal_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.kaushal-rules-details').fadeIn(300);
            },300);
            kaushal_present = 'rules';
        }
    });
    $('.kaushal-prizes-li').click(function () {
        if(kaushal_present!='prizes')
        {
            $('.kaushal-'+kaushal_present+'-li').removeClass('text-shadow-5-white');
            $('.kaushal-prizes-li').addClass('text-shadow-5-white');
            $('.kaushal-'+kaushal_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.kaushal-prizes-details').fadeIn(300);
            },300);
            kaushal_present = 'prizes';
        }
    });
    $('.kaushal-coordinator-li').click(function () {
        if(kaushal_present!='coordinator')
        {
            $('.kaushal-'+kaushal_present+'-li').removeClass('text-shadow-5-white');
            $('.kaushal-coordinator-li').addClass('text-shadow-5-white');
            $('.kaushal-'+kaushal_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.kaushal-coordinator-details').fadeIn(300);
            },300);
            kaushal_present = 'coordinator';
        }
    });
    $('.kaushal-attachment-li').click(function () {
        if(kaushal_present!='attachment')
        {
            $('.kaushal-'+kaushal_present+'-li').removeClass('text-shadow-5-white');
            $('.kaushal-attachment-li').addClass('text-shadow-5-white');
            $('.kaushal-'+kaushal_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.kaushal-attachment-details').fadeIn(300);
            },300);
            kaushal_present = 'attachment';
        }
    });


    //------------jbuzz Event Details Functions----------------//
    var jbuzz_present = 'none';
    $('.chess').click(function () {
        if(jbuzz_present=='none')
        {
            $('.chess').addClass('box-shadow-5-white');
            $('.chess-details-wrapper').slideDown(300);
            jbuzz_present = 'chess';
        }
        else
        {
            if(jbuzz_present=='chess')
            {
                $('.chess').removeClass('box-shadow-5-white');
                $('.chess-details-wrapper').slideUp(300);
                jbuzz_present = 'none';
            }
            else
            {
                $('.chess').addClass('box-shadow-5-white');
                $('.'+jbuzz_present).removeClass('box-shadow-5-white');
                $('.'+jbuzz_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.chess-details-wrapper').slideDown(300);
                },300);
                jbuzz_present = 'chess';
            }
        }
    });
    $('.codehunt').click(function () {
        if(jbuzz_present=='none')
        {
            $('.codehunt').addClass('box-shadow-5-white');
            $('.codehunt-details-wrapper').slideDown(300);
            jbuzz_present = 'codehunt';
        }
        else
        {
            if(jbuzz_present=='codehunt')
            {
                $('.codehunt').removeClass('box-shadow-5-white');
                $('.codehunt-details-wrapper').slideUp(300);
                jbuzz_present = 'none';
            }
            else
            {
                $('.codehunt').addClass('box-shadow-5-white');
                $('.'+jbuzz_present).removeClass('box-shadow-5-white');
                $('.'+jbuzz_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.codehunt-details-wrapper').slideDown(300);
                },300);
                jbuzz_present = 'codehunt';
            }
        }
    });
    $('.sudoku').click(function () {
        if(jbuzz_present=='none')
        {
            $('.sudoku').addClass('box-shadow-5-white');
            $('.sudoku-details-wrapper').slideDown(300);
            jbuzz_present = 'sudoku';
        }
        else
        {
            if(jbuzz_present=='sudoku')
            {
                $('.sudoku').removeClass('box-shadow-5-white');
                $('.sudoku-details-wrapper').slideUp(300);
                jbuzz_present = 'none';
            }
            else
            {
                $('.sudoku').addClass('box-shadow-5-white');
                $('.'+jbuzz_present).removeClass('box-shadow-5-white');
                $('.'+jbuzz_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.sudoku-details-wrapper').slideDown(300);
                },300);
                jbuzz_present = 'sudoku';
            }
        }
    });
    $('.trashmaster').click(function () {
        if(jbuzz_present=='none')
        {
            $('.trashmaster').addClass('box-shadow-5-white');
            $('.trashmaster-details-wrapper').slideDown(300);
            jbuzz_present = 'trashmaster';
        }
        else
        {
            if(jbuzz_present=='trashmaster')
            {
                $('.trashmaster').removeClass('box-shadow-5-white');
                $('.trashmaster-details-wrapper').slideUp(300);
                jbuzz_present = 'none';
            }
            else
            {
                $('.trashmaster').addClass('box-shadow-5-white');
                $('.'+jbuzz_present).removeClass('box-shadow-5-white');
                $('.'+jbuzz_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.trashmaster-details-wrapper').slideDown(300);
                },300);
                jbuzz_present = 'trashmaster';
            }
        }
    });
    //------------chess Event Details Functions----------------//
    var chess_present = 'intro';
    $('.chess-intro-li').click(function () {
        if(chess_present!='intro')
        {
            $('.chess-'+chess_present+'-li').removeClass('text-shadow-5-white');
            $('.chess-intro-li').addClass('text-shadow-5-white');
            $('.chess-'+chess_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.chess-intro-details').fadeIn(300);
            },300);
            chess_present = 'intro';
        }
    });
    $('.chess-problemstatement-li').click(function () {
        if(chess_present!='problemstatement')
        {
            $('.chess-'+chess_present+'-li').removeClass('text-shadow-5-white');
            $('.chess-problemstatement-li').addClass('text-shadow-5-white');
            $('.chess-'+chess_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.chess-problemstatement-details').fadeIn(300);
            },300);
            chess_present = 'problemstatement';
        }
    });
    $('.chess-rules-li').click(function () {
        if(chess_present!='rules')
        {
            $('.chess-'+chess_present+'-li').removeClass('text-shadow-5-white');
            $('.chess-rules-li').addClass('text-shadow-5-white');
            $('.chess-'+chess_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.chess-rules-details').fadeIn(300);
            },300);
            chess_present = 'rules';
        }
    });
    $('.chess-prizes-li').click(function () {
        if(chess_present!='prizes')
        {
            $('.chess-'+chess_present+'-li').removeClass('text-shadow-5-white');
            $('.chess-prizes-li').addClass('text-shadow-5-white');
            $('.chess-'+chess_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.chess-prizes-details').fadeIn(300);
            },300);
            chess_present = 'prizes';
        }
    });
    $('.chess-coordinator-li').click(function () {
        if(chess_present!='coordinator')
        {
            $('.chess-'+chess_present+'-li').removeClass('text-shadow-5-white');
            $('.chess-coordinator-li').addClass('text-shadow-5-white');
            $('.chess-'+chess_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.chess-coordinator-details').fadeIn(300);
            },300);
            chess_present = 'coordinator';
        }
    });
    $('.chess-attachment-li').click(function () {
        if(chess_present!='attachment')
        {
            $('.chess-'+chess_present+'-li').removeClass('text-shadow-5-white');
            $('.chess-attachment-li').addClass('text-shadow-5-white');
            $('.chess-'+chess_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.chess-attachment-details').fadeIn(300);
            },300);
            chess_present = 'attachment';
        }
    });
    //------------codehunt Event Details Functions----------------//
    var codehunt_present = 'intro';
    $('.codehunt-intro-li').click(function () {
        if(codehunt_present!='intro')
        {
            $('.codehunt-'+codehunt_present+'-li').removeClass('text-shadow-5-white');
            $('.codehunt-intro-li').addClass('text-shadow-5-white');
            $('.codehunt-'+codehunt_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codehunt-intro-details').fadeIn(300);
            },300);
            codehunt_present = 'intro';
        }
    });
    $('.codehunt-problemstatement-li').click(function () {
        if(codehunt_present!='problemstatement')
        {
            $('.codehunt-'+codehunt_present+'-li').removeClass('text-shadow-5-white');
            $('.codehunt-problemstatement-li').addClass('text-shadow-5-white');
            $('.codehunt-'+codehunt_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codehunt-problemstatement-details').fadeIn(300);
            },300);
            codehunt_present = 'problemstatement';
        }
    });
    $('.codehunt-rules-li').click(function () {
        if(codehunt_present!='rules')
        {
            $('.codehunt-'+codehunt_present+'-li').removeClass('text-shadow-5-white');
            $('.codehunt-rules-li').addClass('text-shadow-5-white');
            $('.codehunt-'+codehunt_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codehunt-rules-details').fadeIn(300);
            },300);
            codehunt_present = 'rules';
        }
    });
    $('.codehunt-prizes-li').click(function () {
        if(codehunt_present!='prizes')
        {
            $('.codehunt-'+codehunt_present+'-li').removeClass('text-shadow-5-white');
            $('.codehunt-prizes-li').addClass('text-shadow-5-white');
            $('.codehunt-'+codehunt_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codehunt-prizes-details').fadeIn(300);
            },300);
            codehunt_present = 'prizes';
        }
    });
    $('.codehunt-coordinator-li').click(function () {
        if(codehunt_present!='coordinator')
        {
            $('.codehunt-'+codehunt_present+'-li').removeClass('text-shadow-5-white');
            $('.codehunt-coordinator-li').addClass('text-shadow-5-white');
            $('.codehunt-'+codehunt_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codehunt-coordinator-details').fadeIn(300);
            },300);
            codehunt_present = 'coordinator';
        }
    });
    $('.codehunt-attachment-li').click(function () {
        if(codehunt_present!='attachment')
        {
            $('.codehunt-'+codehunt_present+'-li').removeClass('text-shadow-5-white');
            $('.codehunt-attachment-li').addClass('text-shadow-5-white');
            $('.codehunt-'+codehunt_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.codehunt-attachment-details').fadeIn(300);
            },300);
            codehunt_present = 'attachment';
        }
    });
    //------------sudoku Event Details Functions----------------//
    var sudoku_present = 'intro';
    $('.sudoku-intro-li').click(function () {
        if(sudoku_present!='intro')
        {
            $('.sudoku-'+sudoku_present+'-li').removeClass('text-shadow-5-white');
            $('.sudoku-intro-li').addClass('text-shadow-5-white');
            $('.sudoku-'+sudoku_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.sudoku-intro-details').fadeIn(300);
            },300);
            sudoku_present = 'intro';
        }
    });
    $('.sudoku-problemstatement-li').click(function () {
        if(sudoku_present!='problemstatement')
        {
            $('.sudoku-'+sudoku_present+'-li').removeClass('text-shadow-5-white');
            $('.sudoku-problemstatement-li').addClass('text-shadow-5-white');
            $('.sudokusudok-'+sudoku_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.sudoku-problemstatement-details').fadeIn(300);
            },300);
            sudoku_present = 'problemstatement';
        }
    });
    $('.sudoku-rules-li').click(function () {
        if(sudoku_present!='rules')
        {
            $('.sudoku-'+sudoku_present+'-li').removeClass('text-shadow-5-white');
            $('.sudoku-rules-li').addClass('text-shadow-5-white');
            $('.sudoku-'+sudoku_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.sudoku-rules-details').fadeIn(300);
            },300);
            sudoku_present = 'rules';
        }
    });
    $('.sudoku-prizes-li').click(function () {
        if(sudoku_present!='prizes')
        {
            $('.sudoku-'+sudoku_present+'-li').removeClass('text-shadow-5-white');
            $('.sudoku-prizes-li').addClass('text-shadow-5-white');
            $('.sudoku-'+sudoku_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.sudoku-prizes-details').fadeIn(300);
            },300);
            sudoku_present = 'prizes';
        }
    });
    $('.sudoku-coordinator-li').click(function () {
        if(sudoku_present!='coordinator')
        {
            $('.sudoku-'+sudoku_present+'-li').removeClass('text-shadow-5-white');
            $('.sudoku-coordinator-li').addClass('text-shadow-5-white');
            $('.sudoku-'+sudoku_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.sudoku-coordinator-details').fadeIn(300);
            },300);
            sudoku_present = 'coordinator';
        }
    });
    $('.sudoku-attachment-li').click(function () {
        if(sudoku_present!='attachment')
        {
            $('.sudoku-'+sudoku_present+'-li').removeClass('text-shadow-5-white');
            $('.sudoku-attachment-li').addClass('text-shadow-5-white');
            $('.sudoku-'+sudoku_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.sudoku-attachment-details').fadeIn(300);
            },300);
            sudoku_present = 'attachment';
        }
    });
    //------------trashmaster Event Details Functions----------------//
    var trashmaster_present = 'intro';
    $('.trashmaster-intro-li').click(function () {
        if(trashmaster_present!='intro')
        {
            $('.trashmaster-'+trashmaster_present+'-li').removeClass('text-shadow-5-white');
            $('.trashmaster-intro-li').addClass('text-shadow-5-white');
            $('.trashmaster-'+trashmaster_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.trashmaster-intro-details').fadeIn(300);
            },300);
            trashmaster_present = 'intro';
        }
    });
    $('.trashmaster-problemstatement-li').click(function () {
        if(trashmaster_present!='problemstatement')
        {
            $('.trashmaster-'+trashmaster_present+'-li').removeClass('text-shadow-5-white');
            $('.trashmaster-problemstatement-li').addClass('text-shadow-5-white');
            $('.trashmaster-'+trashmaster_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.trashmaster-problemstatement-details').fadeIn(300);
            },300);
            trashmaster_present = 'problemstatement';
        }
    });
    $('.trashmaster-rules-li').click(function () {
        if(trashmaster_present!='rules')
        {
            $('.trashmaster-'+trashmaster_present+'-li').removeClass('text-shadow-5-white');
            $('.trashmaster-rules-li').addClass('text-shadow-5-white');
            $('.trashmaster-'+trashmaster_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.trashmaster-rules-details').fadeIn(300);
            },300);
            trashmaster_present = 'rules';
        }
    });
    $('.trashmaster-prizes-li').click(function () {
        if(trashmaster_present!='prizes')
        {
            $('.trashmaster-'+trashmaster_present+'-li').removeClass('text-shadow-5-white');
            $('.trashmaster-prizes-li').addClass('text-shadow-5-white');
            $('.trashmaster-'+trashmaster_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.trashmaster-prizes-details').fadeIn(300);
            },300);
            trashmaster_present = 'prizes';
        }
    });
    $('.trashmaster-coordinator-li').click(function () {
        if(trashmaster_present!='coordinator')
        {
            $('.trashmaster-'+trashmaster_present+'-li').removeClass('text-shadow-5-white');
            $('.trashmaster-coordinator-li').addClass('text-shadow-5-white');
            $('.trashmaster-'+trashmaster_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.trashmaster-coordinator-details').fadeIn(300);
            },300);
            trashmaster_present = 'coordinator';
        }
    });
    $('.trashmaster-attachment-li').click(function () {
        if(trashmaster_present!='attachment')
        {
            $('.trashmaster-'+trashmaster_present+'-li').removeClass('text-shadow-5-white');
            $('.trashmaster-attachment-li').addClass('text-shadow-5-white');
            $('.trashmaster-'+trashmaster_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.trashmaster-attachment-details').fadeIn(300);
            },300);
            trashmaster_present = 'attachment';
        }
    });


    //------------exhibition Event Details Functions----------------//
    var exhibition_present = 'none';
    $('.static').click(function () {
        if(exhibition_present=='none')
        {
            $('.static').addClass('box-shadow-5-white');
            $('.static-details-wrapper').slideDown(300);
            exhibition_present = 'static';
        }
        else
        {
            if(exhibition_present=='chess')
            {
                $('.static').removeClass('box-shadow-5-white');
                $('.static-details-wrapper').slideUp(300);
                exhibition_present = 'none';
            }
            else
            {
                $('.static').addClass('box-shadow-5-white');
                $('.'+exhibition_present).removeClass('box-shadow-5-white');
                $('.'+exhibition_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.static-details-wrapper').slideDown(300);
                },300);
                exhibition_present = 'static';
            }
        }
    });
    $('.dynamic').click(function () {
        if(exhibition_present=='none')
        {
            $('.dynamic').addClass('box-shadow-5-white');
            $('.dynamic-details-wrapper').slideDown(300);
            exhibition_present = 'dynamic';
        }
        else
        {
            if(exhibition_present=='dynamic')
            {
                $('.dynamic').removeClass('box-shadow-5-white');
                $('.dynamic-details-wrapper').slideUp(300);
                exhibition_present = 'none';
            }
            else
            {
                $('.dynamic').addClass('box-shadow-5-white');
                $('.'+exhibition_present).removeClass('box-shadow-5-white');
                $('.'+exhibition_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.dynamic-details-wrapper').slideDown(300);
                },300);
                exhibition_present = 'dynamic';
            }
        }
    });
    $('.coding').click(function () {
        if(exhibition_present=='none')
        {
            $('.coding').addClass('box-shadow-5-white');
            $('.coding-details-wrapper').slideDown(300);
            exhibition_present = 'coding';
        }
        else
        {
            if(exhibition_present=='coding')
            {
                $('.coding').removeClass('box-shadow-5-white');
                $('.coding-details-wrapper').slideUp(300);
                exhibition_present = 'none';
            }
            else
            {
                $('.coding').addClass('box-shadow-5-white');
                $('.'+exhibition_present).removeClass('box-shadow-5-white');
                $('.'+exhibition_present+'-details-wrapper').slideUp(300);
                setTimeout(function () {
                    $('.coding-details-wrapper').slideDown(300);
                },300);
                exhibition_present = 'coding';
            }
        }
    });
    //------------static Event Details Functions----------------//
    var static_present = 'intro';
    $('.static-intro-li').click(function () {
        if(chess_present!='intro')
        {
            $('.static-'+static_present+'-li').removeClass('text-shadow-5-white');
            $('.static-intro-li').addClass('text-shadow-5-white');
            $('.static-'+static_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.static-intro-details').fadeIn(300);
            },300);
            static_present = 'intro';
        }
    });
    $('.static-problemstatement-li').click(function () {
        if(static_present!='problemstatement')
        {
            $('.static-'+static_present+'-li').removeClass('text-shadow-5-white');
            $('.static-problemstatement-li').addClass('text-shadow-5-white');
            $('.static-'+static_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.static-problemstatement-details').fadeIn(300);
            },300);
            static_present = 'problemstatement';
        }
    });
    $('.static-rules-li').click(function () {
        if(static_present!='rules')
        {
            $('.static-'+static_present+'-li').removeClass('text-shadow-5-white');
            $('.static-rules-li').addClass('text-shadow-5-white');
            $('.static-'+static_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.static-rules-details').fadeIn(300);
            },300);
            static_present = 'rules';
        }
    });
    $('.static-prizes-li').click(function () {
        if(static_present!='prizes')
        {
            $('.static-'+static_present+'-li').removeClass('text-shadow-5-white');
            $('.static-prizes-li').addClass('text-shadow-5-white');
            $('.static-'+static_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.static-prizes-details').fadeIn(300);
            },300);
            static_present = 'prizes';
        }
    });
    $('.static-coordinator-li').click(function () {
        if(static_present!='coordinator')
        {
            $('.static-'+static_present+'-li').removeClass('text-shadow-5-white');
            $('.static-coordinator-li').addClass('text-shadow-5-white');
            $('.static-'+static_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.static-coordinator-details').fadeIn(300);
            },300);
            static_present = 'coordinator';
        }
    });
    $('.static-attachment-li').click(function () {
        if(static_present!='attachment')
        {
            $('.static-'+static_present+'-li').removeClass('text-shadow-5-white');
            $('.static-attachment-li').addClass('text-shadow-5-white');
            $('.static-'+static_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.static-attachment-details').fadeIn(300);
            },300);
            static_present = 'attachment';
        }
    });
    //------------dynamic Event Details Functions----------------//
    var dynamic_present = 'intro';
    $('.dynamic-intro-li').click(function () {
        if(dynamic_present!='intro')
        {
            $('.dynamic-'+dynamic_present+'-li').removeClass('text-shadow-5-white');
            $('.dynamic-intro-li').addClass('text-shadow-5-white');
            $('.dynamic-'+dynamic_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.dynamic-intro-details').fadeIn(300);
            },300);
            dynamic_present = 'intro';
        }
    });
    $('.dynamic-problemstatement-li').click(function () {
        if(dynamic_present!='problemstatement')
        {
            $('.dynamic-'+dynamic_present+'-li').removeClass('text-shadow-5-white');
            $('.dynamic-problemstatement-li').addClass('text-shadow-5-white');
            $('.dynamic-'+dynamic_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.dynamic-problemstatement-details').fadeIn(300);
            },300);
            dynamic_present = 'problemstatement';
        }
    });
    $('.dynamic-rules-li').click(function () {
        if(dynamic_present!='rules')
        {
            $('.dynamic-'+dynamic_present+'-li').removeClass('text-shadow-5-white');
            $('.dynamic-rules-li').addClass('text-shadow-5-white');
            $('.dynamic-'+dynamic_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.dynamic-rules-details').fadeIn(300);
            },300);
            dynamic_present = 'rules';
        }
    });
    $('.dynamic-prizes-li').click(function () {
        if(dynamic_present!='prizes')
        {
            $('.dynamic-'+dynamic_present+'-li').removeClass('text-shadow-5-white');
            $('.dynamic-prizes-li').addClass('text-shadow-5-white');
            $('.dynamic-'+dynamic_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.dynamic-prizes-details').fadeIn(300);
            },300);
            dynamic_present = 'prizes';
        }
    });
    $('.dynamic-coordinator-li').click(function () {
        if(dynamic_present!='coordinator')
        {
            $('.dynamic-'+dynamic_present+'-li').removeClass('text-shadow-5-white');
            $('.dynamic-coordinator-li').addClass('text-shadow-5-white');
            $('.dynamic-'+dynamic_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.dynamic-coordinator-details').fadeIn(300);
            },300);
            dynamic_present = 'coordinator';
        }
    });
    $('.dynamic-attachment-li').click(function () {
        if(dynamic_present!='attachment')
        {
            $('.dynamic-'+dynamic_present+'-li').removeClass('text-shadow-5-white');
            $('.dynamic-attachment-li').addClass('text-shadow-5-white');
            $('.dynamic-'+dynamic_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.dynamic-attachment-details').fadeIn(300);
            },300);
            dynamic_present = 'attachment';
        }
    });
    //------------coding Event Details Functions----------------//
    var coding_present = 'intro';
    $('.coding-intro-li').click(function () {
        if(coding_present!='intro')
        {
            $('.coding-'+coding_present+'-li').removeClass('text-shadow-5-white');
            $('.coding-intro-li').addClass('text-shadow-5-white');
            $('.coding-'+coding_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.coding-intro-details').fadeIn(300);
            },300);
            coding_present = 'intro';
        }
    });
    $('.coding-problemstatement-li').click(function () {
        if(coding_present!='problemstatement')
        {
            $('.coding-'+coding_present+'-li').removeClass('text-shadow-5-white');
            $('.coding-problemstatement-li').addClass('text-shadow-5-white');
            $('.coding-'+coding_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.coding-problemstatement-details').fadeIn(300);
            },300);
            coding_present = 'problemstatement';
        }
    });
    $('.coding-rules-li').click(function () {
        if(coding_present!='rules')
        {
            $('.coding-'+coding_present+'-li').removeClass('text-shadow-5-white');
            $('.coding-rules-li').addClass('text-shadow-5-white');
            $('.coding-'+coding_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.coding-rules-details').fadeIn(300);
            },300);
            coding_present = 'rules';
        }
    });
    $('.coding-prizes-li').click(function () {
        if(coding_present!='prizes')
        {
            $('.coding-'+coding_present+'-li').removeClass('text-shadow-5-white');
            $('.coding-prizes-li').addClass('text-shadow-5-white');
            $('.coding-'+coding_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.coding-prizes-details').fadeIn(300);
            },300);
            coding_present = 'prizes';
        }
    });
    $('.coding-coordinator-li').click(function () {
        if(coding_present!='coordinator')
        {
            $('.coding-'+coding_present+'-li').removeClass('text-shadow-5-white');
            $('.coding-coordinator-li').addClass('text-shadow-5-white');
            $('.coding-'+coding_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.coding-coordinator-details').fadeIn(300);
            },300);
            coding_present = 'coordinator';
        }
    });
    $('.coding-attachment-li').click(function () {
        if(coding_present!='attachment')
        {
            $('.coding-'+coding_present+'-li').removeClass('text-shadow-5-white');
            $('.coding-attachment-li').addClass('text-shadow-5-white');
            $('.coding-'+coding_present+'-details').fadeOut(300);
            setTimeout(function () {
                $('.coding-attachment-details').fadeIn(300);
            },300);
            coding_present = 'attachment';
        }
    });


    //-------------------------------------------------------------------------------//
    $('.civilized-event-poster').click(function () {
        $('.events-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.civilised-event-details-wrapper').fadeIn(300);
        },300);
    });
    $('.civilised-back-button').click(function () {
        $('.civilised-event-details-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.events-wrapper').fadeIn(300);
        },300);
    });
    $('.robotics-event-poster').click(function () {
        $('.events-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.robotics-event-details-wrapper').fadeIn(300);
        },300);
    });
    $('.robotics-back-button').click(function () {
        $('.robotics-event-details-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.events-wrapper').fadeIn(300);
        },300);
    });
    $('.technozion-event-poster').click(function () {
        $('.events-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.technozion-event-details-wrapper').fadeIn(300);
        },300);
    });
    $('.technozion-back-button').click(function () {
        $('.technozion-event-details-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.events-wrapper').fadeIn(300);
        },300);
    });
    $('.management-event-poster').click(function () {
        $('.events-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.management-event-details-wrapper').fadeIn(300);
        },300);
    });
    $('.management-back-button').click(function () {
        $('.management-event-details-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.events-wrapper').fadeIn(300);
        },300);
    });
    $('.jbuzz-event-poster').click(function () {
        $('.events-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.jbuzz-event-details-wrapper').fadeIn(300);
        },300);
    });
    $('.jbuzz-back-button').click(function () {
        $('.jbuzz-event-details-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.events-wrapper').fadeIn(300);
        },300);
    });
    $('.exhibition-event-poster').click(function () {
        $('.events-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.exhibition-event-details-wrapper').fadeIn(300);
        },300);
    });
    $('.exhibition-back-button').click(function () {
        $('.exhibition-event-details-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.events-wrapper').fadeIn(300);
        },300);
    });





    /*function civilisedclick() {
        $('.events-wrapper').fadeOut(300);
        setTimeout(function () {
            $('.civilised-event-details-wrapper').fadeIn(300);
        },300);
    }*/
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
    var present_coord = 'chief';
    $('#chief-selector').click(function () {
        if(present_coord!='chief')
        {
            $('#'+present_coord+'-names').fadeOut(300);
            present_coord = 'chief';
            setTimeout(function () {
                $('#'+present_coord+'-names').fadeIn(300);
            },300);
        }
    });
    $('#creative-selector').click(function () {
        if(present_coord!='creative')
        {
            $('#'+present_coord+'-names').fadeOut(300);
            present_coord = 'creative';
            setTimeout(function () {
                $('#'+present_coord+'-names').fadeIn(300);
            },300);
        }
    });
    $('#marketing-selector').click(function () {
        if(present_coord!='marketing')
        {
            $('#'+present_coord+'-names').fadeOut(300);
            present_coord = 'marketing';
            setTimeout(function () {
                $('#'+present_coord+'-names').fadeIn(300);
            },300);
        }
    });
    $('#cashier-selector').click(function () {
        if(present_coord!='cashier')
        {
            $('#'+present_coord+'-names').fadeOut(300);
            present_coord = 'cashier';
            setTimeout(function () {
                $('#'+present_coord+'-names').fadeIn(300);
            },300);
        }
    });
    $('#sponsor-selector').click(function () {
        if(present_coord!='sponsor')
        {
            $('#'+present_coord+'-names').fadeOut(300);
            present_coord = 'sponsor';
            setTimeout(function () {
                $('#'+present_coord+'-names').fadeIn(300);
            },300);
        }
    });
    $('#web-selector').click(function () {
        if(present_coord!='web')
        {
            $('#'+present_coord+'-names').fadeOut(300);
            present_coord = 'web';
            setTimeout(function () {
                $('#'+present_coord+'-names').fadeIn(300);
            },300);
        }
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
