(function ($) {
    
    $(document).ready(function () {
        $("input[data-type='datepicker-start']").datepicker({
            defaultDate: null,
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            minDate: 0,
            onSelect: function(selected) {
                $("input[data-type='datepicker-end']").datepicker("option", "minDate", selected)
            }
        });
        $("input[data-type='datepicker-end']").datepicker({
            defaultDate: null,
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            minDate: 0,
            onSelect: function (selected) {
                $("input[data-type='datepicker-start']").datepicker("option", "maxDate", selected)
            }
        }); 
        $("input[data-type='datepicker-start-nomin']").datepicker({
            defaultDate: null,
            dateFormat: "yy/mm/dd",
            changeMonth: true,
            onSelect: function(selected) {
                $("input[data-type='datepicker-end-nomin']").datepicker("option", "minDate", selected)
            }
        });
        $("input[data-type='datepicker-end-nomin']").datepicker({
            defaultDate: null,
            dateFormat: "yy/mm/dd",
            changeMonth: true,
            onSelect: function (selected) {
                $("input[data-type='datepicker-start-nomin']").datepicker("option", "maxDate", selected)
            }
        });         
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