$(document).ready(function () {
    $('.newsMore').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    $(".newsMore").on("click", function () {
        $('.fullWidth.fullWidthHeader').toggleClass('active');
        $(this).parent().next('.newsItemFull').toggleClass('active');
        return false;
    });
    $(".revealClose, .scrollNews").on("click", function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this).parents('.newsItem').offset().top }, 600);
        $(this).parents('div').toggleClass('active');
        return false;
    });
}); 