var theHeight = $(window).height();
var logoHeight = $('.logo').height();
var headerHeight = logoHeight+30;
var navTextHeight = $('nav a').height();
var menuHeight = $('.menu').height();
var navPadding = headerHeight/2 - navTextHeight/2;
var landingInfoHeight = $('.landing-info').height();
var theHeightMinusHeaderHeight = theHeight-headerHeight;
var landingInfoHalf = landingInfoHeight/2;
var finalEquation = theHeightMinusHeaderHeight/2-landingInfoHalf
var buttonHeight = $('.button').height();
var footerHeight = $('footer').height();
var belowHeaderHeight = $('.below-header').height();

$(document).ready(function(){ 
    // $('.landing-info .button a').css('height', buttonHeight);   
    $('#navicon').click(function(){
        $(this).toggleClass('open'); //(navicon transition)
        $('.menu').toggleClass('open'); //(adds nav menu)
        $('.below-header').toggleClass('push');
        // $('.landing-info').css('top', menuHeight+navPadding+navPadding);
    });

    function updateContainer() {       
        if ($(window).innerWidth() <= 751) {
            $('.landing-info').css('padding-top', finalEquation+headerHeight); //add headerHeight to account for fixed header
            $('.landing-info').css('padding-bottom', theHeightMinusHeaderHeight/2-landingInfoHalf);
            //this = finalEquation which I only added so I could easily add headerHeight to padding-top
            $('header').css('height', headerHeight);
        } else {
            $('.landing-info').css('padding-top', 200);
            $('header').css('height', headerHeight+navTextHeight/2);
        }

        $('nav ul').css('padding-top', navPadding);
        $('nav ul').css('padding-bottom', navPadding);

        if ($(window).innerWidth() <= 751) {
            $('.subtitle-banner').css('top', headerHeight);
            $('.below-header p').css('top', headerHeight);
            // $('.p-footer').css('top', 0);
        } else {
            $('.subtitle-banner').css('top', 0);
            $('.below-header p').css('top', 0);
        }

        // if ($(window).innerWidth() >= 752) {
        //     $('footer').css('top',theHeight-headerHeight-belowHeaderHeight);
        // }
        
        console.log('theHeight', theHeight);
        console.log('headerHeight', headerHeight);
        console.log('buttonHeight', buttonHeight);
        console.log('navPadding', navPadding);
        console.log('nav height', navPadding*2 + navTextHeight);
        console.log('landingInfoHeight', landingInfoHeight);
        console.log('landingInfoHalf', landingInfoHalf);
        console.log('theHeightMinusHeaderHeight', theHeightMinusHeaderHeight);
        console.log('theHeightMinusHeaderHeight-landingInfoHalf', theHeightMinusHeaderHeight-landingInfoHalf);         
    }

    updateContainer();

    $('#myAffix').affix({
      offset: {
        top: 100,
        bottom: function () {
          return (this.bottom = $('.footer').outerHeight(true))
        }
      }
    })

    $(window).resize(function() {
        updateContainer();
    });

    $('.owl-carousel').owlCarousel({
        center:true,
        loop:true,
        margin:10,
        nav:true,
        navSpeed:1000,
        dots:true,
        dotsSpeed:1000,
        autoplay: true,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $.each({
        'next >>': this.next,
        '<< prev': this.prev,
    }, $.proxy(function(event, callback) {
        this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
    }, this));

});        
