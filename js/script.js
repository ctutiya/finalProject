$( document ).ready(function()
{
    $('.lnk-search').click(function()
    {
        if ($('.form-search-container').hasClass('show')) $('.form-search-container').removeClass('show');
        else $('.form-search-container').addClass('show');
    });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        
        if (scroll >= 200) $('.navbar').addClass('fixed-top');
        else $('.navbar').removeClass('fixed-top');
        
        if (scroll >= 450) $('.navbar').addClass('visible');
        else $('.navbar').removeClass('visible');
    });
});