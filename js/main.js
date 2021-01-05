$(function (){
    'use strict';
    $(window).scroll(function(){
        
        var navbar = $('.navbar');
        if($(window).scrollTop() >= navbar.height()){
            navbar.addClass('scrolled');
        }
        else{
            navbar.removeClass('scrolled');
        }
    })

    // deal with tabs
    $('.tab-switch li').click(function(){
        // add selected class to active link
        $(this).addClass('selected').siblings().removeClass('selected');

        //hide all divs
        $('.tabs .tabs-content > div ').hide();
        
        //show connected div
        $('.' + $(this).data('class')).show();
        
    })
})