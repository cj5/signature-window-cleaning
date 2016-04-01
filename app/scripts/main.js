$(document).ready(function(){    
    function updateContainer() {
        var theHeight = $(window).height();
        var headerHeight = $('.logo').height();
        var navTextHeight = $('nav a').height();
        
        $('header').css('height', headerHeight+20);
        $('nav ul').css('margin-top', headerHeight/2+8 - navTextHeight/2);
        $('nav ul').css('margin-bottom', headerHeight/2+8 - navTextHeight/2); 
        console.log(headerHeight);         
    }

    updateContainer();

    $(window).resize(function() {
        updateContainer();
    });
});        
