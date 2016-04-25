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

$(document).ready(function(){    
    $('#navicon').click(function(){
        $(this).toggleClass('open'); //(navicon transition)
        $('.menu').toggleClass('open'); //(adds nav menu)
        $('.below-header').toggleClass('push');
        // $('.landing-info').css('top', menuHeight+navPadding+navPadding);

    });

    function updateContainer() {
        $('header').css('height', headerHeight+5);
        
        if ($(window).innerWidth() <= 751) {
            $('.landing-info').css('padding-top', finalEquation+headerHeight); //add headerHeight to account for fixed header
            $('.landing-info').css('padding-bottom', theHeightMinusHeaderHeight/2-landingInfoHalf);//this = finalEquation which I only added so I could easily add headerHeight to padding-top
        } else {
            $('.landing-info').css('padding-top', 200);
        }

        $('nav ul').css('padding-top', navPadding);
        $('nav ul').css('padding-bottom', navPadding);

        if ($(window).innerWidth() <= 751) {
            $('.subtitle-banner').css('top', headerHeight);
            $('.below-header p').css('top', headerHeight);
        } else {
            $('.subtitle-banner').css('top', 0);
            $('.below-header p').css('top', 0);
        }
        
        console.log('theHeight', theHeight);
        console.log('headerHeight', headerHeight);
        console.log('navPadding', navPadding);
        console.log('nav height', navPadding*2 + navTextHeight);
        console.log('landingInfoHeight', landingInfoHeight);
        console.log('landingInfoHalf', landingInfoHalf);
        console.log('theHeightMinusHeaderHeight', theHeightMinusHeaderHeight);
        console.log('theHeightMinusHeaderHeight-landingInfoHalf', theHeightMinusHeaderHeight-landingInfoHalf);         
    }

    updateContainer();

    $(window).resize(function() {
        updateContainer();
    });
});        
