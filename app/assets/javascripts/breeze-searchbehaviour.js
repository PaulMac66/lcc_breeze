(function ($) {
    
    $(document).ready(function () {        
        $('.activitySearchHomeHeader a').click(function () {
            $('.activitySearchHomeContent').slideToggle("slow");
            $('.activitySearchHomeHeader').toggleClass("active");
            
        });
            
        $('.rbEvents').click(function () {
            $(".searchEvents").css('display', 'block');
            $(".searchVenues").css('display', 'none');
            $('.rbEvents input:radio').attr('checked', true);
            $('.rbVenues input:radio').attr('checked', false);

        });
        $('.rbVenues').click(function () {
            $(".searchEvents").css('display', 'none');
            $(".searchVenues").css('display', 'block');
            $('.rbEvents input:radio').attr('checked', false);
            $('.rbVenues input:radio').attr('checked', true);
        });
    });
})(jQuery);