/**
 * Created by ATANU on 08-Jan-18.
 */
$(document).ready(function () {
    $('#notice').hide();
    $('#view_notice').click(function(){
        $('#level').hide();
        $('#notice').show();
    });
    $('#view_level').click(function(){
        $('#notice').hide();
        $('#level').show();
    });
});
