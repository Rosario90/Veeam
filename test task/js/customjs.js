$(document).ready(function(){
    $("select").selecter();
});
$(document).ready(function(){
    $("a.popup-window").click(function() {
        var popupBox = $(this).attr('href');
        $(popupBox).fadeIn(400);
        var popMargTop = ($(popupBox).height() + 24) / 2;
        var popMargLeft = ($(popupBox).width() + 24) / 2;

        $(popupBox).css({
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
        });

        $('body').append('<div id="mask"></div>');
        $('#mask').fadeIn(400);
        return false;
    });
    $('button.close, #mask').on('click', function() {
        $('#mask, .popup-info').fadeOut(400, function() {
            $('#mask').remove();
        });
        return false;
    });
});
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        $('#mask, .popup-info, #popup-box').fadeOut(400);
        return false;
    }
});