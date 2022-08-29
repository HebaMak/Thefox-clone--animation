/* global $ , window */

$(function () {
    'use strict';

     // and & remove class active to navbar items
    $('.navbar-light li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    });

   // navbar fixedTop on scrolling
    $(window).scroll(function () {
        var navbar = $('.navbar');
        $(window).scrollTop() >= $('.header').height() ? navbar.addClass('fixed-top') : navbar.removeClass('fixed-top');
    });

    //scroll to sections & sync links with sections
    //scroll
    $('.navbar-light li a').on('click' , function(e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop : $('#' + $(this).data('scroll')).offset().top + 1 
        } , 1000);
    })

    //sync
    $(window).scroll(function () {
        $('.syncWithLink').each(function () {
            if($(window).scrollTop() > $(this).offset().top) {
                var currentId = $(this).attr('id');
                $('.navbar-light li').removeClass('active');
                $('.navbar-light li a[data-scroll = "'+ currentId +'"]').parent().addClass('active');
            }
        })
    });

        /* when the navbar at middel and on scroll fixed at top
        $(window).scroll(function(){
            var navbar = $('.navbar');
            if( $(window).scrollTop() >= $('.header').height() ){
                navbar.addClass('fixed-top');
            }else{
                navbar.removeClass('fixed-top');
            }
       }); */

        //carosel (Blog section)
        $(function() {

            $('#carousel').carouFredSel({
                width: '100%',
                items: {
                    visible: 'odd+2'
                },
                scroll: {
                    pauseOnHover: true,
                    onBefore: function() {
                        $(this).children().removeClass( 'hover' );
                    }
                },
                auto: {
                    items: 1,
                    easing: 'linear',
                    duration: 1250,
                    timeoutDuration: 1000
                },
                pagination: {
                    container: '#pager',
                    items: 1,
                    duration: 0.5,
                    queue: 'last',
                    onAfter: function() {
                        var cur = $(this).triggerHandler( 'currentVisible' ),
                            mid = Math.floor( cur.length / 8 );
                        cur.eq( mid ).addClass( 'hover' );
                    }
                }
            });
        });
        //end carousel


        // scroll top btn
        var scrollButton = $("#scroll-up");

        /*show and hide the button*/
        $(window).scroll(function(){

            if($(this).scrollTop()>=700){
                scrollButton.show();
            }else{
                scrollButton.hide();
            }
            
        });

        /*click on button to scroll up*/ 
        scrollButton.click(function(){
            $("html,body").animate({scrollTop:0},600);
        });


         //trigger nicescroll
        $('html').niceScroll({
            cursorcolor: '#01ffcd',
            cursorwidth: '10px' ,
            cursorborder:'none' ,
        });

        // //fit Text 

        // $(".header h1").fitText(1.2, { minFontSize: '16px', maxFontSize: '50px' });
        // $(".header a").fitText(1.2, { minFontSize: '14px', maxFontSize: '18px' });
        // // $("h5").fitText(1.2, { minFontSize: '14px', maxFontSize: '16px' });

        // $(".header p").fitText(1.2, { minFontSize: '14px', maxFontSize: '17px' });


});


